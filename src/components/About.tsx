
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      degree: "B.Tech in Ceramic Engineering",
      institution: "National Institute of Technology, Rourkela",
      location: "Rourkela, Odisha",
      duration: "2022 - 2026 (Expected)",
      description: "Specializing in advanced materials and process engineering with a focus on AI applications",
      courses: ["Data Structures", "Machine Learning", "Database Systems", "Materials Science", "Process Engineering"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-github-canvas/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-12 text-center">
            <span className="text-github-accent">{'<'}</span>
            <span className="text-github-emphasis">About</span>
            <span className="text-github-accent">{' />'}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-6">
              <div className="animate-fade-in-up">
                <h3 className="text-2xl font-bold font-mono mb-4 text-github-emphasis">
                  Hello World! 👋
                </h3>
                <p className="text-github-subtle leading-relaxed mb-4">
                  I'm a passionate B.Tech student at NIT Rourkela, deeply fascinated by the intersection of 
                  artificial intelligence, data science, and software development. My journey in tech has been 
                  driven by curiosity and a desire to build intelligent solutions that make a difference.
                </p>
                <p className="text-github-subtle leading-relaxed">
                  From developing RAG applications to exploring LLMs and creating data-driven web applications, 
                  I love turning complex problems into elegant solutions. When I'm not coding, you'll find me 
                  exploring new technologies or contributing to open-source projects.
                </p>
              </div>
            </div>

            <div className="terminal-border rounded-lg p-6 animate-scale-in">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-github-subtle font-mono text-sm ml-2">about.json</span>
              </div>
              <div className="font-mono text-sm space-y-1">
                <div className="text-github-subtle">{'{'}</div>
                <div className="ml-4">
                  <span className="text-github-accent">"name"</span>: 
                  <span className="text-green-400"> "Abhisek Mahapatra"</span>,
                </div>
                <div className="ml-4">
                  <span className="text-github-accent">"role"</span>: 
                  <span className="text-green-400"> "AI Developer"</span>,
                </div>
                <div className="ml-4">
                  <span className="text-github-accent">"education"</span>: 
                  <span className="text-green-400"> "NIT Rourkela"</span>,
                </div>
                <div className="ml-4">
                  <span className="text-github-accent">"interests"</span>: [
                </div>
                <div className="ml-8 text-green-400">
                  "Machine Learning",<br />
                  "Data Science",<br />
                  "Web Development",<br />
                  "Open Source"
                </div>
                <div className="ml-4">],</div>
                <div className="ml-4">
                  <span className="text-github-accent">"status"</span>: 
                  <span className="text-green-400"> "Available for opportunities"</span>
                </div>
                <div className="text-github-subtle">{'}'}</div>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold font-mono mb-8 text-github-emphasis flex items-center">
              <GraduationCap className="mr-3 text-github-accent" />
              Education
            </h3>
            
            {education.map((edu, index) => (
              <Card key={index} className="terminal-border p-6 mb-6 hover:neon-glow transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold font-mono text-github-emphasis mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-github-accent font-semibold mb-2">{edu.institution}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-github-subtle text-sm">
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {edu.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {edu.duration}
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-github-subtle mb-4">{edu.description}</p>
                
                <div>
                  <p className="text-github-emphasis font-semibold mb-2">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-github-muted border border-github-border rounded-full text-sm text-github-subtle hover:text-github-accent transition-colors duration-200"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
