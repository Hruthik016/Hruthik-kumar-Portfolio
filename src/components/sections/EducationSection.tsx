import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Anna University",
    location: "Chennai, Tamil Nadu",
    duration: "2020 - 2024",
    cgpa: "8.0",
    description: "Comprehensive study of computer science fundamentals including programming, data structures, algorithms, database management, and software engineering principles.",
    achievements: [
      "Maintained consistent academic performance with 8.0 CGPA",
      "Completed projects in web development and machine learning",
      "Participated in coding competitions and technical events"
    ]
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

          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className="group"
              >
                <Card className="glass-morphism p-8 hover:shadow-glow transition-all duration-500">
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Institution Info */}
                    <div className="lg:col-span-2 space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                            <GraduationCap className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                              {edu.degree}
                            </h3>
                            <h4 className="text-xl font-semibold text-foreground/80 mb-4">
                              {edu.institution}
                            </h4>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-6 text-muted-foreground">
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

                        <p className="text-foreground/80 leading-relaxed">
                          {edu.description}
                        </p>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h5 className="font-semibold text-foreground">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 text-foreground/80">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CGPA Highlight */}
                    <div className="lg:col-span-1">
                      <motion.div
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                        className="glass-morphism p-6 rounded-2xl text-center border border-primary/20"
                      >
                        <div className="space-y-4">
                          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                            <Award className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <div className="text-3xl font-bold gradient-text">
                              {edu.cgpa}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              CGPA out of 10
                            </div>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Academic Excellence
                          </div>
                        </div>
                      </motion.div>
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