import { Lightbulb, Target, Palette, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Lightbulb,
    title: "Creative Problem-Solving",
    description: "Innovative approaches to complex challenges",
  },
  {
    icon: Target,
    title: "Design Thinking",
    description: "User-centered design methodology",
  },
  {
    icon: Palette,
    title: "Visual Excellence",
    description: "Attention to detail and aesthetic refinement",
  },
  {
    icon: Sparkles,
    title: "Innovation Driven",
    description: "Pushing boundaries with emerging technologies",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About</h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-16 text-center max-w-3xl mx-auto leading-relaxed">
          A creative professional focused on innovative problem-solving and design thinking. 
          Experienced in frontend development, UI/UX design, and translating ideas into 
          functional, user-centered digital experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="card-hover group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
