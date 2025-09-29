import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import themedTravel from "@/assets/themed-travel.png";
import ecoTrack from "@/assets/eco-track.png";
import novaStriker from "@/assets/nova-striker.png";
import pureMotion from "@/assets/pure-motion.png";
import quantixDashboard from "@/assets/quantix-dashboard.png";
import budgetTracker from "@/assets/budget-tracker.png";

const projects = [
  {
    name: "ThemedTravel",
    description: "Discover your next adventure",
    image: themedTravel,
    link: "https://themedtravel.vercel.app",
  },
  {
    name: "EcoTrack",
    description: "Track your carbon impact",
    image: ecoTrack,
    link: "https://ecotrack-pi.vercel.app",
  },
  {
    name: "NovaStriker",
    description: "Master your football skills",
    image: novaStriker,
    link: "https://nova-strike-nine.vercel.app",
  },
  {
    name: "PureMotion",
    description: "Monitor health stats effectively",
    image: pureMotion,
    link: "https://pure-motion.vercel.app",
  },
  {
    name: "Quantix Dashboard",
    description: "Manage business analytics",
    image: quantixDashboard,
    link: "https://quantix-dashboard.vercel.app",
  },
  {
    name: "Budget Tracker",
    description: "Control your budget",
    image: budgetTracker,
    link: "https://budget-tracker-jm.vercel.app",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Projects</h2>
        <p className="text-center text-muted-foreground mb-12">
          A collection of prototype projects demonstrating design and development capabilities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {projects.map((project, index) => (
            <Card
              key={project.name}
              className="card-hover overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <Badge variant="secondary" className="text-xs italic shrink-0">
                      Prototype
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </a>
            </Card>
          ))}

          <Card className="border-dashed border-2 border-muted-foreground/30 bg-muted/50">
            <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center min-h-[300px]">
              <div className="w-16 h-16 mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="text-3xl">+</span>
              </div>
              <h3 className="text-xl font-bold mb-2">More Coming Soon</h3>
              <p className="text-muted-foreground text-sm">
                Additional projects in development
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Badge variant="outline" className="text-sm">
            All projects are prototypes with placeholder content
          </Badge>
        </div>
      </div>
    </section>
  );
};
