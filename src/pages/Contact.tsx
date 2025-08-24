import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, User, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@futuretech.com",
    description: "Send us an email anytime!"
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (555) 123-4567",
    description: "Mon-Fri from 8am to 6pm"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "San Francisco, CA",
    description: "Come say hello at our office"
  }
];

const conversationSteps = [
  {
    id: 'welcome',
    question: "Hi! I'm Alex, your virtual assistant. What's your name?",
    type: 'text',
    field: 'name',
    placeholder: 'Enter your full name',
    icon: User
  },
  {
    id: 'email',
    question: "Nice to meet you! What's your email address?",
    type: 'email',
    field: 'email',
    placeholder: 'Enter your email address',
    icon: Mail
  },
  {
    id: 'message',
    question: "Great! What can we help you with today?",
    type: 'textarea',
    field: 'message',
    placeholder: 'Tell us about your project or inquiry...',
    icon: MessageSquare
  },
  {
    id: 'complete',
    question: "Perfect! We'll get back to you within 24 hours.",
    type: 'complete',
    field: '',
    placeholder: '',
    icon: CheckCircle
  }
];

const Contact = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (value: string) => {
    const currentField = conversationSteps[currentStep].field;
    if (currentField) {
      setFormData(prev => ({
        ...prev,
        [currentField]: value
      }));
    }
  };

  const nextStep = () => {
    if (currentStep < conversationSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleSubmit = async () => {
    if (currentStep === conversationSteps.length - 2) {
      setIsSubmitting(true);
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      setIsSubmitting(false);
      nextStep();
    } else {
      nextStep();
    }
  };

  const currentStepData = conversationSteps[currentStep];
  const progress = ((currentStep + 1) / conversationSteps.length) * 100;

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
      <motion.div
        animate={{ 
          background: [
            "radial-gradient(circle at 20% 50%, hsl(217 91% 60% / 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, hsl(185 84% 60% / 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 50%, hsl(217 91% 60% / 0.1) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      />
      
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6 + i * 0.2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Header */}
      <section className="relative overflow-hidden py-20">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-bold text-foreground mb-6"
          >
            Let's Start a Conversation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Ready to transform your business? Let's chat about your next big idea.
          </motion.p>
        </div>
      </section>

      {/* Conversational Form */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-muted-foreground">Progress</span>
              <span className="text-sm font-medium text-primary">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Chat Interface */}
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-border/50 overflow-hidden">
            <div className="p-8 space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Assistant Avatar & Message */}
                  <div className="flex items-start space-x-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <currentStepData.icon className="text-white" size={20} />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="flex-1 bg-muted/50 rounded-2xl rounded-tl-sm p-4"
                    >
                      <p className="text-foreground text-lg">
                        {currentStepData.question}
                      </p>
                    </motion.div>
                  </div>

                  {/* User Input Area */}
                  {currentStep < conversationSteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="flex items-end justify-end"
                    >
                      <div className="w-full max-w-md space-y-4">
                        {currentStepData.type === 'textarea' ? (
                          <textarea
                            value={formData[currentStepData.field as keyof typeof formData]}
                            onChange={(e) => handleInputChange(e.target.value)}
                            placeholder={currentStepData.placeholder}
                            rows={4}
                            className="w-full px-4 py-3 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 resize-none bg-background/50 backdrop-blur-sm"
                          />
                        ) : (
                          <input
                            type={currentStepData.type}
                            value={formData[currentStepData.field as keyof typeof formData]}
                            onChange={(e) => handleInputChange(e.target.value)}
                            placeholder={currentStepData.placeholder}
                            className="w-full px-4 py-3 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 bg-background/50 backdrop-blur-sm"
                          />
                        )}
                        
                        <Button
                          onClick={handleSubmit}
                          disabled={!formData[currentStepData.field as keyof typeof formData] || isSubmitting}
                          className="w-full btn-hero group relative overflow-hidden"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center">
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                              Sending...
                            </div>
                          ) : (
                            <>
                              {currentStep === conversationSteps.length - 2 ? 'Send Message' : 'Continue'}
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </>
                          )}
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Completion State */}
                  {currentStep === conversationSteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1 }}
                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle className="text-green-600" size={32} />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">Thank You!</h3>
                      <p className="text-muted-foreground mb-6">
                        Your message has been sent successfully. We'll get back to you within 24 hours.
                      </p>
                      <Button
                        onClick={() => {
                          setCurrentStep(0);
                          setFormData({ name: '', email: '', message: '' });
                        }}
                        variant="outline"
                      >
                        Start New Conversation
                      </Button>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Other Ways to Reach Us</h2>
            <p className="text-xl text-muted-foreground">
              Prefer a different communication channel? We're here for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-card hover:shadow-glow glow-border transition-all duration-300 text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow"
                >
                  <info.icon className="text-white" size={24} />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {info.title}
                </h3>
                <p className="text-primary font-medium mb-2">{info.content}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-muted/30 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Connect With Us</h2>
            <p className="text-xl text-muted-foreground">
              Follow us on social media for the latest updates and insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', color: 'from-blue-600 to-blue-700', url: 'https://facebook.com' },
              { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z', color: 'from-sky-400 to-sky-600', url: 'https://twitter.com' },
              { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', color: 'from-blue-700 to-blue-800', url: 'https://linkedin.com' },
              { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', color: 'from-pink-500 to-purple-600', url: 'https://instagram.com' }
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 text-center cursor-pointer overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow`}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </motion.div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {social.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Follow us on {social.name}
                </p>
              </motion.a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-card"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="text-primary" size={24} />
                <h3 className="text-2xl font-bold text-foreground">Business Hours</h3>
              </div>
              <div className="space-y-4">
                {[
                  { day: 'Monday - Friday', time: '8:00 AM - 6:00 PM' },
                  { day: 'Saturday', time: '9:00 AM - 4:00 PM' },
                  { day: 'Sunday', time: 'Closed' }
                ].map((schedule, index) => (
                  <motion.div
                    key={schedule.day}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex justify-between items-center py-2 border-b border-border/50 last:border-0"
                  >
                    <span className="text-foreground font-medium">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.time}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-primary rounded-2xl p-8 text-white"
            >
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare size={24} />
                <h3 className="text-2xl font-bold">Quick Response Guarantee</h3>
              </div>
              <div className="space-y-4">
                <p className="text-white/90 leading-relaxed">
                  We value your time. Our dedicated team typically responds to all inquiries within 2-4 hours during business hours.
                </p>
                <div className="bg-white/20 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Priority Support</h4>
                  <p className="text-sm text-white/80">
                    For urgent matters, please call us directly or mention "URGENT" in your message subject line.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;