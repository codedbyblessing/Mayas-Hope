import { Heart, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import exampleImage from 'figma:asset/24da0ce493792bdcd7267b9f5c6ff2b1d656a337.png';

export function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-muted/20 to-secondary/30 py-16 border-t border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={exampleImage} 
                  alt="Maya's Hope Logo" 
                  className="h-10 w-10 object-contain"
                />
                <div>
                  <div className="font-medium" style={{ fontFamily: 'Playfair Display, serif', color: '#1e3a5f' }}>
                    Maya's Hope
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Kamaya Benjamin
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Leveling the playing field for college access. 
                Join our community of innovators, educators, and hope-builders.
              </p>
            </div>
            
            <div>
              <h4 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>Quick Links</h4>
              <nav className="space-y-3">
                <a href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Kamaya
                </a>
                <a href="#products" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Programs & Workshops
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Book Recommendations
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog & Resources
                </a>
              </nav>
            </div>
            
            <div>
              <h4 className="mb-6" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '600' }}>Connect</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">kamaya@mayashope.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Online Community</span>
                </div>
                <div className="flex items-center space-x-5 pt-3">
                  <a 
                    href="https://www.instagram.com/iluvmymaya" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-accent/30 hover:bg-accent/50 transition-colors group"
                  >
                    <Instagram className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@iluvmymaya" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-accent/30 hover:bg-accent/50 transition-colors group"
                  >
                    <svg className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/kamayab" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-accent/30 hover:bg-accent/50 transition-colors group"
                  >
                    <Linkedin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/30 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Maya's Hope by Kamaya Benjamin. All rights reserved. Made with 
              <Heart className="inline h-4 w-4 mx-1 text-primary" /> 
              for transformation through opportunity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}