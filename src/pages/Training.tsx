import { motion } from 'framer-motion';
import { Target, Shield, Cpu, Cloud, Code, Smartphone, Globe, Users, Zap, Database, Brain, Settings, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Training = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20">
        <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-bold text-foreground mb-6"
          >
            Welcome to Xentric Technologies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Advanced Defense Systems & Technology Solutions for Modern Challenges
          </motion.p>
        </div>
      </section>

      {/* Smart Target Systems */}
      <section className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Smart Target Systems</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Revolutionary defense training solutions designed for precision and reliability
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div variants={itemVariants}>
                <Card className="group h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <Target className="h-8 w-8 text-primary" />
                      <CardTitle className="text-xl">LOMAH Smart Target System</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      LOMAH consists of a Pop-up Target (PT) with acoustical sensors mounted on a frame at the Target End, 
                      Firing Point Equipment (FPE) for individual lanes at the Firer's End for instant display of location of bullet hit 
                      and a central Master Control Station (MCS) to monitor and record the results of all firing lanes.
                      <br /><br />
                      FPE displays and records the shot location on the target and miss location within the detection zone, 
                      number of shots fired, type of exercise in progress, the size of the group of bullets, the score, rating and 
                      the lane operation status. The equipment is rugged, light-weight, easy to assemble and operate. 
                      It is available in wired and wireless configurations.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="group h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <Settings className="h-8 w-8 text-primary" />
                      <CardTitle className="text-xl">Multi-Functional Target Systems</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      Xentric MFTS® is an electro-mechanical system of versatile targets which are programmable from the firers end 
                      to perform various movements for firing practices. The system is designed for use both at outdoor and indoor 
                      shooting ranges. It is portable and easy to operate. It is a rugged, all-weather system and meets IP 65 standards.
                      <br /><br />
                      The system is available both in wired and wireless configurations and operates either with 230V AC 50 Hz or 
                      with DC battery power.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="group h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <Shield className="h-8 w-8 text-primary" />
                      <CardTitle className="text-xl">Tank Targets</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      Xentric Technologies offers the static as well as the moving Tank target systems - the Pop-up Static Tank Target 
                      Mechanism or STTM and Rail Moving Tank Target Mechanism or MTTM. These targets are ideal for tactical firing practices.
                      <br /><br />
                      The Stationary target communicates through wireless. It is battery powered and its exposure and conceal time is 
                      between 5 to 10 seconds. It is weather-proof and senses hit for range firing.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="group h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <Cpu className="h-8 w-8 text-primary" />
                      <CardTitle className="text-xl">Master Control Station (Zen MCS)</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      Xentric Control Station (Zen MCS) is a Live Firing Range Control System that enables display and control 
                      for all targets in the range. The MCS facilitates the programmed behaviour of all the targets, so that 
                      pre-decided firing exercises may be conducted.
                      <br /><br />
                      At MCS specific exercise may be selected for each target, enabling snap shooting exercises at various distances. 
                      MCS also facilitates 'Immediate' control of targets as required at the moment by the Instructor.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technology Services</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive IT solutions tailored to your business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div variants={itemVariants}>
                <Card className="group h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <Code className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Custom Software Development</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      We offer bespoke software solutions tailored to your business needs. Our team of experienced developers 
                      can create software that will streamline your processes and increase efficiency.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="group h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <Cloud className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Cloud Services</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Our cloud services can help you reduce costs and increase flexibility. We offer cloud migration, 
                      cloud infrastructure management, and cloud security services.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="group h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <Settings className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">IT Consulting</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Our IT consulting services can help you optimize your IT infrastructure, improve security, and reduce costs. 
                      Our team of experts can provide recommendations tailored to your business needs.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="group h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <Shield className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Cybersecurity</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      We offer a range of cybersecurity services to protect your business from cyber threats. 
                      Our services include vulnerability assessments, penetration testing, and threat intelligence.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="group h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <Smartphone className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Mobile App Development</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      We specialize in mobile app development for iOS and Android. Our team of developers can create apps 
                      that will enhance your business and engage your customers.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="group h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <Globe className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Web Development</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      We offer web development services for businesses of all sizes. Our team of developers can create 
                      custom websites that will showcase your brand and improve user experience.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Digital Transformation */}
      <section className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Transform Your Business with Xentric Technologies</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                End-to-end digital transformation solutions that drive growth and innovation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={itemVariants}>
                <Card className="group h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <Zap className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Digital Transformation</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      We help businesses transform their operations and customer experiences through digital technologies. 
                      From strategy to implementation, we provide end-to-end solutions that unlock new opportunities and drive growth.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="group h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <Cloud className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Cloud Migration and Management</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Migrating to the cloud can be a daunting task, but it doesn't have to be. We help businesses move their 
                      applications and data to the cloud, and manage their cloud infrastructure for optimal performance and cost savings.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="group h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <Brain className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">Data Analytics and Machine Learning</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Data is the lifeblood of modern business, and we help businesses make the most of it. Our data analytics 
                      and machine learning solutions provide insights and predictions that drive decisions and create value.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="group h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <Users className="h-6 w-6 text-primary" />
                      <CardTitle className="text-lg">IT Staff Augmentation & Technology Consulting</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Sometimes you need a little extra help to manage your IT operations. Our staff augmentation services 
                      provide skilled IT professionals who can work alongside your team. We also provide expert technology 
                      consulting to help businesses make informed decisions about their technology investments.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Training;