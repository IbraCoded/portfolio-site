import { Badge } from "@/components/ui/badge";

const skills = [
  "HTML",
  "CSS",
  "Python",
  "Django",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Git",
  "Tailwind CSS",
];

export function Skills() {
  return (
    <section id="skills" className="py-16 px-4 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-2 text-primary">Skills</h2>
      <p className="text-muted-foreground mb-8">Technologies I work with</p>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            className="text-lg py-2 px-4 bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-default"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}
