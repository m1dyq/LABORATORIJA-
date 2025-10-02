import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechFlow Inc.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b739fcdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150&h=150",
    content: "Daymian has completely transformed how I manage my daily workflow. The AI suggestions are incredibly accurate and have helped me reclaim 2+ hours every day. It's like having a personal productivity coach.",
    rating: 5,
    featured: true
  },
  {
    name: "Marcus Rodriguez",
    role: "Entrepreneur",
    company: "StartupLab",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150&h=150",
    content: "As someone juggling multiple businesses, Daymian's intelligent scheduling has been a game-changer. It adapts to my chaotic schedule and always finds time for what matters most.",
    rating: 5
  },
  {
    name: "Dr. Emily Watson",
    role: "Research Scientist",
    company: "BioTech Labs",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150&h=150",
    content: "The long-term goal tracking feature is phenomenal. I'm finally making consistent progress on my research projects while maintaining work-life balance. Highly recommend!",
    rating: 5
  },
  {
    name: "James Liu",
    role: "Creative Director",
    company: "Design Studio Pro",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150&h=150",
    content: "The AI understands my creative process better than I do! It schedules my deep work sessions at optimal times and reminds me to take breaks when I need them most.",
    rating: 5
  },
  {
    name: "Lisa Thompson",
    role: "Operations Manager",
    company: "Global Logistics Co.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150&h=150",
    content: "Managing a global team across time zones was chaotic until Daymian. Now my schedule automatically adjusts for different time zones and I never miss important meetings.",
    rating: 5
  },
  {
    name: "David Park",
    role: "Software Engineer",
    company: "CodeCraft Solutions",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=150&h=150",
    content: "The integration with my development tools is seamless. Daymian tracks my coding sessions and suggests the perfect times for code reviews and debugging. Pure genius!",
    rating: 5
  }
];

const stats = [
  { number: "10,000+", label: "Happy Users" },
  { number: "4.9/5", label: "Average Rating" },
  { number: "95%", label: "Would Recommend" },
  { number: "2.5hrs", label: "Time Saved Daily" }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: '#B8763E' }}>
            Loved by
            <span className="relative ml-3">
              Thousands
              <div className="absolute -bottom-2 left-0 w-full h-1 rounded-full" style={{ backgroundColor: '#D4A574' }}></div>
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#8B5E3A' }}>
            Join thousands of professionals who have transformed their productivity 
            and achieved better work-life balance with Daymian.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl border-2"
              style={{ 
                borderColor: '#D4A574',
                backgroundColor: 'white'
              }}
            >
              <div className="text-3xl mb-2" style={{ color: '#B8763E', fontWeight: '600' }}>
                {stat.number}
              </div>
              <p style={{ color: '#8B5E3A' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          {testimonials.filter(testimonial => testimonial.featured).map((testimonial, index) => (
            <div 
              key={index}
              className="max-w-4xl mx-auto text-center p-8 rounded-2xl border-2"
              style={{ 
                borderColor: '#B8763E',
                backgroundColor: 'white'
              }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: '#F5F1E8' }}
              >
                <Quote className="h-8 w-8" style={{ color: '#B8763E' }} />
              </div>
              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-current" style={{ color: '#D4A574' }} />
                ))}
              </div>
              <blockquote className="text-xl mb-8" style={{ color: '#8B5E3A' }}>
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="text-lg" style={{ color: '#B8763E' }}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm" style={{ color: '#8B5E3A' }}>
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.filter(testimonial => !testimonial.featured).map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border-2 hover:shadow-lg transition-all duration-300"
              style={{ 
                borderColor: '#D4A574',
                backgroundColor: 'white'
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="text-sm" style={{ color: '#B8763E', fontWeight: '600' }}>
                    {testimonial.name}
                  </div>
                  <div className="text-xs" style={{ color: '#8B5E3A' }}>
                    {testimonial.role}
                  </div>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" style={{ color: '#D4A574' }} />
                  ))}
                </div>
              </div>
              <blockquote className="text-sm" style={{ color: '#8B5E3A' }}>
                "{testimonial.content}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Video Testimonials CTA */}
        <div className="text-center">
          <div 
            className="max-w-2xl mx-auto p-8 rounded-2xl border-2"
            style={{ 
              borderColor: '#D4A574',
              backgroundColor: 'white'
            }}
          >
            <h3 className="text-2xl mb-4" style={{ color: '#B8763E' }}>
              See Daymian in Action
            </h3>
            <p className="mb-6" style={{ color: '#8B5E3A' }}>
              Watch real users share how Daymian has transformed their daily productivity 
              and helped them achieve their goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2"
                style={{ 
                  backgroundColor: '#B8763E', 
                  borderColor: '#B8763E',
                  color: 'white'
                }}
              >
                Watch Video Stories
              </button>
              <button 
                className="px-8 py-3 rounded-full border-2 hover:shadow-lg transition-all duration-300"
                style={{ 
                  borderColor: '#B8763E',
                  color: '#B8763E',
                  backgroundColor: 'transparent'
                }}
              >
                Read More Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}