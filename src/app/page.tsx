import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Github, Linkedin, Twitter, Code, ExternalLink, Mail } from 'lucide-react';

const projects = [
  {
    title: "Project One",
    description: "A brief description of a cool project. It solves a real-world problem using modern technologies.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "#",
    repo: "#"
  },
  {
    title: "Project Two",
    description: "Another project that showcases different skills, perhaps involving a backend or a database.",
    stack: ["React", "Node.js", "Firebase"],
    link: "#",
    repo: "#"
  },
  {
    title: "Project Three",
    description: "This one could be a mobile app or a data science project, highlighting versatility.",
    stack: ["React Native", "GraphQL", "Python"],
    link: "#",
repo: "#"
  }
];

const skills = ["TypeScript", "React", "Next.js", "Node.js", "Python", "Firebase", "Docker", "Kubernetes", "GraphQL"];

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-20">
        <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-primary ring-offset-4 ring-offset-background">
          <AvatarImage src="https://picsum.photos/seed/avatar/200/200" alt="Nova" />
          <AvatarFallback>N</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">Nova K.</h1>
        <p className="mt-4 text-xl md:text-2xl text-muted-foreground">
          Full-Stack Developer & Creative Coder
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          I build high-quality web applications with a focus on user experience and performance.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/blog">Read My Blog</Link>
          </Button>
        </div>
        <div className="mt-10 flex justify-center gap-6">
          <a href="#" className="text-muted-foreground hover:text-primary"><Github size={24} /></a>
          <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin size={24} /></a>
          <a href="#" className="text-muted-foreground hover:text-primary"><Twitter size={24} /></a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-20">
        <h2 className="text-3xl font-bold font-headline mb-8 text-center">About Me</h2>
        <Card className="max-w-3xl mx-auto">
          <CardContent className="pt-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I'm Nova, a passionate software developer with a knack for turning ideas into reality. With several years of experience in the industry, I specialize in modern web technologies and love tackling complex challenges. My journey in tech started with a simple "Hello, World!" and has since grown into a full-fledged passion for building elegant, efficient, and scalable solutions. When I'm not coding, I enjoy exploring the outdoors and writing about technology on my blog.
            </p>
          </CardContent>
        </Card>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="scroll-mt-20">
        <h2 className="text-3xl font-bold font-headline mb-8 text-center">My Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {skills.map(skill => (
            <div key={skill} className="flex items-center gap-2 bg-secondary text-secondary-foreground py-2 px-4 rounded-lg">
              <Code size={16} />
              <span className="font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-20">
        <h2 className="text-3xl font-bold font-headline mb-8 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map(tech => (
                    <span key={tech} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
              </CardContent>
              <div className="flex justify-end p-4 gap-2 border-t">
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Github size={20} /></a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><ExternalLink size={20} /></a>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20">
        <h2 className="text-3xl font-bold font-headline mb-8 text-center">Let's Connect</h2>
        <Card className="max-w-xl mx-auto">
          <CardContent className="pt-6 text-center">
             <p className="text-lg text-muted-foreground mb-4">
              I'm currently open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <Button asChild variant="link" className="text-lg">
              <a href="mailto:hello@example.com">
                <Mail className="mr-2" /> hello@novakode.com
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
