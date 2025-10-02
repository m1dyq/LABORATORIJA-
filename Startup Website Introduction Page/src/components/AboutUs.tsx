import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, Target, Heart, Award } from "lucide-react";

export function AboutUs() {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: 'white' }}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: '#B8763E' }}>
            About
            <span className="relative ml-3">
              Daymian
              <div className="absolute -bottom-2 left-0 w-full h-1 rounded-full" style={{ backgroundColor: '#D4A574' }}></div>
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#8B5E3A' }}>
            We believe that everyone deserves to live a productive, balanced life. 
            Daymian was born from the simple idea that technology should make daily planning 
            feel effortless, not overwhelming.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl mb-6" style={{ color: '#B8763E' }}>
              Our Story
            </h3>
            <p className="mb-4" style={{ color: '#8B5E3A' }}>
              Founded in 2024 by a team of productivity enthusiasts and AI researchers, 
              Daymian emerged from our own struggles with traditional planning tools. 
              We were tired of complex systems that required more time to manage than they saved.
            </p>
            <p className="mb-4" style={{ color: '#8B5E3A' }}>
              Our mission is simple: create an intelligent assistant that understands your 
              unique rhythm and helps you achieve your goals without the stress of 
              micro-managing every detail.
            </p>
            <p style={{ color: '#8B5E3A' }}>
              Today, we're building the future of personal productivity—one that's powered 
              by AI but centered on human well-being.
            </p>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NTc1NzU4Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Team collaboration"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Users,
              title: "Human-Centered",
              description: "Technology should adapt to you, not the other way around."
            },
            {
              icon: Target,
              title: "Purpose-Driven",
              description: "Every feature is designed to help you achieve meaningful goals."
            },
            {
              icon: Heart,
              title: "Well-Being First",
              description: "Productivity without burnout is our core principle."
            },
            {
              icon: Award,
              title: "Excellence",
              description: "We're committed to building the best planning experience possible."
            }
          ].map((value, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl text-center border-2"
              style={{ 
                borderColor: '#F5F1E8',
                backgroundColor: '#FEFCF9'
              }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#F5F1E8' }}
              >
                <value.icon className="h-8 w-8" style={{ color: '#B8763E' }} />
              </div>
              <h3 className="text-lg mb-3" style={{ color: '#B8763E' }}>
                {value.title}
              </h3>
              <p className="text-sm" style={{ color: '#8B5E3A' }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}