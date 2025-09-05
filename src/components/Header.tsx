import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import exampleImage from 'figma:asset/24da0ce493792bdcd7267b9f5c6ff2b1d656a337.png';
import { motion } from "motion/react";

export function Header() {
  return (
    <motion.header 
      className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src={exampleImage} 
              alt="Maya's Hope Logo" 
              className="h-14 w-14 object-contain"
            />
            <div className="ml-3">
              <div className="text-lg" style={{ fontFamily: 'Playfair Display, serif', fontWeight: '600', color: '#1e3a5f' }}>
                Maya's Hope
              </div>
              <div className="text-xs text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                Kamaya Benjamin
              </div>
            </div>
          </motion.div>
          
          <motion.nav 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a 
              href="#about" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.a>
            <motion.a 
              href="#products" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Programs
            </motion.a>
            <motion.a 
              href="#contact" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button variant="outline" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}