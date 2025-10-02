import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Card, CardContent } from '../ui/card';
import { ArrowRight, Target, Clock, Brain, Heart, Zap, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface WhyChooseDaymianProps {
  onNext: (reason: string) => void;
}

const suggestedReasons = [
  {
    icon: Target,
    title: "Better Goal Achievement",
    description: "I want to reach my goals more consistently and effectively"
  },
  {
    icon: Clock,
    title: "Time Management",
    description: "I struggle with managing my time and staying organized"
  },
  {
    icon: Brain,
    title: "AI-Powered Planning",
    description: "I'm curious about how AI can improve my daily planning"
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "I want to find better balance between work and personal life"
  },
  {
    icon: Zap,
    title: "Boost Productivity",
    description: "I want to be more productive and efficient with my time"
  }
];

export function WhyChooseDaymian({ onNext }: WhyChooseDaymianProps) {
  const [selectedReason, setSelectedReason] = useState<string>('');
  const [customReason, setCustomReason] = useState<string>('');
  const [showCustom, setShowCustom] = useState(false);

  const handleSuggestedSelect = (reason: string) => {
    setSelectedReason(reason);
    setCustomReason('');
    setShowCustom(false);
  };

  const handleCustomToggle = () => {
    setShowCustom(true);
    setSelectedReason('');
  };

  const handleSubmit = () => {
    const reason = customReason || selectedReason;
    if (reason) {
      onNext(reason);
    }
  };

  const isValid = selectedReason || customReason.trim();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-orange-600 dark:text-orange-400" />
            </div>
          </motion.div>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Why did you choose Daymian?
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Understanding your motivation helps me tailor the perfect experience for you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Options */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-4">
              Choose what resonates with you:
            </h3>
            
            {suggestedReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <Card 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
                    selectedReason === reason.description 
                      ? 'border-orange-500 bg-orange-50 dark:bg-orange-950' 
                      : 'border-gray-200 dark:border-gray-700 hover:border-orange-300'
                  }`}
                  onClick={() => handleSuggestedSelect(reason.description)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        selectedReason === reason.description 
                          ? 'bg-orange-200 dark:bg-orange-800' 
                          : 'bg-gray-100 dark:bg-gray-700'
                      }`}>
                        {selectedReason === reason.description ? (
                          <CheckCircle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                        ) : (
                          <reason.icon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 dark:text-gray-100 mb-1">
                          {reason.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Custom Option */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              {!showCustom ? (
                <Button
                  variant="outline"
                  onClick={handleCustomToggle}
                  className="w-full py-3 border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-orange-400"
                >
                  <span className="text-gray-600 dark:text-gray-300">
                    Or write your own reason...
                  </span>
                </Button>
              ) : (
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Tell me in your own words:
                  </label>
                  <Textarea
                    value={customReason}
                    onChange={(e) => setCustomReason(e.target.value)}
                    placeholder="What brought you to Daymian? What are you hoping to achieve?"
                    className="min-h-[100px] text-base"
                    autoFocus
                  />
                </div>
              )}
            </motion.div>

            <Button
              onClick={handleSubmit}
              disabled={!isValid}
              className="w-full py-3 text-lg bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 disabled:opacity-50 transition-all duration-300 mt-6"
            >
              Continue
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&h=500"
                alt="Person setting goals and planning"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">Your journey to better living starts here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}