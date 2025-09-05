import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
  isPopular?: boolean;
}

export function ProductCard({ title, description, price, image, category, isPopular }: ProductCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 group border-border/20">
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isPopular && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
              Popular
            </Badge>
          </motion.div>
        )}
      </div>
      
      <CardHeader className="flex-none">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs bg-secondary/50">
            {category}
          </Badge>
        </div>
        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1">
        <p className="text-muted-foreground text-sm line-clamp-3">{description}</p>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between">
        <span className="font-medium text-primary">{price}</span>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button size="sm" className="hover:bg-primary/90 transition-all duration-300">
            View Details
          </Button>
        </motion.div>
      </CardFooter>
    </Card>
  );
}