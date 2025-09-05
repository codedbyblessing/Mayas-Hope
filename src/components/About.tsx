import { Card, CardContent } from "./ui/card";
import { Heart, Users, Target, Star } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  {
    icon: <Users className="h-7 w-7" />,
    number: "200+",
    label: "Community Members",
  },
  {
    icon: <Target className="h-7 w-7" />,
    number: "20+",
    label: "Scholarships Secured",
  },
  {
    icon: <Star className="h-7 w-7" />,
    number: "4.9",
    label: "Community Rating",
  },
  {
    icon: <Heart className="h-7 w-7" />,
    number: "3",
    label: "Years of Impact",
  },
];

export function About() {
  return (
    <motion.section 
      id="about" 
      className="py-20 bg-gradient-to-b from-background via-muted/10 to-secondary/20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>About Kamaya & Maya's Hope</h2>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
              At Maya’s Hope, we believe every student deserves the opportunity to pursue higher education, 
              regardless of their background. Our mission is to empower students to navigate the college application process with confidence,
              providing them with personalized support, resources, and guidance. Whether you’re crafting the perfect essay, 
              choosing the right programs and scholarships, or preparing for interviews, Maya’s Hope is here to help you succeed.
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-3 text-primary">
                      {stat.icon}
                    </div>
                    <div className="font-medium mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="bg-gradient-to-r from-accent/20 via-secondary/30 to-muted/40 rounded-2xl p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>My Mission</h3>
            <p className="text-muted-foreground text-center leading-relaxed text-lg max-w-4xl mx-auto">
              At Maya’s Hope, we believe every student deserves the opportunity to pursue higher education, 
              regardless of their background. Our mission is to empower students to navigate the college application process with confidence,
              providing them with personalized support, resources, and guidance. Whether you’re crafting the perfect essay, 
              choosing the right programs and scholarships, or preparing for interviews, Maya’s Hope is here to help you succeed.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}