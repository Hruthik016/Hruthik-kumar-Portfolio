import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Trophy, Target, Zap, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const profiles = [
  {
    platform: "GitHub",
    username: "@developer",
    stats: {
      repositories: "127",
      followers: "1.2k",
      contributions: "2,847",
      streak: "89 days"
    },
    description: "Open source contributions and personal projects",
    color: "from-gray-600 to-gray-800",
    icon: "🐙",
    url: "#"
  },
  {
    platform: "LeetCode",
    username: "developer_pro",
    stats: {
      problems: "387",
      rating: "1,847",
      rank: "Guardian",
      streak: "45 days"
    },
    description: "Algorithm challenges and competitive programming",
    color: "from-orange-500 to-yellow-500",
    icon: "💻",
    url: "#"
  },
  {
    platform: "HackerRank",
    username: "code_master",
    stats: {
      points: "15,234",
      badges: "27",
      rank: "5⭐",
      domains: "8"
    },
    description: "Problem solving across multiple programming domains",
    color: "from-green-500 to-emerald-600",
    icon: "🏆",
    url: "#"
  },
  {
    platform: "Codeforces",
    username: "dev_elite",
    stats: {
      rating: "1,654",
      rank: "Expert",
      contests: "94",
      maxRating: "1,789"
    },
    description: "Competitive programming and algorithmic contests",
    color: "from-blue-500 to-indigo-600",
    icon: "⚡",
    url: "#"
  }
];

export const CodingProfilesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-6">
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
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Coding Profiles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My journey through competitive programming and open source contributions
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Profiles Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {profiles.map((profile, index) => (
              <motion.div
                key={profile.platform}
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, rotateY: 2 }}
                className="group"
              >
                <Card className="glass-morphism p-6 hover:shadow-glow transition-all duration-500 h-full">
                  {/* Platform Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${profile.color} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                        {profile.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {profile.platform}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {profile.username}
                        </p>
                      </div>
                    </div>
                    
                    <Button
                      size="sm"
                      variant="ghost"
                      className="hover:text-primary"
                      asChild
                    >
                      <a 
                        href={profile.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6">
                    {profile.description}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(profile.stats).map(([key, value], statIndex) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          duration: 0.6, 
                          delay: 0.6 + index * 0.1 + statIndex * 0.05 
                        }}
                        className="text-center p-3 bg-background/30 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors duration-300"
                      >
                        <div className="text-2xl font-bold text-primary mb-1">
                          {value}
                        </div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="mt-6"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                      asChild
                    >
                      <a 
                        href={profile.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        View Profile
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* GitHub Contributions Graph Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16"
          >
            <Card className="glass-morphism p-6">
              <h3 className="text-2xl font-bold text-center mb-6 gradient-text">
                GitHub Contribution Activity
              </h3>
              
              {/* Simulated Contribution Graph */}
              <div className="grid grid-cols-52 gap-1 max-w-4xl mx-auto">
                {Array.from({ length: 364 }, (_, i) => {
                  const intensity = Math.random();
                  let bgColor = "bg-muted/30";
                  
                  if (intensity > 0.7) bgColor = "bg-primary";
                  else if (intensity > 0.5) bgColor = "bg-primary/70";
                  else if (intensity > 0.3) bgColor = "bg-primary/40";
                  else if (intensity > 0.1) bgColor = "bg-primary/20";
                  
                  return (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ 
                        duration: 0.1, 
                        delay: 1.2 + (i * 0.001) 
                      }}
                      className={`w-3 h-3 rounded-sm ${bgColor} hover:scale-125 transition-transform duration-200`}
                    />
                  );
                })}
              </div>
              
              <div className="flex justify-center items-center space-x-4 mt-6 text-sm text-muted-foreground">
                <span>Less</span>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-muted/30 rounded-sm" />
                  <div className="w-3 h-3 bg-primary/20 rounded-sm" />
                  <div className="w-3 h-3 bg-primary/40 rounded-sm" />
                  <div className="w-3 h-3 bg-primary/70 rounded-sm" />
                  <div className="w-3 h-3 bg-primary rounded-sm" />
                </div>
                <span>More</span>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};