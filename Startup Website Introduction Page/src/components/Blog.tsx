import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from "./ui/button";
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Lightbulb, Users } from "lucide-react";

const blogPosts = [
  {
    title: "10 Science-Backed Productivity Techniques That Actually Work",
    excerpt: "Discover research-proven methods to boost your productivity and achieve more while working less.",
    category: "Productivity",
    readTime: "5 min read",
    date: "Dec 15, 2024",
    image: "https://images.unsplash.com/photo-1586364800735-75db99e7185b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aXZpdHklMjBibG9nJTIwd3JpdGluZ3xlbnwxfHx8fDE3NTgwMzE2MDh8MA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
    featured: true
  },
  {
    title: "How AI is Revolutionizing Personal Planning",
    excerpt: "Learn how artificial intelligence is transforming the way we plan our days and achieve our goals.",
    category: "AI & Technology",
    readTime: "7 min read", 
    date: "Dec 12, 2024",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=225"
  },
  {
    title: "The Psychology of Habit Formation: Building Better Routines",
    excerpt: "Understanding the science behind habits can help you create lasting positive changes in your daily routine.",
    category: "Psychology",
    readTime: "6 min read",
    date: "Dec 10, 2024", 
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=225"
  },
  {
    title: "Work-Life Balance in the Digital Age",
    excerpt: "Strategies for maintaining healthy boundaries and avoiding burnout in our always-connected world.",
    category: "Wellness",
    readTime: "4 min read",
    date: "Dec 8, 2024",
    image: "https://images.unsplash.com/photo-1573164713712-03790a178651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=225"
  },
  {
    title: "Goal Setting That Actually Leads to Achievement", 
    excerpt: "Why most goal-setting methods fail and how to create goals that you'll actually accomplish.",
    category: "Goal Setting",
    readTime: "8 min read",
    date: "Dec 5, 2024",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=225"
  },
  {
    title: "Time Blocking: The Ultimate Guide to Focused Work",
    excerpt: "Master the art of time blocking to eliminate distractions and maximize your productivity.",
    category: "Time Management",
    readTime: "6 min read",
    date: "Dec 3, 2024",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=225"
  }
];

const categories = [
  { name: "All Posts", icon: BookOpen, count: 24 },
  { name: "Productivity", icon: TrendingUp, count: 12 },
  { name: "AI & Technology", icon: Lightbulb, count: 6 },
  { name: "Wellness", icon: Users, count: 6 }
];

export function Blog() {
  return (
    <section id="blog" className="py-20" style={{ backgroundColor: 'white' }}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: '#B8763E' }}>
            Productivity
            <span className="relative ml-3">
              Insights
              <div className="absolute -bottom-2 left-0 w-full h-1 rounded-full" style={{ backgroundColor: '#D4A574' }}></div>
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#8B5E3A' }}>
            Expert insights, practical tips, and the latest research on productivity, 
            AI-powered planning, and achieving your goals without the overwhelm.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 hover:shadow-lg transition-all duration-300"
              style={{ 
                borderColor: index === 0 ? '#B8763E' : '#D4A574',
                backgroundColor: index === 0 ? '#B8763E' : 'transparent',
                color: index === 0 ? 'white' : '#B8763E'
              }}
            >
              <category.icon className="h-4 w-4" />
              <span>{category.name}</span>
              <span 
                className="px-2 py-1 rounded-full text-xs"
                style={{ 
                  backgroundColor: index === 0 ? 'rgba(255,255,255,0.2)' : '#F5F1E8',
                  color: index === 0 ? 'white' : '#8B5E3A'
                }}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <div 
              key={index}
              className="grid lg:grid-cols-2 gap-8 items-center p-8 rounded-2xl border-2"
              style={{ 
                borderColor: '#D4A574',
                backgroundColor: '#F5F1E8'
              }}
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span 
                    className="px-3 py-1 rounded-full text-sm"
                    style={{ 
                      backgroundColor: '#B8763E',
                      color: 'white'
                    }}
                  >
                    Featured
                  </span>
                  <span 
                    className="px-3 py-1 rounded-full text-sm"
                    style={{ 
                      backgroundColor: 'white',
                      color: '#B8763E'
                    }}
                  >
                    {post.category}
                  </span>
                </div>
                <h3 className="text-2xl mb-4" style={{ color: '#B8763E' }}>
                  {post.title}
                </h3>
                <p className="mb-6" style={{ color: '#8B5E3A' }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-6 mb-6 text-sm" style={{ color: '#8B5E3A' }}>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Button 
                  className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ 
                    backgroundColor: '#B8763E', 
                    borderColor: '#B8763E',
                    color: 'white'
                  }}
                >
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.filter(post => !post.featured).slice(0, 3).map((post, index) => (
            <article 
              key={index}
              className="group cursor-pointer rounded-2xl overflow-hidden border-2 hover:shadow-xl transition-all duration-300"
              style={{ 
                borderColor: '#F5F1E8',
                backgroundColor: '#FEFCF9'
              }}
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div 
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm"
                  style={{ 
                    backgroundColor: 'rgba(184, 118, 62, 0.9)',
                    color: 'white'
                  }}
                >
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg mb-3 group-hover:opacity-75 transition-opacity" style={{ color: '#B8763E' }}>
                  {post.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: '#8B5E3A' }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs" style={{ color: '#8B5E3A' }}>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="text-center">
          <div 
            className="max-w-2xl mx-auto p-8 rounded-2xl border-2"
            style={{ 
              borderColor: '#D4A574',
              backgroundColor: '#F5F1E8'
            }}
          >
            <h3 className="text-2xl mb-4" style={{ color: '#B8763E' }}>
              Stay Updated
            </h3>
            <p className="mb-6" style={{ color: '#8B5E3A' }}>
              Get weekly productivity insights, feature updates, and exclusive content 
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border-2 focus:outline-none focus:ring-2"
                style={{ 
                  borderColor: '#D4A574',
                  backgroundColor: 'white'
                }}
              />
              <Button 
                className="px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ 
                  backgroundColor: '#B8763E', 
                  borderColor: '#B8763E',
                  color: 'white'
                }}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}