import daymianLogo from 'figma:asset/061bef0e257818d45f962c693291dfb85a790385.png';
import { Button } from "./ui/button";
import { ArrowRight, Calendar, CheckCircle, Smile } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onGetStarted?: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-orange-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758598497485-300d809e55ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&h=1080"
          alt="Productive workspace background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-orange-300 dark:bg-orange-600"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-orange-200 dark:bg-orange-700"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-orange-300 dark:bg-orange-600"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo Section */}
        <div className="mb-8">
          <img 
            src={daymianLogo} 
            alt="Daymian Logo" 
            className="w-40 h-40 mx-auto mb-6 transition-transform duration-300 hover:scale-105"
          />
          <h1 className="text-6xl mb-6 text-orange-600 dark:text-orange-400 font-semibold">
            daymian
          </h1>
        </div>

        {/* Tagline */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl mb-6 text-orange-600 dark:text-orange-400">
            Your Personal Assistant for
            <br />
            <span className="relative">
              Daily Planning & Productivity
              <div className="absolute -bottom-2 left-0 w-full h-1 rounded-full bg-orange-400 dark:bg-orange-500"></div>
            </span>
          </h2>
          <p className="text-xl md:text-2xl opacity-80 max-w-2xl mx-auto text-orange-900 dark:text-orange-200">
            Transform your daily chaos into organized success with intelligent planning, 
            smart reminders, and productivity insights.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white"
            onClick={onGetStarted}
          >
            Join Early Access
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full border-2 hover:shadow-lg transition-all duration-300 border-orange-600 dark:border-orange-400 text-orange-600 dark:text-orange-400 bg-transparent hover:bg-orange-50 dark:hover:bg-orange-900"
          >
            Watch Demo
          </Button>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          {[
            { icon: Calendar, text: "Smart Scheduling" },
            { icon: CheckCircle, text: "Task Management" },
            { icon: Smile, text: "Mindful Planning" }
          ].map((feature, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-orange-300 dark:border-orange-600 bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200"
            >
              <feature.icon className="h-4 w-4" />
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}