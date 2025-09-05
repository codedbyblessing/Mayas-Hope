import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Calendar, MessageSquare, Phone, Mail } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-gradient-to-b from-secondary/10 via-accent/10 to-muted/20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to Begin Your Journey?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              Whether you're looking for personalized coaching, want to join our community, or have questions 
              about our programs, I'm here to help you take the next step in your transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="border-border/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <MessageSquare className="h-6 w-6 text-primary" />
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Your first name"
                        className="border-border/30 focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Your last name"
                        className="border-border/30 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com"
                      className="border-border/30 focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="What would you like to discuss?"
                      className="border-border/30 focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your goals, questions, or what you're hoping to achieve..."
                      rows={5}
                      className="border-border/30 focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Consultation Options */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="border-border/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    <Calendar className="h-6 w-6 text-primary" />
                    Book a Consultation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Schedule a free 30-minute discovery call to explore how our programs can support your journey.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary/5 hover:scale-105 transition-all duration-300"
                  >
                    Schedule Free Consultation
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-sm text-muted-foreground">Available Mon-Fri, 9AM-5PM PST</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">kamaya@mayashope.com</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/20 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-accent/20 to-secondary/30">
                <CardContent className="p-6">
                  <h4 className="mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    What to Expect
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Personalized assessment of your goals</li>
                    <li>• Recommendations for the best program fit</li>
                    <li>• Discussion of your literary interests</li>
                    <li>• Overview of our community and support</li>
                    <li>• Next steps for your transformation journey</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}