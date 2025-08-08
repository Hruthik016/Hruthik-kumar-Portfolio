import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering (B.E.), Computer Science and Engineering",
    institution: "Anna University",
    location: "Chennai, Tamil Nadu",
    duration: "Nov 2021 – May 2025",
    cgpa: "8.0",
    description: "Comprehensive study of computer science fundamentals including programming, data structures, algorithms, database management, and software engineering principles."
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Govt. Higher Secondary School, Arumanai",
    location: "Tamil Nadu",
    duration: "May 2021",
    cgpa: "80%",
    description: "Higher secondary education with focus on science subjects preparing for engineering entrance examinations."
  }
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="education" className="section-container bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6 z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Education
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Academic journey and achievements in computer science
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Education Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className="group"
              >
                <Card className="glass-morphism p-6 hover:shadow-glow transition-all duration-500 h-full">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <h4 className="text-lg font-semibold text-foreground/80 mb-4">
                          {edu.institution}
                        </h4>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        <span>CGPA: {edu.cgpa}</span>
                      </div>
                    </div>

                    <p className="text-foreground/80 leading-relaxed text-sm">
                      {edu.description}
                    </p>

                    {/* CGPA Highlight */}
                    <div className="mt-6 pt-4 border-t border-border">
                      <div className="flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold gradient-text">
                            {edu.cgpa}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Academic Performance
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};