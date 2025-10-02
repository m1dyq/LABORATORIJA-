import { useState } from 'react';
import daymianLogo from 'figma:asset/061bef0e257818d45f962c693291dfb85a790385.png';
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { DarkModeToggle } from "./DarkModeToggle";

const navItems = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Blog', href: '#blog' },
  { name: 'Security', href: '#security' },
  { name: 'About Us', href: '#about' },
  { name: 'Community', href: '#community' },
  { name: 'Support', href: '#support' },
];

interface NavigationProps {
  onGetStarted?: () => void;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export function Navigation({ onGetStarted, isDarkMode, onToggleDarkMode }: NavigationProps = {}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b transition-all duration-300 bg-orange-50/95 dark:bg-gray-900/95 border-orange-200 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer transition-transform duration-200 hover:scale-105" onClick={() => scrollToSection('#hero')}>
            <img 
              src={daymianLogo} 
              alt="Daymian Logo" 
              className="w-10 h-10"
            />
            <span className="text-xl font-semibold text-orange-600 dark:text-orange-400">
              daymian
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="hover:opacity-75 transition-all duration-300 cursor-pointer relative group text-orange-800 dark:text-orange-300"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-orange-600 dark:bg-orange-400"></span>
              </button>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <DarkModeToggle isDark={isDarkMode} onToggle={onToggleDarkMode} />
            <Button 
              size="sm"
              className="px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white"
              onClick={onGetStarted || (() => scrollToSection('#cta'))}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-orange-600 dark:text-orange-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-orange-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left py-2 hover:opacity-75 transition-all duration-300 hover:translate-x-2 text-orange-800 dark:text-orange-300"
                >
                  {item.name}
                </button>
              ))}
              <div className="mt-4 flex gap-3">
                <DarkModeToggle isDark={isDarkMode} onToggle={onToggleDarkMode} />
                <Button 
                  size="sm"
                  className="px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 w-fit bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white"
                  onClick={onGetStarted || (() => scrollToSection('#cta'))}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}