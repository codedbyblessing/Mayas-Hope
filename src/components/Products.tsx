import { ProductCard } from "./ProductCard";
import { motion } from "motion/react";

const products = [
  {
    title: "College Ambassador Program List",
    description: "Discover a curated list of college ambassador programs that offer leadership opportunities, networking, and skill development. Perfect for students looking to enhance their college experience.",
    price: "$FREE",
    image: "https://images.unsplash.com/photo-1673515335586-f9f662c01482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY291cnNlcyUyMG9ubGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc1NzAzNjc0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Workshop",
    isPopular: true,
  },
  {
    title: "Hope & Purpose Coaching",
    description: "One-on-one coaching sessions designed to help you find clarity, set meaningful goals, and create a roadmap for personal and academic success.",
    price: "$45",
    image: "https://images.unsplash.com/photo-1646066490017-c935b1a1eb0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FjaGluZyUyMG1lbnRvcnNoaXAlMjB3b21lbnxlbnwxfHx8fDE3NTcwMzY3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Coaching",
  },
  {
    title: "Scholarship List",
    description: "Access a comprehensive list of scholarships tailored for high school and college students. Find opportunities that match your background, interests, and academic goals.",
    price: "$FREE",
    image: "https://images.unsplash.com/photo-1616938895503-66c89f91bd7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3BlJTIwY2hhcml0eSUyMG5vbnByb2ZpdCUyMHdvbWFufGVufDF8fHx8MTc1NzAzNjc0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Community",
    isPopular: true,
  },
];

export function Products() {
  return (
    <motion.section 
      id="products" 
      className="py-20 bg-gradient-to-b from-muted/20 via-secondary/10 to-accent/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Transformative Programs & Resources
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Explore our thoughtfully crafted higher education kit..
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}