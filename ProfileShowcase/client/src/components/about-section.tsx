import { Server, TrendingUp, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground">Passionate about creating efficient backend solutions</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className={`hover:shadow-lg transition-all ${isVisible ? 'animate-slide-up' : ''}`}>
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Server className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Backend Expertise</h3>
              <p className="text-muted-foreground">
                Specialized in Python, AWS Lambda, SQS, and Glue Jobs. Built scalable backend solutions 
                using Odoo ERP Framework with PostgreSQL databases.
              </p>
            </CardContent>
          </Card>

          <Card className={`hover:shadow-lg transition-all ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="text-secondary w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Performance Optimization</h3>
              <p className="text-muted-foreground">
                Achieved 55% reduction in SQL script execution time through optimization techniques, 
                caching strategies, and efficient query design.
              </p>
            </CardContent>
          </Card>

          <Card className={`hover:shadow-lg transition-all ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Trophy className="text-accent w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Problem Solver</h3>
              <p className="text-muted-foreground">
                4-star CodeChef rating, 300+ LeetCode problems solved, and winner of multiple hackathons 
                including Invesco Hack2Hire.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-0">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">55%</div>
                <div className="text-muted-foreground">Performance Boost</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">300+</div>
                <div className="text-muted-foreground">Problems Solved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-warning mb-2">8.48</div>
                <div className="text-muted-foreground">CGPA</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}