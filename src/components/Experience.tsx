
import { Building2, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useState } from 'react';

const Experience = () => {
  const [isOpen, setIsOpen] = useState(false);

  const experience = {
    title: "Industrial Training Intern",
    company: "National Aluminium Company Limited (NALCO)",
    location: "Bhubaneswar, Odisha",
    duration: "Summer 2024",
    description: "Gained hands-on experience in aluminium production processes and industrial automation systems.",
    responsibilities: [
      "Analyzed calcination process parameters and their impact on alumina quality",
      "Studied Bayer process optimization techniques for enhanced efficiency",
      "Conducted refractory material analysis for high-temperature applications",
      "Collaborated with engineering teams on process improvement initiatives",
    ],
    technologies: ["Process Engineering", "Data Analysis", "Industrial Automation", "Quality Control"],
    achievements: [
      "Identified potential process improvements that could reduce energy consumption by 5%",
      "Presented findings to senior management team",
      "Received appreciation for analytical approach and attention to detail"
    ]
  };

  const positions = [
    {
      title: "Placement Coordinator",
      organization: "NIT Rourkela Training & Placement Cell",
      duration: "2024 - Present",
      description: "Facilitating campus recruitment drives and bridging connections between students and industry recruiters."
    },
    {
      title: "Technical Event Lead",
      organization: "Technical Society, NIT Rourkela",
      duration: "2023 - 2024",
      description: "Organized technical workshops and coding competitions, managing teams of 20+ volunteers."
    },
    {
      title: "Project Manager",
      organization: "Student Innovation Council",
      duration: "2023 - 2024",
      description: "Led cross-functional teams in developing innovative solutions for real-world problems."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-github-canvas/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-12 text-center">
            <span className="text-github-accent">{'<'}</span>
            <span className="text-github-emphasis">Experience</span>
            <span className="text-github-accent">{' />'}</span>
          </h2>

          {/* Professional Experience */}
          <div className="mb-12 animate-fade-in-up">
            <h3 className="text-2xl font-bold font-mono mb-8 text-github-emphasis flex items-center">
              <Building2 className="mr-3 text-github-accent" />
              Professional Experience
            </h3>
            
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <Card className="terminal-border overflow-hidden">
                <CollapsibleTrigger className="w-full p-6 text-left hover:bg-github-muted/30 transition-colors duration-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold font-mono text-github-emphasis mb-2">
                        {experience.title}
                      </h4>
                      <p className="text-github-accent font-semibold mb-2">{experience.company}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-github-subtle text-sm">
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {experience.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {experience.duration}
                        </div>
                      </div>
                    </div>
                    <ChevronRight 
                      className={`w-5 h-5 text-github-subtle transition-transform duration-200 ${
                        isOpen ? 'rotate-90' : ''
                      }`} 
                    />
                  </div>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <div className="px-6 pb-6 border-t border-github-border">
                    <div className="pt-6">
                      <p className="text-github-subtle mb-6">{experience.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-github-emphasis mb-3">Key Responsibilities:</h5>
                          <ul className="space-y-2">
                            {experience.responsibilities.map((item, idx) => (
                              <li key={idx} className="text-github-subtle text-sm flex items-start">
                                <span className="text-github-accent mr-2 mt-1">▸</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-github-emphasis mb-3">Technologies Used:</h5>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {experience.technologies.map((tech, idx) => (
                              <span 
                                key={idx}
                                className="px-3 py-1 bg-github-muted border border-github-border rounded-full text-sm text-github-accent font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          <h5 className="font-semibold text-github-emphasis mb-3">Key Achievements:</h5>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-github-subtle text-sm flex items-start">
                                <span className="text-github-success mr-2 mt-1">✓</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          </div>

          {/* Positions of Responsibility */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold font-mono mb-8 text-github-emphasis">
              Positions of Responsibility
            </h3>
            
            <div className="grid gap-6">
              {positions.map((position, index) => (
                <Card 
                  key={index}
                  className="terminal-border p-6 hover:neon-glow transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold font-mono text-github-emphasis">
                      {position.title}
                    </h4>
                    <span className="text-github-subtle text-sm font-mono">
                      {position.duration}
                    </span>
                  </div>
                  <p className="text-github-accent font-semibold mb-2">{position.organization}</p>
                  <p className="text-github-subtle text-sm">{position.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
