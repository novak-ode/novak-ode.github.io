import { getPostData, getAllPostSlugs } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostData(params.slug).catch(() => null);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Novakode`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}

export default async function PostPage({ params }: Props) {
  const post = await getPostData(params.slug).catch(() => {
    notFound();
  });

  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8 text-center">
        <div className="mb-4">
          <Link href={`/category/${post.category.toLowerCase()}`} className="inline-block">
            <Badge variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">{post.category}</Badge>
          </Link>
        </div>
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-3">
          {post.title}
        </h1>
        <time dateTime={post.date} className="text-muted-foreground">
          {format(new Date(post.date), 'LLLL d, yyyy')}
        </time>
      </header>

      <div
        className="prose prose-lg dark:prose-invert max-w-none mx-auto"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
      
      <div className="mt-12 text-center">
        <Link href="/" className="text-primary hover:underline">
            &larr; Back to all posts
        </Link>
      </div>
    </article>
  );
}
