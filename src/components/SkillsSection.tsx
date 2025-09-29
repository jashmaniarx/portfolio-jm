import { Card, CardContent } from "@/components/ui/card";
import {
  Palette,
  Lightbulb,
  Code,
  Puzzle,
  Monitor,
  Briefcase,
  Sparkles,
  MessageSquare,
  Users,
} from "lucide-react";

// Skills data array
const skills = [
  { name: "Web Design", icon: Palette },
  { name: "Design Thinking", icon: Lightbulb },
  { name: "Frontend Coding", icon: Code },
  { name: "Problem-Solving", icon: Puzzle },
  { name: "Computer Literacy", icon: Monitor },
  { name: "Productivity Tools", icon: Briefcase },
  { name: "Design & Innovation", icon: Sparkles },
  { name: "Prompting (AI)", icon: MessageSquare },
  { name: "Teamwork", icon: Users },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center text-muted-foreground mb-12">
          Technical and creative competencies applied across projects
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className="card-hover group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Explore my{" "}
            <a
              href="https://github.com/jashmaniarx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://codepen.io/jashmaniarx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              CodePen
            </a>{" "}
            for more examples
          </p>
        </div>
      </div>
    </section>
  );
};
