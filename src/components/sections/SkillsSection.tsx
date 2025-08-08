import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    color: "from-purple-500 to-blue-500",
    skills: [
      { name: "Python", level: 90 },
      { name: "C", level: 85 },
      { name: "SQL", level: 88 },
      { name: "Java", level: 60 },
      { name: "C#", level: 60 }
    ]
  },
  {
    title: "Web Development",
    color: "from-green-500 to-teal-500",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Flask", level: 80 },
      { name: "PHP", level: 65 }
    ]
  },
  {
    title: "Database & Tools",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "SQLite", level: 90 },
      { name: "Git", level: 92 },
      { name: "GitHub", level: 90 },
      { name: "XAMPP", level: 80 },
      { name: "VS Code", level: 95 }
    ]
  },
  {
    title: "Core Concepts",
    color: "from-pink-500 to-purple-500",
    skills: [
      { name: "OOP", level: 88 },
      { name: "Data Structures", level: 85 },
      { name: "Algorithms", level: 82 },
      { name: "Networking", level: 75 },
      { name: "Cloud Computing", level: 70 },
      { name: "SDLC", level: 80 },
      { name: "Agile", level: 78 }
    ]
  }
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="skills" className="section-container bg-gradient-to-b from-background to-card">
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
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              My Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50, rotateY: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + categoryIndex * 0.2 }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="glass-morphism p-6 rounded-2xl group hover:shadow-glow transition-all duration-500"
              >
                {/* Category Header */}
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-6 h-6 bg-white rounded-full opacity-80" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.6 + categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1.5, 
                            delay: 0.8 + categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Orbit Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-20 flex justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Central Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-lg">ME</span>
              </div>

              {/* Orbiting Tech Icons */}
              {["JavaScript", "HTML", "CSS", "MySQL", "Flask", "Git", "OOP", "Algorithms"].map((tech, index) => {
                const angle = (index * 45) * (Math.PI / 180);
                const radius = 120;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={tech}
                    initial={{ scale: 0, rotate: 0 }}
                    animate={isInView ? { 
                      scale: 1, 
                      rotate: 360 
                    } : {}}
                    transition={{ 
                      duration: 2, 
                      delay: 1.4 + index * 0.1,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "linear"
                    }}
                    className="absolute w-12 h-12 bg-card border border-primary/30 rounded-full flex items-center justify-center text-xs font-medium shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer"
                    style={{
                      left: `calc(50% + ${x}px - 24px)`,
                      top: `calc(50% + ${y}px - 24px)`,
                    }}
                  >
                    {tech}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};