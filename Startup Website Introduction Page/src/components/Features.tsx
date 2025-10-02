import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Brain, 
  Clock, 
  Target, 
  Zap, 
  BarChart3, 
  Shield, 
  Shirt, 
  Calendar, 
  Bell, 
  Lightbulb, 
  TrendingUp, 
  RefreshCw, 
  Settings, 
  Sparkles, 
  Heart, 
  MessageCircle, 
  UtensilsCrossed, 
  RotateCcw 
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Planning",
    description: "Smart algorithms learn your patterns and suggest optimal scheduling for maximum productivity.",
    image: "https://images.unsplash.com/photo-1553034710-47f9e03ff808?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aXZpdHklMjBjYWxlbmRhciUyMHBsYW5uaW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1NzU3NTgxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Clock,
    title: "Time Optimization",
    description: "Automatically find time blocks for your priorities and eliminate scheduling conflicts.",
    image: "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBvcmdhbml6YXRpb258ZW58MXx8fHwxNzU3NTc1ODIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description: "Set meaningful goals and track progress with intelligent insights and gentle accountability.",
    image: "https://images.unsplash.com/photo-1622993361017-180360aea82c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWlseSUyMHBsYW5uaW5nJTIwbm90ZWJvb2t8ZW58MXx8fHwxNzU3NTc1ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const additionalFeatures = [
  {
    icon: Shirt,
    title: "Intelligent Outfit Prediction",
    description: "AI suggests appropriate outfits based on your schedule, weather, and personal style preferences."
  },
  {
    icon: Calendar,
    title: "Dynamic Time Planning",
    description: "Flexible scheduling that adapts in real-time to changes and unexpected events throughout your day."
  },
  {
    icon: Bell,
    title: "Personalized Reminders",
    description: "Smart notifications tailored to your habits, location, and optimal timing for maximum effectiveness."
  },
  {
    icon: Lightbulb,
    title: "AI-Driven Daily Plan",
    description: "Intelligent daily schedules that balance productivity, wellness, and personal priorities seamlessly."
  },
  {
    icon: BarChart3,
    title: "Productivity Analysis",
    description: "Deep insights into your work patterns, energy levels, and performance trends over time."
  },
  {
    icon: TrendingUp,
    title: "Long-Term Goal Tracking",
    description: "Break down ambitious goals into manageable steps with progress tracking and milestone celebrations."
  },
  {
    icon: Settings,
    title: "Integration with Other Applications",
    description: "Seamlessly connect with your favorite apps and tools for a unified productivity ecosystem."
  },
  {
    icon: Sparkles,
    title: "Suggestions for Day Optimization",
    description: "Proactive recommendations to improve your schedule, reduce stress, and maximize satisfaction."
  },
  {
    icon: Heart,
    title: "Relaxation and Mental Health",
    description: "Built-in wellness features including meditation reminders, stress monitoring, and recovery time."
  },
  {
    icon: MessageCircle,
    title: "Interactive Dialogue and Feedback",
    description: "Natural conversation interface that learns from your feedback to provide better assistance."
  },
  {
    icon: UtensilsCrossed,
    title: "Meal Recommendations",
    description: "Nutrition-conscious meal suggestions that fit your schedule, dietary preferences, and health goals."
  },
  {
    icon: RotateCcw,
    title: "Schedule Refresh According to New Priorities",
    description: "Instantly reorganize your day when priorities change, maintaining balance and commitments."
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1686563636216-02d5c3674816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&h=1080"
          alt="Modern office organization background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-orange-600 dark:text-orange-400">
            Everything you need to
            <br />
            <span className="relative">
              master your day
              <div className="absolute -bottom-2 left-0 w-full h-1 rounded-full bg-orange-400 dark:bg-orange-500"></div>
            </span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-orange-900 dark:text-orange-200">
            Daymian combines the best of AI technology with thoughtful design to help you 
            achieve more while maintaining balance and well-being.
          </p>
        </div>

        {/* Main Features with Images */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-orange-200 dark:border-gray-700"
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <ImageWithFallback
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-orange-100 dark:bg-orange-900">
                <feature.icon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl mb-3 text-orange-600 dark:text-orange-400">
                {feature.title}
              </h3>
              <p className="text-orange-900 dark:text-orange-200">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="mb-8">
          <h3 className="text-2xl text-center mb-8 text-orange-600 dark:text-orange-400">
            Complete Feature Suite
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border-2 hover:shadow-lg transition-all duration-300 border-orange-200 dark:border-gray-700 bg-orange-50/50 dark:bg-gray-800/50"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-orange-100 dark:bg-orange-900">
                  <feature.icon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-lg mb-2 text-orange-600 dark:text-orange-400">
                  {feature.title}
                </h3>
                <p className="text-sm text-orange-900 dark:text-orange-200">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Benefits */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-2xl border-2 border-orange-300 dark:border-orange-600 bg-orange-50 dark:bg-gray-800/80">
            <h3 className="text-2xl mb-4 text-orange-600 dark:text-orange-400">
              Why Choose Daymian?
            </h3>
            <p className="text-lg mb-6 text-orange-900 dark:text-orange-200">
              More than just a planner, Daymian is your intelligent life companion that adapts to your unique needs and helps you thrive in every aspect of your daily routine.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { icon: Zap, title: "Lightning Fast", description: "Instant responses and real-time updates" },
                { icon: Shield, title: "Privacy First", description: "Your data stays secure and private" },
                { icon: Brain, title: "Always Learning", description: "Gets smarter with every interaction" }
              ].map((benefit, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 bg-white dark:bg-gray-700">
                    <benefit.icon className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h4 className="mb-2 text-orange-600 dark:text-orange-400">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-orange-900 dark:text-orange-200">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}