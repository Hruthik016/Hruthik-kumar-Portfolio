import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const articles = [
  {
    id: 1,
    title: "Building Interactive 3D Experiences with Three.js",
    excerpt: "A comprehensive guide to creating immersive 3D web experiences using Three.js, WebGL, and modern browser capabilities.",
    readTime: "8 min read",
    publishDate: "Dec 15, 2023",
    likes: 142,
    tags: ["Three.js", "WebGL", "JavaScript"],
    image: "/placeholder.svg",
    url: "#"
  },
  {
    id: 2,
    title: "The Future of Web Animation with Framer Motion",
    excerpt: "Exploring advanced animation techniques and performance optimization strategies for creating buttery smooth web animations.",
    readTime: "6 min read",
    publishDate: "Nov 28, 2023",
    likes: 89,
    tags: ["React", "Animation", "Performance"],
    image: "/placeholder.svg",
    url: "#"
  },
  {
    id: 3,
    title: "Microservices Architecture: Lessons Learned",
    excerpt: "Real-world insights and best practices from building and scaling microservices in production environments.",
    readTime: "12 min read",
    publishDate: "Nov 10, 2023",
    likes: 203,
    tags: ["Architecture", "Backend", "DevOps"],
    image: "/placeholder.svg",
    url: "#"
  }
];

export const ArticlesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="articles" className="section-container bg-gradient-to-b from-background to-card">
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
              Featured Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts, tutorials, and insights from my development journey
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                whileHover={{ scale: 1.03, rotateY: 5 }}
                className="group"
              >
                <Card className="glass-morphism overflow-hidden hover:shadow-glow transition-all duration-500 h-full">
                  {/* Article Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Article Stats */}
                    <div className="absolute bottom-4 left-4 flex items-center space-x-4 text-white text-sm">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{article.likes}</span>
                      </div>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-3">
                        {article.publishDate}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-primary/10 border border-primary/20 rounded-full text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Read More Link */}
                    <motion.a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="flex items-center text-primary hover:text-secondary transition-colors duration-300 font-medium group/link"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </motion.a>
                  </div>
                </Card>
              </motion.article>
            ))}
          </div>

          {/* View All Articles Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                View All Articles
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};