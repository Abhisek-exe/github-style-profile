
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-github-canvas border-t border-github-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-github-subtle text-sm mb-4 md:mb-0">
            <span>Built with</span>
            <Heart size={16} className="text-red-500" />
            <span>and</span>
            <Code size={16} className="text-github-accent" />
            <span>by Abhisek Mahapatra</span>
          </div>
          
          <div className="text-github-subtle text-sm font-mono">
            © {new Date().getFullYear()} — Crafted with React & TypeScript
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-github-border">
          <div className="text-center">
            <div className="terminal-border rounded-lg p-4 inline-block">
              <div className="font-mono text-sm space-y-1">
                <div className="text-github-accent">
                  console.log<span className="text-github-subtle">(</span>
                  <span className="text-green-400">"Thanks for visiting! 🚀"</span>
                  <span className="text-github-subtle">)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
