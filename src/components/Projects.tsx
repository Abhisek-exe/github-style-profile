
import { Github, ExternalLink, Code, Database, Brain } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Document Chat System",
      description: "A sophisticated RAG application that enables natural language conversations with documents using advanced LLM technology.",
      longDescription: "Built with React, Python FastAPI, and ChromaDB for vector storage. Implements intelligent chunking, semantic search, and context-aware responses.",
      tech: ["React", "Python", "RAG", "ChromaDB", "OpenAI API", "FastAPI"],
      github: "https://github.com/abhisekmahapatra/doc-chat",
      demo: "https://doc-chat-demo.vercel.app",
      icon: Brain,
      featured: true
    },
    {
      title: "Intelligent Data Analytics Platform",
      description: "A comprehensive data visualization and analytics platform with machine learning insights and predictive modeling capabilities.",
      longDescription: "Features automated data preprocessing, interactive visualizations, and ML model deployment with real-time predictions.",
      tech: ["Python", "Streamlit", "Pandas", "Scikit-Learn", "Plotly", "PostgreSQL"],
      github: "https://github.com/abhisekmahapatra/analytics-platform",
      demo: "https://analytics-platform-demo.streamlit.app",
      icon: Database,
      featured: true
    },
    {
      title: "Smart Code Review Assistant",
      description: "An AI-powered tool that automatically reviews code, suggests improvements, and identifies potential bugs using machine learning.",
      longDescription: "Integrates with GitHub workflows and uses transformer models to provide intelligent code analysis and suggestions.",
      tech: ["Node.js", "TypeScript", "GitHub API", "Transformers", "Docker", "Redis"],
      github: "https://github.com/abhisekmahapatra/code-reviewer",
      demo: "https://code-reviewer-demo.herokuapp.com",
      icon: Code,
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-12 text-center">
            <span className="text-github-accent">{'<'}</span>
            <span className="text-github-emphasis">Projects</span>
            <span className="text-github-accent">{' />'}</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card 
                  key={index}
                  className="terminal-border p-6 hover:neon-glow transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-github-accent/10 rounded-lg">
                        <IconComponent className="w-6 h-6 text-github-accent" />
                      </div>
                      <h3 className="text-xl font-bold font-mono text-github-emphasis">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="px-2 py-1 bg-github-neon/20 text-github-neon text-xs font-mono rounded-full">
                          FEATURED
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-github-subtle mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="code-block mb-4 text-xs">
                    <div className="text-github-accent mb-1">// Technical Implementation</div>
                    <div className="text-github-subtle">{project.longDescription}</div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-github-muted border border-github-border rounded-full text-sm text-github-accent font-mono hover:bg-github-accent/10 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-github-border text-github-emphasis hover:bg-github-muted font-mono"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-github-accent hover:bg-github-accent/80 text-github-bg font-mono"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-github-accent text-github-accent hover:bg-github-accent hover:text-github-bg font-mono"
              asChild
            >
              <a href="https://github.com/abhisekmahapatra" target="_blank" rel="noopener noreferrer">
                <Github size={20} className="mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
