import { Card, CardContent } from "@/components/ui/card";
import { Code, Award, Trophy, GraduationCap, GitBranch } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function CertificationsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const certifications = [
    {
      icon: <Code className="text-primary w-6 h-6" />,
      title: "Problem Solving (Intermediate)",
      description: "Advanced problem-solving certification"
    },
    {
      icon: <div className="text-orange-500 text-xl">☁️</div>,
      title: "AWS Cloud Basic",
      description: "Foundational AWS cloud services certification"
    },
    {
      icon: <div className="text-red-600 text-xl">☕</div>,
      title: "Java (HackerRank)",
      description: "Java programming language certification"
    },
    {
      icon: <Trophy className="text-green-600 w-6 h-6" />,
      title: "4 Star CodeChef",
      description: "Rating: 1804 (Maximum achieved)"
    },
    {
      icon: <GitBranch className="text-yellow-600 w-6 h-6" />,
      title: "300+ LeetCode Problems",
      description: "Solved across multiple difficulty levels"
    },
    {
      icon: <GraduationCap className="text-purple-600 w-6 h-6" />,
      title: "B.Tech CSE",
      description: "CGPA: 8.48 - GRIET, Hyderabad"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Certifications & Achievements</h2>
          <p className="text-xl text-muted-foreground">Professional certifications and coding achievements</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title} 
              className={`hover:shadow-lg transition-all ${isVisible ? 'animate-slide-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mr-4">
                    {cert.icon}
                  </div>
                  <h3 className="font-semibold">{cert.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}