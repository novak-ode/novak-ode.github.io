import Link from 'next/link';
import { getSortedPostsData, getAllCategories } from '@/lib/posts';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import type { Metadata } from 'next';

type Props = {
  params: {
    categoryName: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categoryName = decodeURIComponent(params.categoryName);
  const title = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  return {
    title: `Posts in ${title} | Novakode`,
    description: `Browse all blog posts categorized under ${title}.`,
  };
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    categoryName: category.toLowerCase(),
  }));
}

export default function CategoryPage({ params }: Props) {
  const { categoryName } = params;
  const decodedCategoryName = decodeURIComponent(categoryName);
  const allPosts = getSortedPostsData();
  const posts = allPosts.filter(
    (post) => post.category.toLowerCase() === decodedCategoryName
  );

  if (posts.length === 0) {
    notFound();
  }
  
  const title = decodedCategoryName.charAt(0).toUpperCase() + decodedCategoryName.slice(1);

  return (
    <div className="space-y-12">
      <div className="text-center">
        <p className="text-lg text-muted-foreground mb-2">Category</p>
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">{title}</h1>
      </div>

      <section>
        <div className="grid gap-8">
          {posts.map(({ slug, date, title, excerpt, category }) => (
            <Card key={slug} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="font-headline text-2xl">
                    <Link href={`/blog/posts/${slug}`} className="hover:text-primary transition-colors">
                      {title}
                    </Link>
                  </CardTitle>
                </div>
                <CardDescription>
                  <time dateTime={date}>{format(new Date(date), 'LLLL d, yyyy')}</time>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/blog/posts/${slug}`} className="text-sm font-semibold text-primary hover:underline">
                  Read more &rarr;
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
