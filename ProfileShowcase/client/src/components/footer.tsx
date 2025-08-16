import { Linkedin, Github, Code, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">MK</span>
            </div>
            <span className="font-semibold">Pichuka Manoj Kumar</span>
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href="https://linkedin.com/in/manojkumarpichuka" 
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/manojkumarpichuka" 
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://leetcode.com/manojkumarpichuka" 
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code className="w-5 h-5" />
            </a>
            <a 
              href="mailto:manojkumarpichuka123@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Pichuka Manoj Kumar. Built with passion and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}