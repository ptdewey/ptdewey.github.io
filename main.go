package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"github.com/yuin/goldmark"
	highlighting "github.com/yuin/goldmark-highlighting"
	"github.com/yuin/goldmark/extension"
	"github.com/yuin/goldmark/renderer/html"
	"gopkg.in/yaml.v2"
)

type Page struct {
	Metadata map[string]interface{} `json:"metadata"`
	Content  string                 `json:"content"`
}

func generateSlug(title string) string {
	slug := strings.ToLower(strings.TrimSpace(title))
	slug = strings.ReplaceAll(slug, " ", "-")
	slug = strings.ReplaceAll(slug, ".", "")
	return slug
}

func parseFrontMatter(content []byte) (map[string]interface{}, []byte, error) {
	contentStr := string(content)
	if !strings.HasPrefix(contentStr, "---") {
		return nil, content, nil
	}
	parts := strings.SplitN(contentStr, "---", 3)
	if len(parts) < 3 {
		return nil, content, fmt.Errorf("invalid front-matter format")
	}
	var metadata map[string]interface{}
	if err := yaml.Unmarshal([]byte(parts[1]), &metadata); err != nil {
		return nil, nil, err
	}
	return metadata, []byte(parts[2]), nil
}

func processMarkdownFile(path string) (Page, error) {
	content, err := os.ReadFile(path)
	if err != nil {
		return Page{}, err
	}

	metadata, markdownContent, err := parseFrontMatter(content)
	if err != nil {
		return Page{}, err
	}

	if _, ok := metadata["slug"]; !ok {
		fname := strings.TrimSuffix(filepath.Base(path), filepath.Ext(path))
		metadata["slug"] = generateSlug(fname)
	}

	var htmlContent bytes.Buffer

	md := goldmark.New(
		goldmark.WithExtensions(
			extension.GFM,
			extension.Footnote,
			highlighting.NewHighlighting(
				highlighting.WithStyle("github"),
			),
		),
		goldmark.WithRendererOptions(
			html.WithHardWraps(),
			html.WithXHTML(),
		),
	)

	if err := md.Convert(markdownContent, &htmlContent); err != nil {
		return Page{}, err
	}

	return Page{
		Metadata: metadata,
		Content:  htmlContent.String(),
	}, nil
}

func processDirectory(dir string) ([]Page, error) {
	var posts []Page

	err := filepath.WalkDir(dir, func(path string, d os.DirEntry, err error) error {
		if err != nil {
			return err
		}

		if d.IsDir() {
			return nil
		}

		if strings.HasSuffix(d.Name(), ".md") {
			page, err := processMarkdownFile(path)
			if err != nil {
				return err
			}

			posts = append(posts, page)
		}
		return nil
	})

	return posts, err
}

func writeJSONFile(data interface{}, outputPath string) error {
	jsonData, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return err
	}
	return os.WriteFile(outputPath, jsonData, 0644)
}

func main() {
	posts, err := processDirectory("content")
	if err != nil {
		fmt.Printf("Error processing directory: %v\n", err)
		os.Exit(1)
	}

	if err := writeJSONFile(posts, "static/data/posts.json"); err != nil {
		fmt.Printf("Error writing posts.json: %v\n", err)
		os.Exit(1)
	}

	fmt.Println("Successfully generated posts.json")
}
