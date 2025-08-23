import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Award, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const clientCompanies = [
  { name: "Google", logo: "https://img.icons8.com/color/96/google-logo.png" },
  { name: "Microsoft", logo: "https://img.icons8.com/color/96/microsoft.png" },
  { name: "Amazon", logo: "https://img.icons8.com/color/96/amazon.png" },
  { name: "Apple", logo: "https://img.icons8.com/color/96/mac-os.png" },
  { name: "Meta", logo: "https://img.icons8.com/color/96/meta.png" },
  { name: "Tesla", logo: "https://img.icons8.com/color/96/tesla.png" },
  { name: "Netflix", logo: "https://img.icons8.com/color/96/netflix.png" },
  { name: "Spotify", logo: "https://img.icons8.com/color/96/spotify.png" }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechCorp",
    content: "FutureTech transformed our business with cutting-edge AI solutions. The results exceeded our expectations and delivered measurable ROI within months.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Michael Chen",
    position: "CTO", 
    company: "InnovateLabs",
    content: "The team's expertise in cloud architecture saved us months of development time. Their innovative approach revolutionized our entire infrastructure.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Emma Williams",
    position: "Director",
    company: "FinanceFlow", 
    content: "Outstanding training programs that elevated our entire development team's skills. The knowledge transfer was seamless and highly effective.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "James Rodriguez",
    position: "Head of Innovation",
    company: "DataFlow Inc",
    content: "Their blockchain solutions provided the security and transparency we needed. Absolutely recommend their expertise to any forward-thinking company.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5
  }
];

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "98%", label: "Success Rate" },
  { icon: TrendingUp, value: "50M+", label: "Revenue Generated" },
  { icon: Star, value: "4.9/5", label: "Client Rating" }
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-glow opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground">
                Shape the{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Future
                </span>{' '}
                with AI
              </h1>
              
              <p className="text-xl sm:text-2xl text-muted-foreground">
                We deliver cutting-edge technology solutions that transform businesses 
                and accelerate growth in the digital age.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-hero group">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" className="hover:bg-primary/5 hover:text-primary hover:border-primary/30">
                  Watch Demo
                </Button>
              </div>
            </motion.div>

            {/* Right Content - Floating Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative z-10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-80 h-80 mx-auto relative"
                >
                  <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute inset-4 bg-gradient-to-r from-accent to-primary rounded-full opacity-30 blur-lg"></div>
                  <div className="absolute inset-8 bg-card rounded-full shadow-2xl flex items-center justify-center">
                    <div className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">AI</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-accent/30 rounded-full opacity-30 blur-2xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-20 w-16 h-16 bg-primary/20 rounded-full blur-md"
        />
      </section>

      {/* Client Companies Carousel */}
      <section className="py-16 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-muted-foreground">Join hundreds of companies that trust us with their digital transformation</p>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              animate={{ x: [0, -100 * clientCompanies.length] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex space-x-16 items-center"
              style={{ width: `${200 * clientCompanies.length}%` }}
            >
              {[...clientCompanies, ...clientCompanies].map((company, index) => (
                <motion.div
                  key={`${company.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: (index % clientCompanies.length) * 0.1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    filter: "drop-shadow(0 0 20px hsl(var(--primary) / 0.5))" 
                  }}
                  className="flex-shrink-0 w-24 h-24 bg-card rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 flex items-center justify-center grayscale hover:grayscale-0 cursor-pointer group"
                >
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Circular Testimonials Carousel */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted by industry leaders worldwide
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Main Testimonial Display */}
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Circular Avatar */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative mx-auto mb-8"
              >
                <div className="w-32 h-32 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-lg"></div>
                  <div className="absolute inset-2 bg-gradient-primary rounded-full p-1">
                    <img
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                {/* Floating Rating Stars */}
                <div className="absolute -top-2 -right-2 bg-accent text-white rounded-full p-2 shadow-lg">
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </motion.div>

              {/* Client Info Above Circle */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-lg text-primary font-medium">
                  {testimonials[currentTestimonial].position} • {testimonials[currentTestimonial].company}
                </p>
              </div>

              {/* Review Text Below Circle */}
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-muted-foreground italic leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </p>
                <div className="flex justify-center mt-4 space-x-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center mt-12 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-card rounded-full shadow-card hover:shadow-glow transition-all duration-300 hover:bg-primary hover:text-white group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
              
              {/* Dot Indicators */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-primary scale-125' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 bg-card rounded-full shadow-card hover:shadow-glow transition-all duration-300 hover:bg-primary hover:text-white group"
              >
                <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Auto-play Progress Bar */}
            <div className="w-full max-w-xs mx-auto mt-6 bg-muted rounded-full h-1 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear", repeat: Infinity }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Join hundreds of companies that trust us with their digital transformation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              variant="secondary" 
              className="text-lg px-8 py-4 hover:scale-105 transition-transform duration-300"
            >
              Start Your Journey
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
