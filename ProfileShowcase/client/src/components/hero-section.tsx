import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Code } from "lucide-react";

type ExperienceData = {
  years: string;
  headline: string;
};

export default function HeroSection() {
  const [data, setData] = useState<ExperienceData | null>(null);

  useEffect(() => {
    fetch("/experience.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return null; // loading state

  return (
    <section id="hero" className="pt-16 min-h-screen flex items-center hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Manoj Kumar</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
              Software Engineer & Backend Specialist
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {data.headline}
            </p>
            <div className="text-primary font-bold">{data.years} Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
