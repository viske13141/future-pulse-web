import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Training', path: '/training' },
  { name: 'Expertise', path: '/expertise' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-primary/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="font-bold text-xl text-foreground">FutureTech</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary"
                      initial={false}
                      animate={{
                        scaleX: isActive ? 1 : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      whileHover={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0 }}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block btn-hero text-sm"
          >
            Get Started
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-primary/10"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-primary bg-primary/5'
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <button className="w-full text-left px-4 py-2 btn-hero text-sm">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};