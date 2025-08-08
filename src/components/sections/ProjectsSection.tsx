import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "Internal Mark Management & Parent Notification System",
    description: "Built a web-based internal marks entry system with automated PDF generation. Integrated WhatsApp messaging for parent notifications via API.",
    tech: ["HTML/CSS", "JavaScript", "Flask", "SQL"]
  },
  {
    id: 2,
    title: "Road Crack Detection using YOLOv11",
    description: "Built a deep learning model to detect road surface cracks in real-time using YOLOv11. Preprocessed image datasets and trained a custom object detection model with high precision in detecting crack patterns from varied road imagery.",
    tech: ["Python", "OpenCV", "YOLOv11", "Deep Learning"]
  },
  {
    id: 3,
    title: "Conveyor Belt Damage Detection – NLCIL",
    description: "Participated in a live industrial project detecting belt damage via sensors. Gained hands-on experience with backend logic and hardware-software interfacing.",
    tech: ["Sensors", "Backend Logic", "Hardware Integration"]
  }
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="projects" className="section-container bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-6 z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my latest work and creative experiments
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  z: 50
                }}
                className="group perspective-1000"
              >
                <Card className="glass-morphism overflow-hidden hover:shadow-glow transition-all duration-500 transform-gpu">
                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-primary/10 border border-primary/20 rounded-full text-primary"
                        >
                          {tech}
                        </span>
                      ))}
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