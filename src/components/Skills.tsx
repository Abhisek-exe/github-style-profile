
import { Code, Database, Brain, Wrench, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "C++", level: 75 },
        { name: "SQL", level: 85 },
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: [
        { name: "Scikit-Learn", level: 85 },
        { name: "TensorFlow", level: 75 },
        { name: "PyTorch", level: 70 },
        { name: "OpenAI API", level: 90 },
        { name: "LangChain", level: 80 },
      ]
    },
    {
      title: "Data & Databases",
      icon: Database,
      skills: [
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "ChromaDB", level: 75 },
        { name: "MongoDB", level: 70 },
      ]
    },
    {
      title: "Development Tools",
      icon: Wrench,
      skills: [
        { name: "React", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Docker", level: 75 },
        { name: "Git", level: 90 },
        { name: "FastAPI", level: 80 },
      ]
    },
    {
      title: "Analytics & Visualization",
      icon: TrendingUp,
      skills: [
        { name: "PowerBI", level: 85 },
        { name: "Streamlit", level: 90 },
        { name: "Plotly", level: 80 },
        { name: "Tableau", level: 70 },
        { name: "Excel", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-12 text-center">
            <span className="text-github-accent">{'<'}</span>
            <span className="text-github-emphasis">Skills</span>
            <span className="text-github-accent">{' />'}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={categoryIndex}
                  className="terminal-border p-6 hover:neon-glow transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-github-accent/10 rounded-lg">
                      <IconComponent className="w-6 h-6 text-github-accent" />
                    </div>
                    <h3 className="text-lg font-bold font-mono text-github-emphasis">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-github-subtle font-mono text-sm">
                            {skill.name}
                          </span>
                          <span className="text-github-accent font-mono text-xs">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-github-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-github-accent to-github-neon h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Code snippet decoration */}
          <div className="mt-12 max-w-2xl mx-auto animate-fade-in-up">
            <div className="terminal-border rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-github-subtle font-mono text-sm ml-2">skills.py</span>
              </div>
              <div className="font-mono text-sm space-y-1">
                <div className="text-github-accent">import</div>
                <div className="ml-4 text-github-subtle">
                  <span className="text-github-emphasis">passion</span> <span className="text-github-accent">from</span> <span className="text-green-400">"continuous_learning"</span>
                </div>
                <div className="ml-4 text-github-subtle">
                  <span className="text-github-emphasis">innovation</span> <span className="text-github-accent">from</span> <span className="text-green-400">"problem_solving"</span>
                </div>
                <div className="mt-4 text-github-accent">def</div>
                <div className="ml-4 text-github-emphasis">
                  build_future<span className="text-github-subtle">(</span>skills<span className="text-github-subtle">, </span>dedication<span className="text-github-subtle">):</span>
                </div>
                <div className="ml-8 text-github-accent">return</div>
                <div className="ml-12 text-github-subtle">
                  passion <span className="text-github-accent">+</span> innovation <span className="text-github-accent">+</span> <span className="text-green-400">"endless possibilities"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
