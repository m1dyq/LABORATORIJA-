import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Calendar, MapPin, Briefcase, User, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface PersonalInfoProps {
  onNext: (data: PersonalInfoData) => void;
}

export interface PersonalInfoData {
  name: string;
  dateOfBirth: string;
  occupation: string;
  country: string;
  timeZone: string;
}

const countries = [
  'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Australia', 
  'Japan', 'Brazil', 'India', 'Mexico', 'Spain', 'Italy', 'Netherlands', 'Sweden'
];

const timeZones = [
  'UTC-8 (PST)', 'UTC-5 (EST)', 'UTC+0 (GMT)', 'UTC+1 (CET)', 
  'UTC+9 (JST)', 'UTC+10 (AEST)', 'UTC+5:30 (IST)'
];

export function PersonalInfo({ onNext }: PersonalInfoProps) {
  const [formData, setFormData] = useState<PersonalInfoData>({
    name: '',
    dateOfBirth: '',
    occupation: '',
    country: '',
    timeZone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  const isValid = formData.name && formData.dateOfBirth && formData.occupation && formData.country && formData.timeZone;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h-8 w-8 text-orange-600 dark:text-orange-400" />
            </div>
          </motion.div>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Tell me about yourself
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Help Daymian understand you better so I can provide personalized assistance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Full Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="What should I call you?"
                  required
                  className="text-lg py-3"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dob" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Date of Birth
                </Label>
                <Input
                  id="dob"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                  required
                  className="text-lg py-3"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="occupation" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  Occupation
                </Label>
                <Input
                  id="occupation"
                  value={formData.occupation}
                  onChange={(e) => setFormData(prev => ({ ...prev, occupation: e.target.value }))}
                  placeholder="What do you do for work?"
                  required
                  className="text-lg py-3"
                />
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Country
                </Label>
                <Select 
                  value={formData.country} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))}
                >
                  <SelectTrigger className="text-lg py-3">
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Time Zone
                </Label>
                <Select 
                  value={formData.timeZone} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, timeZone: value }))}
                >
                  <SelectTrigger className="text-lg py-3">
                    <SelectValue placeholder="Select your time zone" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeZones.map((tz) => (
                      <SelectItem key={tz} value={tz}>
                        {tz}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                disabled={!isValid}
                className="w-full py-3 text-lg bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 disabled:opacity-50 transition-all duration-300"
              >
                Continue
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hidden md:block"
          >
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&h=400"
                alt="Person planning their day"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}