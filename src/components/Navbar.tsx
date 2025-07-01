
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { Icon: Github, href: 'https://github.com/abhisekmahapatra', label: 'GitHub' },
    { Icon: Linkedin, href: 'https://linkedin.com/in/abhisekmahapatra', label: 'LinkedIn' },
    { Icon: Mail, href: 'mailto:abhisek@example.com', label: 'Email' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-github-bg/95 backdrop-blur-md border-b border-github-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-mono text-xl font-bold gradient-text">
            &lt;Abhisek /&gt;
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-github-subtle hover:text-github-emphasis transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-github-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Social Links & Resume */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-github-subtle hover:text-github-accent transition-colors duration-200 hover:scale-110 transform"
              >
                <Icon size={20} />
              </a>
            ))}
            <Button 
              variant="outline" 
              size="sm" 
              className="border-github-accent text-github-accent hover:bg-github-accent hover:text-github-bg neon-glow"
            >
              <Download size={16} className="mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-github-canvas border-b border-github-border">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-github-subtle hover:text-github-emphasis transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-github-subtle hover:text-github-accent transition-colors duration-200"
                  >
                    <Icon size={20} />
                  </a>
                ))}
                <Button variant="outline" size="sm" className="border-github-accent text-github-accent">
                  <Download size={16} className="mr-2" />
                  Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
