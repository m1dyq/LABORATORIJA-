import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ArrowRight, Heart, Users, Zap, Target, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface LifeQuestionsProps {
  onNext: (answers: LifeAnswers) => void;
}

export interface LifeAnswers {
  helpWith: string[];
  dailySatisfaction: string;
  supportToOthers: string;
  improveProductivity: string;
}

const helpOptions = [
  { id: 'time-management', label: 'Time management and scheduling', icon: Target },
  { id: 'goal-setting', label: 'Setting and achieving goals', icon: Target },
  { id: 'work-life-balance', label: 'Work-life balance', icon: Heart },
  { id: 'daily-habits', label: 'Building better daily habits', icon: Zap },
  { id: 'productivity', label: 'Increasing productivity', icon: Zap },
  { id: 'stress-management', label: 'Managing stress and overwhelm', icon: Heart },
  { id: 'health-wellness', label: 'Health and wellness routines', icon: Heart },
  { id: 'relationships', label: 'Maintaining relationships', icon: Users }
];

const satisfactionOptions = [
  { value: 'very-satisfied', label: 'Very satisfied - I love my daily routine', emoji: '😊' },
  { value: 'mostly-satisfied', label: 'Mostly satisfied with some room for improvement', emoji: '🙂' },
  { value: 'neutral', label: 'It\'s okay, but could be much better', emoji: '😐' },
  { value: 'dissatisfied', label: 'Not satisfied - I want significant changes', emoji: '😕' }
];

export function LifeQuestions({ onNext }: LifeQuestionsProps) {
  const [answers, setAnswers] = useState<LifeAnswers>({
    helpWith: [],
    dailySatisfaction: '',
    supportToOthers: '',
    improveProductivity: ''
  });

  const [currentStep, setCurrentStep] = useState(0);

  const toggleHelpOption = (optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      helpWith: prev.helpWith.includes(optionId)
        ? prev.helpWith.filter(id => id !== optionId)
        : [...prev.helpWith, optionId]
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    } else {
      onNext(answers);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0: return answers.helpWith.length > 0;
      case 1: return answers.dailySatisfaction !== '';
      case 2: return answers.supportToOthers !== '';
      case 3: return answers.improveProductivity !== '';
      default: return false;
    }
  };

  const questions = [
    {
      title: "What do you want me to help you with in life?",
      subtitle: "Select all areas where you'd like support (choose at least one)",
      icon: Target,
      content: (
        <div className="grid md:grid-cols-2 gap-3">
          {helpOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Card 
                className={`cursor-pointer transition-all duration-300 hover:shadow-md border-2 ${
                  answers.helpWith.includes(option.id)
                    ? 'border-orange-500 bg-orange-50 dark:bg-orange-950' 
                    : 'border-gray-200 dark:border-gray-700 hover:border-orange-300'
                }`}
                onClick={() => toggleHelpOption(option.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      answers.helpWith.includes(option.id)
                        ? 'bg-orange-200 dark:bg-orange-800' 
                        : 'bg-gray-100 dark:bg-gray-700'
                    }`}>
                      {answers.helpWith.includes(option.id) ? (
                        <CheckCircle className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                      ) : (
                        <option.icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      )}
                    </div>
                    <span className="text-gray-800 dark:text-gray-100 font-medium">
                      {option.label}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      title: "Are you satisfied with how you live day by day?",
      subtitle: "Your current feelings about your daily routine",
      icon: Heart,
      content: (
        <div className="space-y-3">
          {satisfactionOptions.map((option, index) => (
            <motion.div
              key={option.value}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Card 
                className={`cursor-pointer transition-all duration-300 hover:shadow-md border-2 ${
                  answers.dailySatisfaction === option.value
                    ? 'border-orange-500 bg-orange-50 dark:bg-orange-950' 
                    : 'border-gray-200 dark:border-gray-700 hover:border-orange-300'
                }`}
                onClick={() => setAnswers(prev => ({ ...prev, dailySatisfaction: option.value }))}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{option.emoji}</span>
                    <span className="text-gray-800 dark:text-gray-100 font-medium">
                      {option.label}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      title: "Are you satisfied with the support you give to others?",
      subtitle: "How you feel about your relationships and contributions",
      icon: Users,
      content: (
        <div className="space-y-3">
          {satisfactionOptions.map((option, index) => (
            <motion.div
              key={option.value}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Card 
                className={`cursor-pointer transition-all duration-300 hover:shadow-md border-2 ${
                  answers.supportToOthers === option.value
                    ? 'border-orange-500 bg-orange-50 dark:bg-orange-950' 
                    : 'border-gray-200 dark:border-gray-700 hover:border-orange-300'
                }`}
                onClick={() => setAnswers(prev => ({ ...prev, supportToOthers: option.value }))}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{option.emoji}</span>
                    <span className="text-gray-800 dark:text-gray-100 font-medium">
                      {option.label.replace('daily routine', 'support to others')}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      title: "Do you want to improve your daily productivity?",
      subtitle: "Your goals for becoming more efficient and effective",
      icon: Zap,
      content: (
        <div className="space-y-3">
          {[
            { value: 'definitely', label: 'Definitely! I want to be much more productive', emoji: '🚀' },
            { value: 'somewhat', label: 'Yes, but I want to maintain balance', emoji: '⚖️' },
            { value: 'slightly', label: 'Just small improvements would be great', emoji: '🌱' },
            { value: 'no', label: 'I\'m happy with my current productivity level', emoji: '😌' }
          ].map((option, index) => (
            <motion.div
              key={option.value}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Card 
                className={`cursor-pointer transition-all duration-300 hover:shadow-md border-2 ${
                  answers.improveProductivity === option.value
                    ? 'border-orange-500 bg-orange-50 dark:bg-orange-950' 
                    : 'border-gray-200 dark:border-gray-700 hover:border-orange-300'
                }`}
                onClick={() => setAnswers(prev => ({ ...prev, improveProductivity: option.value }))}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{option.emoji}</span>
                    <span className="text-gray-800 dark:text-gray-100 font-medium">
                      {option.label}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )
    }
  ];

  const currentQuestion = questions[currentStep];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800 p-6">
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl"
      >
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
            <span>Question {currentStep + 1} of {questions.length}</span>
            <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-orange-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Question Content */}
          <div className="lg:col-span-2">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <currentQuestion.icon className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {currentQuestion.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {currentQuestion.subtitle}
              </p>
            </div>

            <div className="mb-8">
              {currentQuestion.content}
            </div>

            <div className="flex gap-4">
              {currentStep > 0 && (
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="px-6 py-3"
                >
                  Back
                </Button>
              )}
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="flex-1 py-3 text-lg bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 disabled:opacity-50 transition-all duration-300"
              >
                {currentStep === questions.length - 1 ? 'Complete' : 'Continue'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="sticky top-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=500"
                alt="Person reflecting and planning"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  💡 These insights help me understand what matters most to you and tailor my assistance accordingly.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}