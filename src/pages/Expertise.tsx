import { motion } from 'framer-motion';
import { Calendar, Award, TrendingUp, Users, Brain, Cloud, Shield, Smartphone, Code, Database, Zap, Globe } from 'lucide-react';
import { useState } from 'react';

const timelineData = [
  {
    year: 2018,
    title: "Company Founded",
    description: "Started with a vision to revolutionize technology solutions for businesses worldwide.",
    achievement: "First AI project completed"
  },
  {
    year: 2020,
    title: "Global Expansion",
    description: "Extended our services internationally, establishing partnerships in 15+ countries.",
    achievement: "100+ successful projects"
  },
  {
    year: 2022,
    title: "Innovation Leadership",
    description: "Launched cutting-edge blockchain and AI solutions, setting industry standards.",
    achievement: "Industry recognition awards"
  },
  {
    year: 2024,
    title: "Future Forward",
    description: "Leading the next wave of digital transformation with quantum computing and advanced AI.",
    achievement: "500+ happy clients"
  }
];

const skillsData = [
  { skill: "Artificial Intelligence", percentage: 95, color: "from-blue-500 to-cyan-500" },
  { skill: "Cloud Architecture", percentage: 90, color: "from-purple-500 to-pink-500" },
  { skill: "Blockchain Technology", percentage: 98, color: "from-green-500 to-teal-500" },
  { skill: "Data Analytics", percentage: 92, color: "from-orange-500 to-red-500" }
];

const expertiseAreas = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Advanced machine learning, neural networks, and cognitive computing solutions that transform business processes.",
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision"],
    projects: "150+",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Cloud,
    title: "Cloud Architecture", 
    description: "Scalable, secure cloud solutions across AWS, Azure, and GCP with microservices and serverless architectures.",
    technologies: ["AWS", "Azure", "GCP", "Kubernetes"],
    projects: "200+",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security frameworks, threat detection, and compliance solutions for enterprise environments.",
    technologies: ["Zero Trust", "SIEM", "Penetration Testing", "Compliance"],
    projects: "80+",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Full-stack development with modern frameworks, APIs, and database design for scalable applications.",
    technologies: ["React", "Node.js", "Python", "Microservices"],
    projects: "300+",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Big data processing, real-time analytics, and data warehouse solutions for data-driven insights.",
    technologies: ["Apache Spark", "Kafka", "Snowflake", "ETL"],
    projects: "120+",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile applications with exceptional user experiences across all devices.",
    technologies: ["React Native", "Flutter", "iOS", "Android"],
    projects: "90+",
    color: "from-pink-500 to-rose-500"
  }
];

const CircularProgress = ({ percentage, color, skill }: { percentage: number; color: string; skill: string }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32 mb-4">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
          {/* Background circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-muted/20"
          />
          {/* Progress circle */}
          <motion.circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            strokeWidth="8"
            strokeLinecap="round"
            className={`bg-gradient-to-r ${color} stroke-current`}
            style={{
              strokeDasharray,
              strokeDashoffset: circumference,
            }}
            animate={{
              strokeDashoffset: strokeDashoffset,
            }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: "easeInOut",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-foreground">{percentage}%</span>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-center text-foreground">{skill}</h3>
    </div>
  );
};

const Expertise = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-hero py-20">
        <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-bold text-foreground mb-6"
          >
            Our Expertise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Years of innovation, countless successful projects, and unwavering commitment to excellence
          </motion.p>
        </div>

        {/* Floating Background Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-20 h-20 border-2 border-primary/20 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 w-16 h-16 bg-accent/20 rounded-lg blur-sm"
        />
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">Milestones that shaped our success story</p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-muted"></div>
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-primary"
            />

            {/* Timeline Items */}
            <div className="space-y-16">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <Calendar className="w-5 h-5 text-primary mr-2" />
                        <span className="text-2xl font-bold text-primary">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground mb-3">{item.description}</p>
                      <div className="flex items-center text-sm text-accent font-medium">
                        <Award className="w-4 h-4 mr-1" />
                        {item.achievement}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                    className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg relative z-10"
                  />

                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas - Animated Icon Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Expertise</h2>
            <p className="text-xl text-muted-foreground">Specialized knowledge across cutting-edge technologies</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  rotateY: hoveredCard === index ? 180 : 0,
                  scale: 1.02
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-glow glow-border transition-all duration-500 cursor-pointer perspective-1000"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front Face */}
                <div className={`${hoveredCard === index ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-glow mx-auto`}
                  >
                    <area.icon className="text-white" size={32} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-4 text-center group-hover:text-primary transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {area.description}
                  </p>

                  {/* Projects Count */}
                  <div className="mt-6 text-center">
                    <span className="text-3xl font-bold text-primary">{area.projects}</span>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </div>
                </div>

                {/* Back Face - Detailed Info */}
                <div className={`absolute inset-0 p-8 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 bg-gradient-to-br ${area.color} text-white rounded-2xl flex flex-col justify-center`}>
                  <h3 className="text-2xl font-bold mb-4 text-center">{area.title}</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-1">{area.projects}</div>
                      <div className="text-white/90">Successful Projects</div>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${area.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Vision - Circular Progress */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Strategic Vision</h2>
            <p className="text-xl text-muted-foreground">Core competencies that drive innovation</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillsData.map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <CircularProgress
                  percentage={item.percentage}
                  color={item.color}
                  skill={item.skill}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-50"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <TrendingUp className="w-12 h-12 mx-auto" />
              <div className="text-4xl font-bold">500+</div>
              <div className="text-lg opacity-90">Projects Completed</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <Users className="w-12 h-12 mx-auto" />
              <div className="text-4xl font-bold">150+</div>
              <div className="text-lg opacity-90">Expert Team Members</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <Award className="w-12 h-12 mx-auto" />
              <div className="text-4xl font-bold">25+</div>
              <div className="text-lg opacity-90">Industry Awards</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expertise;