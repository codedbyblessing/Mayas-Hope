import { Card, CardContent } from "./ui/card";
import { Heart, Users, Target, Star } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  {
    icon: <Users className="h-7 w-7" />,
    number: "1,200+",
    label: "Community Members",
  },
  {
    icon: <Target className="h-7 w-7" />,
    number: "85+",
    label: "Books Discussed",
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
              Maya's Hope was born from a deeply personal journey through literature and healing. 
              As an educator and advocate, I discovered that stories have the unique power to help us 
              process trauma, find hope in darkness, and connect with our deepest truths. Through books, 
              words, and community, we create spaces where healing happens naturally.
            </p>
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
              To create healing spaces where literature becomes medicine, where stories build bridges 
              between hearts, and where hope is not just a feeling but a practice. Through the power 
              of books, community, and authentic connection, we discover that our stories—no matter 
              how broken—have the power to inspire, heal, and transform not just ourselves, but the world.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}