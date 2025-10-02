import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from "./ui/button";
import { Play, MessageCircle, Calendar, Brain, Clock, Target, Zap, CheckCircle, ArrowRight } from "lucide-react";

const assistantFeatures = [
  {
    icon: MessageCircle,
    title: "Natural Conversation",
    description: "Talk to Daymian like you would to a personal assistant"
  },
  {
    icon: Brain,
    title: "AI Understanding",
    description: "Advanced AI that learns your preferences and habits"
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "Get immediate suggestions and schedule updates"
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Every interaction moves you closer to your objectives"
  }
];

const interactionExamples = [
  {
    user: "Hey Daymian, I need to plan my week around the client presentation on Thursday",
    assistant: "I'll help you prepare! I've blocked focused time for presentation prep on Tuesday and Wednesday, and scheduled practice sessions. Would you like me to add buffer time after the presentation for follow-ups?",
    feature: "Smart context understanding"
  },
  {
    user: "I'm feeling overwhelmed with my to-do list",
    assistant: "Let me help prioritize. Based on your deadlines and energy patterns, I suggest tackling the project proposal first thing tomorrow when you're most focused. I can also schedule some breathing room between tasks.",
    feature: "Emotional intelligence"
  },
  {
    user: "Can you help me stick to my fitness goals this month?",
    assistant: "Absolutely! I've analyzed your schedule and found optimal workout windows. I'll send encouraging reminders and track your progress. Should I also suggest quick desk exercises for busy days?",
    feature: "Personalized motivation"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-orange-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-orange-300 dark:bg-orange-600"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-orange-400 dark:bg-orange-700"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-orange-600 dark:text-orange-400">
            How Daymian
            <span className="relative ml-3">
              Works
              <div className="absolute -bottom-2 left-0 w-full h-1 rounded-full bg-orange-400 dark:bg-orange-500"></div>
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-orange-900 dark:text-orange-200">
            Your AI-powered personal assistant that understands you, learns from you, 
            and helps you achieve more through natural conversation and intelligent planning.
          </p>
        </div>

        {/* Main Video Presentation */}
        <div className="mb-16">
          <div className="max-w-5xl mx-auto">
            <div 
              className="relative aspect-video rounded-2xl shadow-2xl overflow-hidden border-2 group cursor-pointer"
              style={{ borderColor: '#D4A574' }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1663153203126-08bbadc178ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZW1vbnN0cmF0aW9ufGVufDF8fHx8MTc1ODAzMTYxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="How Daymian works - AI assistant demonstration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                  <button 
                    className="w-24 h-24 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 mb-4 mx-auto"
                    style={{ backgroundColor: '#B8763E' }}
                  >
                    <Play className="h-10 w-10 text-white ml-1" />
                  </button>
                  <h3 className="text-xl mb-2">Watch How Daymian Works</h3>
                  <p className="text-sm opacity-90">See real interactions with your AI assistant</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Assistant Features */}
        <div className="mb-16">
          <h3 className="text-2xl text-center mb-8" style={{ color: '#B8763E' }}>
            Your Intelligent Assistant
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {assistantFeatures.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl border-2 hover:shadow-lg transition-all duration-300"
                style={{ 
                  borderColor: '#D4A574',
                  backgroundColor: 'white'
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: '#F5F1E8' }}
                >
                  <feature.icon className="h-8 w-8" style={{ color: '#B8763E' }} />
                </div>
                <h4 className="mb-2" style={{ color: '#B8763E' }}>
                  {feature.title}
                </h4>
                <p className="text-sm" style={{ color: '#8B5E3A' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Conversation Examples */}
        <div className="mb-16">
          <h3 className="text-2xl text-center mb-8" style={{ color: '#B8763E' }}>
            Real Conversations with Daymian
          </h3>
          <div className="max-w-4xl mx-auto space-y-8">
            {interactionExamples.map((example, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border-2"
                style={{ 
                  borderColor: '#D4A574',
                  backgroundColor: 'white'
                }}
              >
                <div className="space-y-4">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div 
                      className="max-w-xs lg:max-w-md px-4 py-3 rounded-2xl"
                      style={{ backgroundColor: '#B8763E', color: 'white' }}
                    >
                      <p className="text-sm">"{example.user}"</p>
                    </div>
                  </div>
                  
                  {/* Assistant Response */}
                  <div className="flex justify-start">
                    <div 
                      className="max-w-xs lg:max-w-md px-4 py-3 rounded-2xl border-2"
                      style={{ 
                        borderColor: '#F5F1E8',
                        backgroundColor: '#F5F1E8',
                        color: '#8B5E3A'
                      }}
                    >
                      <p className="text-sm mb-2">"{example.assistant}"</p>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3" style={{ color: '#B8763E' }} />
                        <span className="text-xs" style={{ color: '#B8763E' }}>
                          {example.feature}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Steps */}
        <div className="mb-16">
          <h3 className="text-2xl text-center mb-8" style={{ color: '#B8763E' }}>
            Getting Started is Simple
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Tell Daymian About You",
                description: "Share your goals, preferences, and daily routine through natural conversation"
              },
              {
                step: "2", 
                title: "Let AI Learn Your Patterns",
                description: "Daymian observes your habits and optimizes suggestions based on your unique style"
              },
              {
                step: "3",
                title: "Achieve More Every Day",
                description: "Get personalized plans, reminders, and insights that adapt to your changing needs"
              }
            ].map((step, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl border-2 relative"
                style={{ 
                  borderColor: '#D4A574',
                  backgroundColor: 'white'
                }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-lg"
                  style={{ backgroundColor: '#B8763E', fontWeight: '600' }}
                >
                  {step.step}
                </div>
                <h4 className="mb-3" style={{ color: '#B8763E' }}>
                  {step.title}
                </h4>
                <p className="text-sm" style={{ color: '#8B5E3A' }}>
                  {step.description}
                </p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5" style={{ backgroundColor: '#D4A574' }}>
                    <ArrowRight className="absolute -top-2 -right-1 h-5 w-5" style={{ color: '#D4A574' }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Start Your Journey CTA */}
        <div className="text-center">
          <div 
            className="max-w-2xl mx-auto p-8 rounded-2xl border-2"
            style={{ 
              borderColor: '#B8763E',
              backgroundColor: 'white'
            }}
          >
            <h3 className="text-2xl mb-4" style={{ color: '#B8763E' }}>
              Ready to Meet Your AI Assistant?
            </h3>
            <p className="mb-6" style={{ color: '#8B5E3A' }}>
              Start conversations with Daymian today. Your intelligent personal assistant 
              is ready to help you achieve more while maintaining perfect work-life balance.
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
                Start Talking to Daymian
                <MessageCircle className="ml-2 h-5 w-5" />
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
                Watch Full Demo
                <Play className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="mt-4 text-sm" style={{ color: '#8B5E3A' }}>
              Free to start • No credit card required • Available 24/7
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}