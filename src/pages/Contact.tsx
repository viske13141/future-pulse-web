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

      {/* Business Hours */}
      <section className="py-20 bg-muted/30 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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