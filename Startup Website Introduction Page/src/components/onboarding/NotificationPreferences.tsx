import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { ArrowRight, Bell, Shirt, UtensilsCrossed, CheckSquare, Sun, Moon, Zap } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface NotificationPreferencesProps {
  onComplete: (preferences: NotificationSettings) => void;
}

export interface NotificationSettings {
  morningOutfit: boolean;
  mealRecommendations: boolean;
  taskReminders: boolean;
  dailyMotivation: boolean;
  weatherUpdates: boolean;
  productivityTips: boolean;
  timeForBreaks: boolean;
  eveningReflection: boolean;
}

const notificationTypes = [
  {
    id: 'morningOutfit',
    icon: Shirt,
    title: 'Morning Outfit Suggestions',
    description: 'Get smart outfit recommendations based on weather, schedule, and your style',
    time: '7:00 AM',
    color: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400'
  },
  {
    id: 'mealRecommendations',
    icon: UtensilsCrossed,
    title: 'Meal Recommendations',
    description: 'Personalized meal suggestions that fit your schedule and dietary preferences',
    time: '8:00 AM, 12:00 PM, 6:00 PM',
    color: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
  },
  {
    id: 'taskReminders',
    icon: CheckSquare,
    title: 'Task Reminders',
    description: 'Gentle reminders for important tasks and deadlines throughout your day',
    time: 'As needed',
    color: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
  },
  {
    id: 'dailyMotivation',
    icon: Sun,
    title: 'Daily Motivation',
    description: 'Inspiring messages and quotes to keep you motivated and focused',
    time: '9:00 AM',
    color: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400'
  },
  {
    id: 'weatherUpdates',
    icon: Sun,
    title: 'Weather & Schedule Updates',
    description: 'Weather alerts and schedule adjustments to help you plan better',
    time: '6:30 AM',
    color: 'bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-400'
  },
  {
    id: 'productivityTips',
    icon: Zap,
    title: 'Productivity Tips',
    description: 'Personalized tips and insights to boost your efficiency',
    time: '2:00 PM',
    color: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400'
  },
  {
    id: 'timeForBreaks',
    icon: Moon,
    title: 'Break Reminders',
    description: 'Gentle nudges to take breaks and maintain work-life balance',
    time: 'Throughout the day',
    color: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400'
  },
  {
    id: 'eveningReflection',
    icon: Moon,
    title: 'Evening Reflection',
    description: 'End-of-day prompts to reflect and plan for tomorrow',
    time: '8:00 PM',
    color: 'bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400'
  }
];

export function NotificationPreferences({ onComplete }: NotificationPreferencesProps) {
  const [preferences, setPreferences] = useState<NotificationSettings>({
    morningOutfit: true,
    mealRecommendations: true,
    taskReminders: true,
    dailyMotivation: true,
    weatherUpdates: true,
    productivityTips: false,
    timeForBreaks: false,
    eveningReflection: false
  });

  const togglePreference = (key: keyof NotificationSettings) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const enabledCount = Object.values(preferences).filter(Boolean).length;

  const handleComplete = () => {
    onComplete(preferences);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="h-8 w-8 text-orange-600 dark:text-orange-400" />
            </div>
          </motion.div>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Choose Your Notifications
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Customize how and when Daymian helps you throughout the day. 
            You can always adjust these settings later in your preferences.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Notification Settings */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Summary */}
              <div className="mb-6 p-4 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <p className="text-orange-800 dark:text-orange-200">
                  <span className="font-semibold">{enabledCount}</span> notification type{enabledCount !== 1 ? 's' : ''} enabled
                </p>
              </div>

              {/* Notification Cards */}
              <div className="space-y-4 mb-8">
                {notificationTypes.map((notification, index) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <Card className="border-2 border-gray-200 dark:border-gray-700 hover:border-orange-300 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4 flex-1">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${notification.color}`}>
                              <notification.icon className="h-6 w-6" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">
                                {notification.title}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                                {notification.description}
                              </p>
                              <span className="inline-block px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                                {notification.time}
                              </span>
                            </div>
                          </div>
                          <div className="ml-4">
                            <Switch
                              checked={preferences[notification.id as keyof NotificationSettings]}
                              onCheckedChange={() => togglePreference(notification.id as keyof NotificationSettings)}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <Button
                onClick={handleComplete}
                className="w-full py-3 text-lg bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 transition-all duration-300"
              >
                Complete Setup
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          {/* Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="sticky top-8 space-y-6">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1611116831129-fa29da95bbff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=300"
                alt="Smartphone notifications and daily planning"
                className="w-full h-64 object-cover rounded-2xl shadow-xl"
              />
              
              <Card className="border-2 border-orange-200 dark:border-orange-800">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-800 dark:text-gray-100">
                    💡 Smart Timing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    Daymian learns your patterns and adjusts notification timing to match your routine and preferences.
                  </p>
                  <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex justify-between">
                      <span>Do Not Disturb:</span>
                      <span>Automatically respected</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sleep Hours:</span>
                      <span>No notifications</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Work Hours:</span>
                      <span>Professional focus</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 dark:border-green-800">
                <CardContent className="p-4">
                  <div className="text-center">
                    <span className="text-2xl mb-2 block">🎉</span>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      You're almost ready to start your journey with Daymian!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}