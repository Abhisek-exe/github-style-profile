
import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abhisek@example.com",
      href: "mailto:abhisek@example.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Rourkela, Odisha, India",
      href: null
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 XXXXX XXXXX",
      href: "tel:+91XXXXXXXXX"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/abhisekmahapatra"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/abhisekmahapatra"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/abhisekmahapatra"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-github-canvas/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-12 text-center">
            <span className="text-github-accent">{'<'}</span>
            <span className="text-github-emphasis">Contact</span>
            <span className="text-github-accent">{' />'}</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h3 className="text-2xl font-bold font-mono mb-6 text-github-emphasis">
                  Let's Connect! 🚀
                </h3>
                <p className="text-github-subtle leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                  or simply chat about technology and innovation. Whether you're a recruiter, 
                  fellow developer, or someone with an exciting idea, I'd love to hear from you!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="terminal-border p-4 hover:neon-glow transition-all duration-300">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-github-accent/10 rounded-lg">
                          <IconComponent className="w-5 h-5 text-github-accent" />
                        </div>
                        <div>
                          <p className="text-github-subtle text-sm">{info.label}</p>
                          {info.href ? (
                            <a 
                              href={info.href}
                              className="text-github-emphasis hover:text-github-accent transition-colors duration-200 font-mono"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-github-emphasis font-mono">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-bold font-mono mb-4 text-github-emphasis">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 terminal-border rounded-lg hover:neon-glow transition-all duration-300 transform hover:scale-110"
                      >
                        <IconComponent className="w-6 h-6 text-github-accent" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Code snippet decoration */}
              <div className="terminal-border rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-github-subtle font-mono text-sm ml-2">connect.js</span>
                </div>
                <div className="font-mono text-sm space-y-1">
                  <div className="text-github-accent">const</div>
                  <div className="ml-4 text-github-emphasis">
                    collaboration = <span className="text-green-400">"always welcome"</span>;
                  </div>
                  <div className="text-github-accent">const</div>
                  <div className="ml-4 text-github-emphasis">
                    responseTime = <span className="text-green-400">"within 24 hours"</span>;
                  </div>
                  <div className="text-github-accent">const</div>
                  <div className="ml-4 text-github-emphasis">
                    excitement = <span className="text-green-400">"maximum"</span>;
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="terminal-border p-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold font-mono mb-6 text-github-emphasis">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-github-muted border-github-border text-github-emphasis placeholder-github-subtle focus:border-github-accent"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-github-muted border-github-border text-github-emphasis placeholder-github-subtle focus:border-github-accent"
                    />
                  </div>
                </div>
                
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-github-muted border-github-border text-github-emphasis placeholder-github-subtle focus:border-github-accent"
                />
                
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-github-muted border-github-border text-github-emphasis placeholder-github-subtle focus:border-github-accent resize-none"
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-github-accent hover:bg-github-accent/80 text-github-bg font-mono font-semibold py-3 neon-glow"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-github-bg mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
