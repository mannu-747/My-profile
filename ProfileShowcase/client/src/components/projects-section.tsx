import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: "Deep Learning Content Recommendation",
      description: "Intelligent content recommendation system using facial emotion detection. Implemented LBPH for face detection and CNN for emotion recognition to provide personalized content suggestions based on user emotions.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "Flask", "Deep Learning", "CNN"],
      category: "Machine Learning • Computer Vision",
      icon: <Star className="w-4 h-4 text-accent" />
    },
    {
      title: "Android Malware Detection",
      description: "Machine learning-based malware detection system for URLs. Built with Django framework providing user-friendly interface where users can analyze browsing links for malicious content and receive real-time security assessments.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "Django", "Cybersecurity", "ML"],
      category: "Security • Machine Learning",
      icon: <Shield className="w-4 h-4 text-accent" />
    }
  ];

  const hackathonProjects = [
    {
      title: "Risk Calculator",
      subtitle: "🏆 Winner - Invesco Hack2Hire",
      description: "Financial risk assessment application calculating risk percentages using various market indicators for specific stocks within defined time periods.",
      tags: ["Python", "Django", "FinTech"],
      icon: "🏆"
    },
    {
      title: "Automatic Care Taking Cradle",
      subtitle: "🥈 Runner-up - IoT Hackathon",
      description: "IoT-based smart cradle prototype using Arduino with automatic swinging, music/lullaby playback, and adaptive lighting based on baby's crying patterns.",
      tags: ["Arduino", "IoT", "Sensors"],
      icon: "👶"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">Some of my recent work</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={project.title} className={`group hover:shadow-lg transition-all ${isVisible ? 'animate-slide-up' : ''}`}>
              <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  {project.icon}
                  <span className="ml-1">{project.category}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-0">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Hackathon Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {hackathonProjects.map((project, index) => (
                <Card key={project.title} className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-xl">{project.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{project.title}</h4>
                        <span className="text-sm text-warning font-medium">{project.subtitle}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}