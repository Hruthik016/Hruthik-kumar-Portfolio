import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Rocket, Brain, Heart } from "lucide-react";
const features = [{
  icon: Code,
  title: "Clean Code",
  description: "Writing maintainable, scalable, and elegant solutions that stand the test of time."
}, {
  icon: Rocket,
  title: "Innovation",
  description: "Always exploring cutting-edge technologies and pushing the boundaries of what's possible."
}, {
  icon: Brain,
  title: "Problem Solving",
  description: "Transforming complex challenges into simple, intuitive user experiences."
}, {
  icon: Heart,
  title: "Passion",
  description: "Genuinely love what I do and believe great products come from passionate creators."
}];
export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3
  });
  return <section id="about" className="section-container bg-gradient-to-br from-background via-card to-background">
      <div className="container mx-auto px-6 z-10">
        <motion.div ref={ref} initial={{
        opacity: 0
      }} animate={isInView ? {
        opacity: 1
      } : {}} transition={{
        duration: 0.8
      }} className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Story Content */}
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            duration: 0.8,
            delay: 0.4
          }} className="space-y-8">
              <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
                <p>I'm Hruthik Kumar, a passionate and detail-oriented Computer Science graduate from Anna University with a CGPA of 8.0. I have a strong interest in full-stack development and enjoy building solutions that make a real-world impact.</p>
                
                <p>I specialize in Python, Flask, MySQL, and front-end technologies like HTML, CSS, and JavaScript. One of my key projects includes an Internal Mark Management & Parent Notification System, which features automated PDF generation and WhatsApp integration. I've also worked on AI-based solutions such as Road Crack Detection using YOLOv11, showcasing my capabilities in deep learning and computer vision.</p>
                
                <p>In addition to technical skills, I’m well-versed in concepts like OOP, Data Structures, SDLC, and Agile methodologies. I’m a fast learner, a great team player, and always eager to take on new challenges and expand my knowledge.</p>
              </div>

              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={isInView ? {
              opacity: 1,
              y: 0
            } : {}} transition={{
              duration: 0.8,
              delay: 0.8
            }} className="flex flex-wrap gap-4">
                {["React", "TypeScript", "Node.js", "Python", "AWS"].map((tech, index) => <span key={tech} className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary font-medium">
                    {tech}
                  </span>)}
              </motion.div>
            </motion.div>

            {/* Features Grid */}
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            duration: 0.8,
            delay: 0.6
          }} className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => <motion.div key={feature.title} initial={{
              opacity: 0,
              y: 30
            }} animate={isInView ? {
              opacity: 1,
              y: 0
            } : {}} transition={{
              duration: 0.6,
              delay: 0.8 + index * 0.1
            }} whileHover={{
              scale: 1.05,
              rotateY: 5
            }} className="glass-morphism p-6 rounded-2xl text-center group hover:shadow-glow transition-all duration-300">
                  <div className="mb-4 flex justify-center">
                    <feature.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>)}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
};