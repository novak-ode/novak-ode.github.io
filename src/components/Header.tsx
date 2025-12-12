import Link from 'next/link';
import { CodeXml } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  const navLinks = (
    <>
      <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Home
      </Link>
      <Link href="/blog" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Blog
      </Link>
      <Link href="/#about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        About
      </Link>
      <Link href="/#projects" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Projects
      </Link>
      <Link href="/#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Contact
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="flex items-center space-x-2">
            <CodeXml className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">Novakode</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks}
        </nav>
        <div className="flex flex-1 items-center justify-between md:justify-end">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                 <Link href="/" className="flex items-center space-x-2 mb-6">
                  <CodeXml className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline text-lg">Novakode</span>
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navLinks}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
