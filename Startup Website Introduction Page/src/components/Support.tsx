import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { HelpCircle, MessageSquare, Book, Mail, Phone, Clock } from "lucide-react";

export function Support() {
  return (
    <section id="support" className="py-20" style={{ backgroundColor: 'white' }}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: '#B8763E' }}>
            We're Here to
            <span className="relative ml-3">
              Help
              <div className="absolute -bottom-2 left-0 w-full h-1 rounded-full" style={{ backgroundColor: '#D4A574' }}></div>
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#8B5E3A' }}>
            Get the support you need, when you need it. Our dedicated team is committed 
            to helping you make the most of Daymian.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: HelpCircle,
              title: "Help Center",
              description: "Browse our comprehensive knowledge base with tutorials, FAQs, and guides.",
              action: "Browse Articles",
              highlight: "100+ Articles"
            },
            {
              icon: MessageSquare,
              title: "Live Chat",
              description: "Get instant help from our support team during business hours.",
              action: "Start Chat",
              highlight: "Average 2min response"
            },
            {
              icon: Book,
              title: "Video Tutorials",
              description: "Step-by-step video guides to help you master every Daymian feature.",
              action: "Watch Tutorials",
              highlight: "30+ Videos"
            }
          ].map((option, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl text-center border-2 hover:shadow-lg transition-all duration-300"
              style={{ 
                borderColor: '#F5F1E8',
                backgroundColor: '#FEFCF9'
              }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: '#F5F1E8' }}
              >
                <option.icon className="h-8 w-8" style={{ color: '#B8763E' }} />
              </div>
              <h3 className="text-xl mb-4" style={{ color: '#B8763E' }}>
                {option.title}
              </h3>
              <p className="mb-4" style={{ color: '#8B5E3A' }}>
                {option.description}
              </p>
              <div 
                className="inline-block px-3 py-1 rounded-full text-sm mb-6"
                style={{ 
                  backgroundColor: '#F5F1E8',
                  color: '#8B5E3A'
                }}
              >
                {option.highlight}
              </div>
              <div>
                <Button 
                  variant="outline"
                  className="rounded-full border-2"
                  style={{ 
                    borderColor: '#B8763E',
                    color: '#B8763E',
                    backgroundColor: 'transparent'
                  }}
                >
                  {option.action}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl mb-6" style={{ color: '#B8763E' }}>
                Get in Touch
              </h3>
              <p className="mb-8" style={{ color: '#8B5E3A' }}>
                Have a specific question or need personalized help? 
                Reach out to us directly and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email Support", detail: "support@daymian.com", note: "Response within 24 hours" },
                  { icon: Phone, title: "Phone Support", detail: "+1 (555) 123-4567", note: "Mon-Fri, 9AM-6PM EST" },
                  { icon: Clock, title: "Business Hours", detail: "Monday - Friday", note: "9:00 AM - 6:00 PM EST" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#F5F1E8' }}
                    >
                      <contact.icon className="h-6 w-6" style={{ color: '#B8763E' }} />
                    </div>
                    <div>
                      <h4 className="mb-1" style={{ color: '#B8763E' }}>
                        {contact.title}
                      </h4>
                      <p className="mb-1" style={{ color: '#8B5E3A' }}>
                        {contact.detail}
                      </p>
                      <p className="text-sm opacity-75" style={{ color: '#8B5E3A' }}>
                        {contact.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div 
              className="p-8 rounded-2xl border-2"
              style={{ 
                borderColor: '#F5F1E8',
                backgroundColor: '#FEFCF9'
              }}
            >
              <h3 className="text-xl mb-6" style={{ color: '#B8763E' }}>
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#8B5E3A' }}>
                      First Name
                    </label>
                    <Input 
                      placeholder="John"
                      className="border-2"
                      style={{ borderColor: '#D4A574' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#8B5E3A' }}>
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe"
                      className="border-2"
                      style={{ borderColor: '#D4A574' }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#8B5E3A' }}>
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="john@example.com"
                    className="border-2"
                    style={{ borderColor: '#D4A574' }}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#8B5E3A' }}>
                    Subject
                  </label>
                  <Input 
                    placeholder="How can we help you?"
                    className="border-2"
                    style={{ borderColor: '#D4A574' }}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#8B5E3A' }}>
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us more about your question or feedback..."
                    rows={5}
                    className="border-2"
                    style={{ borderColor: '#D4A574' }}
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ 
                    backgroundColor: '#B8763E', 
                    borderColor: '#B8763E',
                    color: 'white'
                  }}
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}