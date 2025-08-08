import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Trophy, Target, Zap, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
const profiles = [{
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
}, {
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
}, {
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
}, {
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
}];
export const CodingProfilesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3
  });

  return (
    <section id="coding-profiles" className="section-container bg-gradient-to-b from-card to-background">
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
              Coding Profiles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My journey across competitive programming platforms
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Profiles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {profiles.map((profile, index) => (
              <motion.div
                key={profile.platform}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                <Card className="glass-morphism p-6 hover:shadow-glow transition-all duration-500 group">
                  <div className="space-y-6">
                    {/* Platform Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-3xl">{profile.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {profile.platform}
                          </h3>
                          <p className="text-muted-foreground">{profile.username}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/80 text-sm">
                      {profile.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(profile.stats).map(([key, value]) => (
                        <div key={key} className="text-center p-3 glass-morphism rounded-lg">
                          <div className="font-bold text-foreground">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
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