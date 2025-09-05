import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import exampleImage from 'figma:asset/24da0ce493792bdcd7267b9f5c6ff2b1d656a337.png';
import { motion } from "motion/react";

export function Hero() {
  return (
    <motion.section 
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-background via-muted/30 to-secondary/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="relative w-48 h-48 mx-auto mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src={exampleImage} 
              alt="Maya's Hope - Kamaya Benjamin" 
              className="w-full h-full object-contain"
            />
          </motion.div>
          
          <motion.h1 
            className="mb-8" 
            style={{ fontFamily: 'Playfair Display, serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transforming Lives Through Literature & Hope
          </motion.h1>
          <motion.p 
            className="text-muted-foreground mb-10 max-w-3xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Welcome to Maya's Hope, where stories heal and knowledge empowers. I'm Kamaya Benjamin, 
            and I believe in the transformative power of literature, education, and hope. Through 
            curated programs, inspiring content, and a supportive community, we create spaces where 
            growth flourishes and dreams take flight.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button size="lg" className="px-10 py-4 rounded-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300">
              Join Our Community
            </Button>
            <Button variant="outline" size="lg" className="px-10 py-4 rounded-full border-primary text-primary hover:bg-primary/5 hover:scale-105 transition-all duration-300">
              Explore Resources
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a 
              href="#" 
              className="p-3 rounded-full border border-border hover:bg-accent/50 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
            </motion.a>
            <motion.a 
              href="#" 
              className="p-3 rounded-full border border-border hover:bg-accent/50 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.082.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.163-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.751-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="#" 
              className="p-3 rounded-full border border-border hover:bg-accent/50 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}