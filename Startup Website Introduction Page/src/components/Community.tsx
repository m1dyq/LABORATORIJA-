import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from "./ui/button";
import { MessageCircle, Users, Calendar, ArrowRight } from "lucide-react";

export function Community() {
  return (
    <section id="community" className="py-20" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: '#B8763E' }}>
            Join Our
            <span className="relative ml-3">
              Community
              <div className="absolute -bottom-2 left-0 w-full h-1 rounded-full" style={{ backgroundColor: '#D4A574' }}></div>
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#8B5E3A' }}>
            Connect with thousands of professionals who are transforming their productivity. 
            Share insights, get tips, and grow together with the Daymian community.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { number: "2,500+", label: "Active Members", icon: Users },
            { number: "150+", label: "Daily Discussions", icon: MessageCircle },
            { number: "50+", label: "Weekly Events", icon: Calendar }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl border-2"
              style={{ 
                borderColor: '#D4A574',
                backgroundColor: 'white'
              }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#F5F1E8' }}
              >
                <stat.icon className="h-8 w-8" style={{ color: '#B8763E' }} />
              </div>
              <div className="text-3xl mb-2" style={{ color: '#B8763E', fontWeight: '600' }}>
                {stat.number}
              </div>
              <p style={{ color: '#8B5E3A' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Community Highlights */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl mb-6" style={{ color: '#B8763E' }}>
              What Our Community Offers
            </h3>
            <div className="space-y-4">
              {[
                "Weekly productivity challenges and workshops",
                "Expert Q&A sessions with productivity coaches",
                "Template sharing and best practice discussions",
                "Beta testing opportunities for new features",
                "Networking with like-minded professionals",
                "24/7 peer support and motivation"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div 
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: '#B8763E' }}
                  />
                  <p style={{ color: '#8B5E3A' }}>
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1515169067868-5387ec356754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBtZWV0aW5nJTIwZGlzY3Vzc2lvbnxlbnwxfHx8fDE3NTc1NzU4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Community discussion"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Join CTA */}
        <div className="text-center">
          <div 
            className="max-w-2xl mx-auto p-8 rounded-2xl border-2"
            style={{ 
              borderColor: '#D4A574',
              backgroundColor: 'white'
            }}
          >
            <h3 className="text-2xl mb-4" style={{ color: '#B8763E' }}>
              Ready to Connect?
            </h3>
            <p className="mb-6" style={{ color: '#8B5E3A' }}>
              Join our vibrant community today and start your journey towards better productivity 
              with the support of thousands of motivated individuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ 
                  backgroundColor: '#B8763E', 
                  borderColor: '#B8763E',
                  color: 'white'
                }}
              >
                Join Discord Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="px-8 py-3 rounded-full border-2 hover:shadow-lg transition-all duration-300"
                style={{ 
                  borderColor: '#B8763E',
                  color: '#B8763E',
                  backgroundColor: 'transparent'
                }}
              >
                Browse Forum
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}