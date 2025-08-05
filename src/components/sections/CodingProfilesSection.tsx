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
  return;
};