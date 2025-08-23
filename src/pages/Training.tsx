import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Clock, DollarSign, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = ['All', 'AI', 'Cloud', 'Blockchain', 'Web Development', 'Data Science', 'Mobile'];

const courses = [
  {
    id: 1,
    title: "Advanced AI & Machine Learning",
    description: "Master the fundamentals of AI and ML with hands-on projects and real-world applications.",
    category: "AI",
    duration: "12 weeks",
    price: 1299,
    rating: 4.9,
    students: 2847,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "Cloud Architecture Mastery",
    description: "Learn to design and implement scalable cloud solutions on AWS, Azure, and GCP.",
    category: "Cloud",
    duration: "10 weeks",
    price: 999,
    rating: 4.8,
    students: 1923,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "Blockchain Development",
    description: "Build decentralized applications and smart contracts with Ethereum and Solidity.",
    category: "Blockchain",
    duration: "8 weeks",
    price: 899,
    rating: 4.7,
    students: 1456,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    title: "Full-Stack Web Development",
    description: "Complete guide to modern web development with React, Node.js, and databases.",
    category: "Web Development",
    duration: "16 weeks",
    price: 1599,
    rating: 4.9,
    students: 3421,
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    title: "Data Science & Analytics",
    description: "Transform data into insights using Python, R, and modern analytics tools.",
    category: "Data Science",
    duration: "14 weeks",
    price: 1199,
    rating: 4.8,
    students: 2134,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    title: "Mobile App Development",
    description: "Create native and cross-platform mobile apps with React Native and Flutter.",
    category: "Mobile",
    duration: "12 weeks",
    price: 1099,
    rating: 4.7,
    students: 1876,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop"
  }
];

const Training = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
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
            Professional Training
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Level up your skills with industry-leading courses and expert instructors
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
                placeholder="Search courses..."
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

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300"
              >
                {/* Course Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>

                <div className="p-6">
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                    {course.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Course Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Users size={16} className="mr-1" />
                        {course.students.toLocaleString()}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-accent text-accent mr-1" />
                      {course.rating}
                    </div>
                  </div>

                  {/* Progress Bar Animation */}
                  <div className="mb-4">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${course.rating * 20}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-primary rounded-full"
                      />
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-2xl font-bold text-foreground">
                      <DollarSign size={20} />
                      {course.price}
                    </div>
                    <Button className="btn-glow">
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-4">No courses found</h3>
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