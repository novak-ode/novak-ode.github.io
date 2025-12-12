import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

export default function BlogHome() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-primary">Welcome to the Blog</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Exploring technology, design, and creativity through code.
        </p>
      </div>

      <section>
        <h2 className="text-3xl font-bold font-headline mb-8">Latest Posts</h2>
        <div className="grid gap-8">
          {allPostsData.map(({ slug, date, title, excerpt, category }) => (
            <Card key={slug} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="font-headline text-2xl">
                    <Link href={`/blog/posts/${slug}`} className="hover:text-primary transition-colors">
                      {title}
                    </Link>
                  </CardTitle>
                  <Link href={`/blog/category/${category.toLowerCase()}`}>
                    <Badge variant="secondary" className="hidden sm:inline-flex cursor-pointer">{category}</Badge>
                  </Link>
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
