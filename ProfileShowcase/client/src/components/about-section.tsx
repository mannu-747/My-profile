import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

type ExperienceData = {
  years: string;
  performanceBoost: string;
  problemsSolved: string;
  cgpa: string;
};

export default function AboutSection() {
  const [data, setData] = useState<ExperienceData | null>(null);

  useEffect(() => {
    fetch("/experience.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return null;

  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-0">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">{data.years}</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">{data.performanceBoost}</div>
                <div className="text-muted-foreground">Performance Boost</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">{data.problemsSolved}</div>
                <div className="text-muted-foreground">Problems Solved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-warning mb-2">{data.cgpa}</div>
                <div className="text-muted-foreground">CGPA</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
