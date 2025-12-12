export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  contentHtml: string;
};

export type PostPreview = Omit<Post, 'contentHtml'>;

export type Category = string;
