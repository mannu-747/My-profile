import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Code, ExternalLink } from "lucide-react";

export default function HeroSection() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="pt-16 min-h-screen flex items-center hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              <Code className="w-4 h-4 mr-2" />
              Available for opportunities
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="gradient-text">Manoj Kumar</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
              Software Engineer & Backend Specialist
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Results-driven Software Engineer with 2+ years of experience in designing robust backend solutions. 
              Specialized in Python, AWS, and performance optimization - achieving 55% reduction in SQL execution time.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                onClick={() => handleNavClick("#contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                onClick={() => handleNavClick("#projects")}
                className="px-8 py-3 rounded-full font-medium transition-all hover:scale-105"
              >
                View Projects
              </Button>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="https://linkedin.com/in/manojkumarpichuka" 
                className="text-muted-foreground hover:text-primary text-xl transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/manojkumarpichuka" 
                className="text-muted-foreground hover:text-primary text-xl transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://leetcode.com/manojkumarpichuka" 
                className="text-muted-foreground hover:text-primary text-xl transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code className="w-6 h-6" />
              </a>
              <a 
                href="mailto:manojkumarpichuka123@gmail.com" 
                className="text-muted-foreground hover:text-primary text-xl transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl animate-float">
              <img 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Developer workspace with multiple monitors and code" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating achievement cards */}
            <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-lg animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">2+ Years Experience</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-lg animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center space-x-2">
                <div className="text-warning">🏆</div>
                <span className="text-sm font-medium">Hackathon Winner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
