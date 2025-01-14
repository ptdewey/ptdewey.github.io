export type Page = {
  slug: string;
  title: string;
};

export type BlogPost = {
  post?: Post;
};

export type Post = {
  metadata: PostMetadata;
  content: string;
};

export type PostMetadata = {
  authors: string[];
  categories?: string[];
  date: string;
  read_time: number;
  slug: string;
  tags?: string[];
  title: string;
};

export type Project = {
  title: string;
  description: string;
  link: string;
  image?: string;
  time?: string;
};

export type ProjectCategory = {
  category: string;
  items: Project[];
};
