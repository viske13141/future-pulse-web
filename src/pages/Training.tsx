import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Clock, DollarSign, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Defense Systems', 'IT Services', 'Software Development', 'Cloud & Analytics', 'Security', 'Consulting'];

const products = [
  {
    id: 1,
    title: "LOMAH Smart Target System",
    description: "Electro-mechanical, software-driven, acoustical projectile detection system for outdoor live firing ranges. Features real-time shot location tracking and wireless configurations.",
    category: "Defense Systems",
    features: "Wireless & Wired",
    applications: "Live Firing Ranges",
    rating: 4.9,
    clients: "50+ Defense Units",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "Multi-Functional Target Systems",
    description: "Versatile programmable targets for various firing practices. Rugged, all-weather system meeting IP 65 standards with both wired and wireless configurations.",
    category: "Defense Systems",
    features: "Programmable Movement",
    applications: "Indoor & Outdoor Ranges",
    rating: 4.8,
    clients: "30+ Training Centers",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "Tank Target Systems",
    description: "Static and moving tank target systems including Pop-up Static Tank Target Mechanism (STTM) and Rail Moving Tank Target Mechanism (MTTM) for tactical firing practices.",
    category: "Defense Systems",
    features: "Hit Sensing",
    applications: "Tank Training",
    rating: 4.7,
    clients: "15+ Military Bases",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    title: "Master Control Station (Zen MCS)",
    description: "Live Firing Range Control System enabling display and control for all targets. Facilitates programmed behavior and immediate instructor control for comprehensive range management.",
    category: "Defense Systems",
    features: "Centralized Control",
    applications: "Range Management",
    rating: 4.9,
    clients: "25+ Control Centers",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    title: "Custom Software Development",
    description: "Bespoke software solutions tailored to your business needs. Our experienced developers create software that streamlines processes and increases efficiency.",
    category: "Software Development",
    features: "Tailored Solutions",
    applications: "Business Optimization",
    rating: 4.8,
    clients: "200+ Businesses",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    title: "Cloud Services",
    description: "Comprehensive cloud solutions including migration, infrastructure management, and security services to reduce costs and increase flexibility for your business operations.",
    category: "Cloud & Analytics",
    features: "Migration & Management",
    applications: "Infrastructure Optimization",
    rating: 4.7,
    clients: "150+ Companies",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop"
  },
  {
    id: 7,
    title: "IT Consulting",
    description: "Expert IT consulting to optimize infrastructure, improve security, and reduce costs. Our team provides tailored recommendations for your specific business needs.",
    category: "Consulting",
    features: "Infrastructure Optimization",
    applications: "Business Strategy",
    rating: 4.8,
    clients: "300+ Consultations",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop"
  },
  {
    id: 8,
    title: "Cybersecurity Solutions",
    description: "Comprehensive cybersecurity services to protect against threats including vulnerability assessments, penetration testing, and threat intelligence solutions.",
    category: "Security",
    features: "Threat Protection",
    applications: "Risk Management",
    rating: 4.9,
    clients: "100+ Secured Systems",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop"
  },
  {
    id: 9,
    title: "Mobile App Development",
    description: "Specialized mobile app development for iOS and Android platforms. Create engaging applications that enhance your business and connect with customers effectively.",
    category: "Software Development",
    features: "Cross-Platform",
    applications: "Customer Engagement",
    rating: 4.7,
    clients: "80+ Mobile Apps",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop"
  },
  {
    id: 10,
    title: "Web Development",
    description: "Custom website development for businesses of all sizes. Create responsive, user-friendly websites that showcase your brand and improve user experience.",
    category: "Software Development",
    features: "Responsive Design",
    applications: "Brand Showcase",
    rating: 4.8,
    clients: "120+ Websites",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&h=250&fit=crop"
  },
  {
    id: 11,
    title: "Digital Transformation",
    description: "End-to-end digital transformation solutions that transform operations and customer experiences through innovative technologies, driving growth and new opportunities.",
    category: "Consulting",
    features: "Strategy to Implementation",
    applications: "Business Innovation",
    rating: 4.9,
    clients: "60+ Transformations",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
  },
  {
    id: 12,
    title: "Data Analytics & Machine Learning",
    description: "Advanced data analytics and machine learning solutions that provide insights and predictions to drive informed business decisions and create sustainable value.",
    category: "Cloud & Analytics",
    features: "Predictive Insights",
    applications: "Decision Making",
    rating: 4.8,
    clients: "75+ Analytics Projects",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
  },
  {
    id: 13,
    title: "IT Staff Augmentation",
    description: "Skilled IT professionals to work alongside your team for enhanced operational efficiency. Get the extra help you need to manage and execute IT operations successfully.",
    category: "IT Services",
    features: "Skilled Professionals",
    applications: "Team Enhancement",
    rating: 4.7,
    clients: "90+ Staff Placements",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop"
  },
  {
    id: 14,
    title: "Technology Consulting",
    description: "Expert technology consulting for informed investment decisions. From infrastructure assessment to solution recommendations, we guide your technology strategy.",
    category: "Consulting",
    features: "Strategic Guidance",
    applications: "Technology Investment",
    rating: 4.8,
    clients: "200+ Strategic Plans",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
  }
];

const Training = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            Xentric Technologies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Advanced Defense Systems & Technology Solutions for Modern Challenges
          </motion.p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-4 mb-12"
          >
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search products & services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 appearance-none bg-background min-w-[150px]"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>

                <div className="p-6">
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                    {product.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Product Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {product.features}
                      </div>
                      <div className="flex items-center">
                        <Users size={16} className="mr-1" />
                        {product.clients}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-accent text-accent mr-1" />
                      {product.rating}
                    </div>
                  </div>

                  {/* Progress Bar Animation */}
                  <div className="mb-4">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${product.rating * 20}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-primary rounded-full"
                      />
                    </div>
                  </div>

                  {/* Applications and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold">Applications:</span>
                      <br />
                      {product.applications}
                    </div>
                    <Button className="btn-glow">
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-4">No products found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria</p>
              <Button onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}>
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Training;