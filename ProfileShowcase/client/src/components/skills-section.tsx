import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const skills = [
    {
      icon: "🐍",
      title: "Backend",
      description: "Python, Flask, Django, RESTful APIs",
      percentage: 90,
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: "☁️",
      title: "Cloud & AWS",
      description: "Lambda, SQS, Glue Jobs, EC2",
      percentage: 85,
      color: "from-orange-400 to-orange-600",
    },
    {
      icon: "🗄️",
      title: "Databases",
      description: "PostgreSQL, MySQL, SQL Optimization",
      percentage: 88,
      color: "from-green-400 to-green-600",
    },
    {
      icon: "📡",
      title: "APIs & Communication",
      description: "RESTful APIs, GraphQL, gRPC & WebSockets",
      percentage: 88,
      color: "from-cyan-400 to-cyan-600",
    },
    {
      icon: "📊",
      title: "System Design & Scaling",
      description: "Caching, Message Queues, Load Balancing, Microservices",
      percentage: 82,
      color: "from-indigo-400 to-indigo-600",
    },
    {
      icon: "🔐",
      title: "Security",
      description: "OAuth2.0/JWT, API Gateway, Reverse Proxy",
      percentage: 80,
      color: "from-red-400 to-red-600",
    },
  ];

  const tools = [
  "Python (FastAPI, Django)",
  "Node.js (Express, NestJS)",
  "PostgreSQL, MongoDB, Redis",
  "AWS (EC2, S3, RDS, Lambda)",
  "Docker, GitHub Actions",
  "REST, GraphQL, gRPC",
  "Kafka, RabbitMQ",
  "Nginx, API Gateway",
  "Prometheus, Grafana",
  "Git/GitLab",
  "Visual Studio",
  "PyCharm", 
  "Odoo ERP",
  "XML",
  "Java OOPs",
  "Data Structures",
  "Algorithms",
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <Card key={skill.title} className="hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{skill.title}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 relative overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all ease-out ${isVisible ? 'animate-pulse' : ''}`}
                      style={{ 
                        '--skill-width': `${skill.percentage}%`,
                        width: isVisible ? `${skill.percentage}%` : '0%',
                        transitionDuration: '2s'
                      } as React.CSSProperties}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-muted/50">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool) => (
                <Badge key={tool} variant="secondary" className="px-4 py-2 bg-card shadow-sm">
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
