import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include real-time inventory, payment integration, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    image: "/placeholder.svg",
    github: "#",
    demo: "#",
    featured: true
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Real-time chat application with AI integration using OpenAI API. Includes group chats, file sharing, and smart responses.",
    tech: ["Next.js", "WebSocket", "OpenAI", "PostgreSQL"],
    image: "/placeholder.svg",
    github: "#",
    demo: "#",
    featured: true
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Interactive 3D portfolio built with Three.js and React. Features particle systems, 3D models, and smooth animations.",
    tech: ["React", "Three.js", "Framer Motion", "GLSL"],
    image: "/placeholder.svg",
    github: "#",
    demo: "#",
    featured: false
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Collaborative task management with real-time updates, drag-and-drop interface, and team analytics.",
    tech: ["Vue.js", "Firebase", "Chart.js", "PWA"],
    image: "/placeholder.svg",
    github: "#",
    demo: "#",
    featured: false
  }
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => filter === "featured" ? project.featured : true);

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

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-4 mb-12"
          >
            {["all", "featured", "web"].map((filterType) => (
              <Button
                key={filterType}
                variant={filter === filterType ? "default" : "outline"}
                onClick={() => setFilter(filterType)}
                className={`capitalize ${
                  filter === filterType 
                    ? "bg-gradient-primary shadow-glow" 
                    : "border-primary/30 hover:bg-primary/10"
                }`}
              >
                {filterType}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
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
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Hover Actions */}
                    <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="backdrop-blur-sm"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Eye className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="backdrop-blur-sm border-white/20"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>

                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 text-xs bg-gradient-primary text-white rounded-full font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

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

                    {/* Links */}
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="hover:text-primary"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="hover:text-secondary"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all duration-300"
            >
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};