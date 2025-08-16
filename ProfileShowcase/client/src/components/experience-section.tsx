import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground">My career journey</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary to-secondary h-full rounded-full"></div>

          {/* Current Position */}
          <div className="relative mb-16">
            <div className="flex items-center justify-center">
              <div className="bg-primary w-6 h-6 rounded-full border-4 border-background shadow-lg z-10"></div>
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right">
                <Card className="hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <div className="flex md:justify-end items-center mb-4">
                      <div className="bg-primary/10 p-3 rounded-full mr-4 md:mr-0 md:ml-4 md:order-2">
                        <Building className="text-primary w-6 h-6" />
                      </div>
                      <div className="md:order-1">
                        <h3 className="text-xl font-semibold">Software Analyst (Backend)</h3>
                        <p className="text-primary font-medium">EnergyTech Global, Hyderabad</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 md:text-right">Jan 2023 - Present</p>
                    <div className="space-y-3 text-muted-foreground text-sm md:text-right">
                      <p>• Designed scalable backend solutions using Python, AWS Lambda, SQS, and Glue jobs</p>
                      <p>• Developed Bikkie platform using Odoo ERP Framework with PostgreSQL database</p>
                      <p>• <span className="text-accent font-medium">Reduced SQL script execution time by 55%</span> through optimization</p>
                      <p>• Built RESTful and GraphQL APIs for seamless system integration</p>
                    </div>
                    
                    <div className="mt-6 flex md:justify-end">
                      <Badge className="bg-accent/10 text-accent border-accent/20">
                        Current Position
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="md:order-first">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Modern tech office with developers working on computers" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Previous Position */}
          <div className="relative">
            <div className="flex items-center justify-center">
              <div className="bg-secondary w-6 h-6 rounded-full border-4 border-background shadow-lg z-10"></div>
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Online learning session with instructor teaching programming concepts" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <Card className="hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-secondary/10 p-3 rounded-full mr-4">
                        <GraduationCap className="text-secondary w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">DSA Teaching Assistant</h3>
                        <p className="text-secondary font-medium">Smart Interviews (Online)</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">Jul 2022 - Sep 2022</p>
                    <div className="space-y-3 text-muted-foreground text-sm">
                      <p>• Provided clear explanations of complex DSA concepts to students</p>
                      <p>• Assisted students in understanding theoretical knowledge application</p>
                      <p>• Helped students with practical coding problem implementations</p>
                      <p>• Mentored students in interview preparation and coding practices</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}