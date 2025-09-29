import { Github, Code } from "lucide-react";
import jmLogo from "@/assets/jm-logo.png";

export const Footer = () => {
  return (
    <footer id="footer" className="py-16 px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img
              src={jmLogo}
              alt="JM Logo"
              className="w-16 h-16 rounded-full shadow-lg"
            />
            <div>
              <p className="font-semibold text-lg">Portfolio Website by Jash Maniar</p>
              <p className="text-sm text-primary-foreground/80">
                Designed & Developed with Precision
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/jashmaniarx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary-glow transition-colors group"
              aria-label="Visit GitHub profile"
            >
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://codepen.io/jashmaniarx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary-glow transition-colors group"
              aria-label="Visit CodePen profile"
            >
              <Code className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-medium">CodePen</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Jash Maniar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
