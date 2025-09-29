import { useState } from "react";
import { Menu, X, Home, User, Briefcase, Award, HelpCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", icon: Home, href: "#home" },
  { label: "About", icon: User, href: "#about" },
  { label: "Projects", icon: Briefcase, href: "#projects" },
  { label: "Skills", icon: Award, href: "#skills" },
  { label: "FAQ", icon: HelpCircle, href: "#faq" },
  { label: "Contact", icon: Mail, href: "#footer" },
];

export const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary hover:bg-primary-glow shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-20 right-0 bg-card rounded-2xl shadow-2xl p-4 min-w-[200px] animate-fade-in">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleClick(item.href)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-secondary transition-all duration-200 text-left group"
              >
                <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};
