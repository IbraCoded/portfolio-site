import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "DBF Charity Website",
    description:
      "A platform designed to streamline donations, showcase impact stories, and enhance outreach efforts. Built using Next.js and Firebase, it provides a user-friendly interface for donors, volunteers, and beneficiaries. The site integrates data analytics to optimize resource allocation and features a dynamic content management system for easy updates.",
    image: "/dbf-image.png",
    tags: ["Nextjs", "Firebase", "Docker"],
  },
  // {
  //   title: "Project 2",
  //   description: "A brief description of Project 2 and its key features",
  //   image: "/placeholder.svg?height=200&width=300",
  //   tags: ["Vue.js", "Express", "PostgreSQL"],
  // },
  // {
  //   title: "Project 3",
  //   description: "A brief description of Project 3 and its key features",
  //   image: "/placeholder.svg?height=200&width=300",
  //   tags: ["Next.js", "Tailwind CSS", "Supabase"],
  // },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 px-4 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-2 text-primary">
        Featured Projects
      </h2>
      <p className="text-muted-foreground mb-8">Some of my recent work</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300"
          >
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl text-primary">
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-48 w-full overflow-hidden rounded-md">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardDescription className="text-muted-foreground">
                {project.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4 w-full">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/KoladTech/david-bukola-foundation"
                  className="flex items-center gap-2 text-sm text-primary hover:text-primary/90"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://davidbukolafoundation.org/"
                  className="flex items-center gap-2 text-sm text-primary hover:text-primary/90"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
