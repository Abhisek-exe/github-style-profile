
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const phrases = [
    "building with AI, Data & Code.",
    "crafting intelligent solutions.",
    "exploring machine learning frontiers.",
    "developing data-driven applications."
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < phrases[currentIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(phrases[currentIndex].slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isTyping]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-github-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-github-neon/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-mono">
            <span className="text-github-subtle">Hi, I'm </span>
            <span className="gradient-text">Abhisek</span>
            <span className="text-github-subtle"> —</span>
          </h1>
          
          <div className="text-2xl md:text-3xl lg:text-4xl font-mono mb-8 h-16 flex items-center justify-center">
            <span className="text-github-emphasis mr-2">{'>'}</span>
            <span className="text-github-accent">
              {displayText}
              <span className="inline-block w-0.5 h-8 bg-github-neon ml-1 animate-blink"></span>
            </span>
          </div>

          <p className="text-xl md:text-2xl text-github-subtle mb-8 max-w-3xl mx-auto">
            <span className="text-github-emphasis font-semibold">B.Tech @ NIT Rourkela</span> | 
            <span className="text-github-accent"> AI & LLM Developer</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-github-accent hover:bg-github-accent/80 text-github-bg font-mono font-semibold px-8 py-3 neon-glow"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-github-border text-github-emphasis hover:bg-github-muted font-mono px-8 py-3"
            >
              Get In Touch
            </Button>
          </div>

          {/* Code snippet decoration */}
          <div className="hidden md:block max-w-2xl mx-auto">
            <div className="terminal-border rounded-lg p-4 text-left font-mono text-sm">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-github-subtle">
                <span className="text-github-accent">const</span>{' '}
                <span className="text-github-emphasis">developer</span> = {'{'}
              </div>
              <div className="ml-4 text-github-subtle">
                name: <span className="text-green-400">"Abhisek Mahapatra"</span>,
              </div>
              <div className="ml-4 text-github-subtle">
                skills: [<span className="text-green-400">"AI"</span>, <span className="text-green-400">"Data Science"</span>, <span className="text-green-400">"React"</span>],
              </div>
              <div className="ml-4 text-github-subtle">
                passion: <span className="text-green-400">"Building intelligent solutions"</span>
              </div>
              <div className="text-github-subtle">{'}'}</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-github-subtle" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
