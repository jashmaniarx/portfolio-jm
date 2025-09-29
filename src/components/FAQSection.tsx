import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are these projects finished products?",
    answer:
      "No, these are strictly prototypes designed to demonstrate UI/UX capabilities, design thinking, and technical skills. They showcase concept implementation rather than production-ready applications.",
  },
  {
    question: "Can these be expanded into full applications?",
    answer:
      "Yes, the prototypes are built with scalable architectures and can be adapted into fully functional applications with additional development, backend integration, and feature expansion.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Projects are built primarily with React, TypeScript, Tailwind CSS, shadcn/ui components, and Vite. Additional libraries are incorporated as needed for specific functionality.",
  },
  {
    question: "Are skills applied practically?",
    answer:
      "Yes, each project demonstrates practical application of design thinking, problem-solving, frontend development, and UI/UX principles. The portfolio itself showcases these competencies.",
  },
  {
    question: "Is this site fully responsive?",
    answer:
      "Yes, the portfolio is optimized for desktop, tablet, and mobile devices with responsive layouts, touch-friendly interactions, and performance considerations across all screen sizes.",
  },
  {
    question: "Will you continue adding projects?",
    answer:
      "Yes, the portfolio is actively maintained. New projects demonstrating emerging skills, technologies, and design approaches are added regularly.",
  },
  {
    question: "Is accessibility considered?",
    answer:
      "Yes, projects prioritize accessibility with proper contrast ratios, keyboard navigation support, semantic HTML structure, and ARIA labels where appropriate.",
  },
  {
    question: "How are animations applied?",
    answer:
      "Animations are implemented subtly to enhance user experience without overwhelming—including microanimations on hover, fade-in effects on scroll, and smooth transitions between states.",
  },
  {
    question: "How can employers contact you?",
    answer:
      "Contact information and professional profiles are available in the footer, including links to GitHub and CodePen for additional work examples.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Common questions about the portfolio and projects
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl px-6 border-0 shadow-sm"
            >
              <AccordionTrigger className="hover:no-underline py-6">
                <span className="text-left font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
