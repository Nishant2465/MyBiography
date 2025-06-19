
import { Facebook, Instagram, ArrowUp, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted border-t border-border mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm">
              Copyright © 2025 Nishant Sharma
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              nishant2465@gmail.com
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/nishant-sharma-b845881a7/"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/nishants91/"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 ml-4"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;