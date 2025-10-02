import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight, Mail, Users, Star } from "lucide-react";

interface CallToActionProps {
  onGetStarted?: () => void;
}

export function CallToAction({ onGetStarted }: CallToActionProps) {
  return (
    <section id="cta" className="py-20" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Social Proof */}
          <div className="flex justify-center items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" style={{ color: '#B8763E' }} />
              <span className="text-sm" style={{ color: '#8B5E3A' }}>
                500+ early adopters
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" style={{ color: '#B8763E' }} />
                ))}
              </div>
              <span className="text-sm" style={{ color: '#8B5E3A' }}>
                4.9/5 beta rating
              </span>
            </div>
          </div>

          {/* Main CTA */}
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: '#B8763E' }}>
            Ready to transform
            <br />
            <span className="relative">
              your productivity?
              <div className="absolute -bottom-2 left-0 w-full h-1 rounded-full" style={{ backgroundColor: '#D4A574' }}></div>
            </span>
          </h2>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#8B5E3A' }}>
            Join thousands of professionals who are already experiencing the power of 
            intelligent daily planning. Get early access and special launch pricing.
          </p>

          {/* Email Signup */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" style={{ color: '#B8763E' }} />
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="pl-10 py-6 rounded-full border-2 text-lg"
                  style={{ 
                    borderColor: '#B8763E',
                    backgroundColor: 'white'
                  }}
                />
              </div>
              <Button 
                size="lg" 
                className="px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ 
                  backgroundColor: '#B8763E', 
                  borderColor: '#B8763E',
                  color: 'white'
                }}
                onClick={onGetStarted}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm mt-3 opacity-75" style={{ color: '#8B5E3A' }}>
              No spam, unsubscribe anytime. Launch expected Q2 2024.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { title: "Early Access", description: "Be among the first to experience Daymian" },
              { title: "Special Pricing", description: "Exclusive launch discount for early supporters" },
              { title: "Shape the Future", description: "Your feedback directly influences our roadmap" }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border-2"
                style={{ 
                  borderColor: '#D4A574',
                  backgroundColor: 'rgba(212, 165, 116, 0.1)'
                }}
              >
                <h3 className="mb-2" style={{ color: '#B8763E' }}>
                  {benefit.title}
                </h3>
                <p className="text-sm" style={{ color: '#8B5E3A' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}