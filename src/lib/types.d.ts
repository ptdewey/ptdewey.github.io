export type Page = {
  slug: string;
  title: string;
};

export type BlogPost = {
  post: ?Post;
};

export type Post = {
  metadata: PostMetadata;
  content: string;
};

export type PostMetadata = {
  authors: string[];
  categories: ?string[];
  date: string;
  read_time: number;
  slug: string;
  tags: ?string[];
  title: string;
};
