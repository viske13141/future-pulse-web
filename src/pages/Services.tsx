import { motion } from 'framer-motion';
import { Brain, Cloud, Code, Shield, Smartphone, BarChart3, Building, Globe, Award, Zap } from 'lucide-react';
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline';

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation across your organization.",
    features: ["Custom AI Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Scalable, secure, and cost-effective cloud solutions that grow with your business and ensure maximum uptime.",
    features: ["AWS/Azure/GCP", "Microservices", "Serverless Computing", "DevOps Integration"]
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored software solutions built with cutting-edge technologies to meet your unique business requirements.",
    features: ["Web Applications", "API Development", "Database Design", "System Integration"]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
    features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"]
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    features: ["iOS Development", "Android Development", "React Native", "Flutter"]
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics and business intelligence solutions.",
    features: ["Data Warehousing", "Business Intelligence", "Real-time Analytics", "Data Visualization"]
  }
];

const timelineData = [
  {
    id: 1,
    title: "Company Founded",
    date: "2018",
    content: "Started with a vision to revolutionize technology solutions for businesses worldwide. First AI project completed.",
    category: "Foundation",
    icon: Building,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Global Expansion",
    date: "2020",
    content: "Extended our services internationally, establishing partnerships in 15+ countries. 100+ successful projects completed.",
    category: "Growth",
    icon: Globe,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Innovation Leadership",
    date: "2022",
    content: "Launched cutting-edge blockchain and AI solutions, setting industry standards. Industry recognition awards received.",
    category: "Innovation",
    icon: Award,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 4,
    title: "Future Forward",
    date: "2024",
    content: "Leading the next wave of digital transformation with quantum computing and advanced AI. 500+ happy clients achieved.",
    category: "Future",
    icon: Zap,
    relatedIds: [3],
    status: "in-progress" as const,
    energy: 85,
  },
];

const TypingEffect = ({ text }: { text: string }) => {
  return (
    <motion.span
      initial={{ width: 0 }}
      whileInView={{ width: "auto" }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="inline-block overflow-hidden whitespace-nowrap typing-cursor"
    >
      {text}
    </motion.span>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen py-20">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20">
        <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-bold text-foreground mb-6"
          >
            Our <TypingEffect text="Services" />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Comprehensive technology solutions to accelerate your digital transformation
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-glow glow-border transition-all duration-300"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow"
                >
                  <service.icon className="text-white" size={28} />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Journey Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
          >
            Our Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Discover the milestones that shaped our innovative path
          </motion.p>
        </div>
        <RadialOrbitalTimeline timelineData={timelineData} />
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
          >
            Need a Custom Solution?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8"
          >
            Let's discuss how we can help transform your business with tailored technology solutions.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-hero"
          >
            Schedule Consultation
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Services;