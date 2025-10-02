import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Switch } from '../ui/switch';
import { ArrowRight, Calendar, Smartphone, Activity, Clock, Mail, Music, MapPin, CheckCircle, X } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface AppIntegrationsProps {
  onNext: (integrations: string[]) => void;
}

const availableApps = [
  {
    icon: Calendar,
    name: "Google Calendar",
    description: "Sync your existing events and meetings",
    category: "Productivity",
    color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
  },
  {
    icon: Activity,
    name: "Apple Health",
    description: "Track your fitness and wellness data",
    category: "Health",
    color: "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400"
  },
  {
    icon: Activity,
    name: "Fitbit",
    description: "Monitor your activity and sleep patterns",
    category: "Health",
    color: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400"
  },
  {
    icon: Clock,
    name: "Todoist",
    description: "Import your existing tasks and projects",
    category: "Productivity",
    color: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400"
  },
  {
    icon: Mail,
    name: "Gmail",
    description: "Get smart suggestions based on your emails",
    category: "Communication",
    color: "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400"
  },
  {
    icon: Music,
    name: "Spotify",
    description: "Create the perfect atmosphere for your activities",
    category: "Entertainment",
    color: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400"
  },
  {
    icon: MapPin,
    name: "Google Maps",
    description: "Factor in travel time for your schedule",
    category: "Navigation",
    color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
  },
  {
    icon: Smartphone,
    name: "Slack",
    description: "Balance work communication with personal time",
    category: "Communication",
    color: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400"
  }
];

export function AppIntegrations({ onNext }: AppIntegrationsProps) {
  const [selectedApps, setSelectedApps] = useState<string[]>([]);

  const toggleApp = (appName: string) => {
    setSelectedApps(prev => 
      prev.includes(appName) 
        ? prev.filter(name => name !== appName)
        : [...prev, appName]
    );
  };

  const handleSubmit = () => {
    onNext(selectedApps);
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
              <Smartphone className="h-8 w-8 text-orange-600 dark:text-orange-400" />
            </div>
          </motion.div>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Connect Your Apps
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Connect your favorite apps so Daymian can provide more personalized and helpful assistance. 
            You can always change these settings later.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* App Grid */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid md:grid-cols-2 gap-4 mb-8"
            >
              {availableApps.map((app, index) => (
                <motion.div
                  key={app.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <Card 
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
                      selectedApps.includes(app.name) 
                        ? 'border-orange-500 bg-orange-50 dark:bg-orange-950' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-orange-300'
                    }`}
                    onClick={() => toggleApp(app.name)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${app.color}`}>
                            <app.icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-800 dark:text-gray-100 mb-1">
                              {app.name}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                              {app.description}
                            </p>
                            <span className="inline-block px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                              {app.category}
                            </span>
                          </div>
                        </div>
                        <div className="ml-3">
                          {selectedApps.includes(app.name) ? (
                            <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center">
                              <CheckCircle className="h-4 w-4 text-white" />
                            </div>
                          ) : (
                            <div className="w-6 h-6 border-2 border-gray-300 dark:border-gray-600 rounded-full"></div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Selection Summary */}
            {selectedApps.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                <div className="bg-orange-100 dark:bg-orange-900 rounded-lg p-4">
                  <h4 className="font-medium text-orange-800 dark:text-orange-200 mb-2">
                    Selected Apps ({selectedApps.length})
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedApps.map((appName) => (
                      <span 
                        key={appName}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300"
                      >
                        {appName}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleApp(appName);
                          }}
                          className="ml-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full p-0.5"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            <div className="flex gap-4">
              <Button
                onClick={handleSubmit}
                className="flex-1 py-3 text-lg bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 transition-all duration-300"
              >
                Continue
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                onClick={() => onNext([])}
                className="px-6 py-3 text-lg"
              >
                Skip for now
              </Button>
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="sticky top-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1706759755767-526cdaa02109?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=500"
                alt="Mobile apps and integrations"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
              <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-medium text-gray-800 dark:text-gray-100 mb-2">
                  🔒 Your Privacy Matters
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We only access the data you explicitly allow and use it solely to improve your Daymian experience.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}