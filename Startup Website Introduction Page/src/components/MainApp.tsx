import { useState } from 'react';
import { motion } from 'motion/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { 
  MessageCircle, 
  Calendar, 
  Settings, 
  Send, 
  Mic, 
  Paperclip,
  MoreVertical,
  Plus,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon
} from 'lucide-react';
import { DarkModeToggle } from './DarkModeToggle';
import daymianLogo from 'figma:asset/061bef0e257818d45f962c693291dfb85a790385.png';

interface MainAppProps {
  userInfo: any;
}

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'daymian';
  timestamp: Date;
  type?: 'text' | 'suggestion' | 'reminder';
}

interface CalendarEvent {
  id: string;
  title: string;
  time: string;
  duration: string;
  type: 'work' | 'personal' | 'health' | 'reminder';
}

const initialMessages: Message[] = [
  {
    id: '1',
    content: `Hello! I'm Daymian, your personal AI assistant. I'm here to help you organize your life, achieve your goals, and make every day better. What would you like to work on today?`,
    sender: 'daymian',
    timestamp: new Date(),
    type: 'text'
  }
];

const todayEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Morning workout',
    time: '7:00 AM',
    duration: '1 hour',
    type: 'health'
  },
  {
    id: '2',
    title: 'Team meeting',
    time: '10:00 AM',
    duration: '1.5 hours',
    type: 'work'
  },
  {
    id: '3',
    title: 'Lunch with Sarah',
    time: '12:30 PM',
    duration: '1 hour',
    type: 'personal'
  },
  {
    id: '4',
    title: 'Project deadline reminder',
    time: '4:00 PM',
    duration: '30 minutes',
    type: 'reminder'
  }
];

export function MainApp({ userInfo }: MainAppProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [activeTab, setActiveTab] = useState('chat');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarView, setCalendarView] = useState<'day' | 'week' | 'month'>('day');

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');

    // Simulate Daymian's response
    setTimeout(() => {
      const responses = [
        "That's a great question! Let me help you with that. Based on your preferences, I'd suggest...",
        "I understand what you're looking for. Here are some personalized recommendations for you:",
        "Let me check your schedule and preferences to give you the best advice.",
        "That's something I can definitely help you optimize. Here's what I recommend:",
        "Great! I've analyzed your patterns and here's what would work best for you:"
      ];

      const daymianResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: responses[Math.floor(Math.random() * responses.length)],
        sender: 'daymian',
        timestamp: new Date(),
        type: 'text'
      };

      setMessages(prev => [...prev, daymianResponse]);
    }, 1000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getEventTypeColor = (type: CalendarEvent['type']) => {
    switch (type) {
      case 'work': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'personal': return 'bg-green-100 text-green-800 border-green-200';
      case 'health': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'reminder': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={daymianLogo} 
              alt="Daymian Logo" 
              className="w-8 h-8"
            />
            <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Daymian
            </h1>
            <Badge variant="secondary" className="text-xs">
              AI Assistant
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <DarkModeToggle />
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full flex flex-col">
          {/* Tab Navigation */}
          <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="chat" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Chat
              </TabsTrigger>
              <TabsTrigger value="calendar" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Calendar
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Chat Tab */}
          <TabsContent value="chat" className="flex-1 flex flex-col m-0">
            <div className="flex-1 flex">
              {/* Chat Messages */}
              <div className="flex-1 flex flex-col">
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex gap-3 max-w-2xl ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                        <Avatar className="w-8 h-8 flex-shrink-0">
                          {message.sender === 'daymian' ? (
                            <AvatarImage src={daymianLogo} alt="Daymian" />
                          ) : (
                            <AvatarFallback className="bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400">
                              {userInfo?.name?.charAt(0) || 'U'}
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <div className={`rounded-2xl px-4 py-3 ${
                          message.sender === 'user' 
                            ? 'bg-orange-600 text-white' 
                            : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700'
                        }`}>
                          <p className="text-sm">{message.content}</p>
                          <p className={`text-xs mt-1 ${
                            message.sender === 'user' ? 'text-orange-100' : 'text-gray-500 dark:text-gray-400'
                          }`}>
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-6 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex gap-3">
                    <div className="flex-1 relative">
                      <Input
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Ask Daymian anything..."
                        className="pr-12"
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                      >
                        <Paperclip className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-10 w-10 p-0"
                    >
                      <Mic className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={sendMessage}
                      disabled={!newMessage.trim()}
                      className="h-10 w-10 p-0 bg-orange-600 hover:bg-orange-700"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Today's Schedule Sidebar */}
              <div className="w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
                    Today's Schedule
                  </h3>
                  <div className="space-y-3">
                    {todayEvents.map((event) => (
                      <Card key={event.id} className="border border-gray-200 dark:border-gray-700">
                        <CardContent className="p-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-800 dark:text-gray-100 text-sm">
                                {event.title}
                              </h4>
                              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                {event.time} • {event.duration}
                              </p>
                            </div>
                            <Badge className={`text-xs ${getEventTypeColor(event.type)}`}>
                              {event.type}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={() => setActiveTab('calendar')}
                  variant="outline" 
                  className="w-full"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  View Full Calendar
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Calendar Tab */}
          <TabsContent value="calendar" className="flex-1 m-0">
            <div className="p-6">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                    {currentDate.toLocaleDateString('en-US', { 
                      month: 'long', 
                      year: 'numeric',
                      day: calendarView === 'day' ? 'numeric' : undefined
                    })}
                  </h2>
                  <div className="flex gap-1">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 1)))}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentDate(new Date())}
                    >
                      Today
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 1)))}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger 
                      value="day" 
                      onClick={() => setCalendarView('day')}
                      className={calendarView === 'day' ? 'bg-orange-100 dark:bg-orange-900' : ''}
                    >
                      Day
                    </TabsTrigger>
                    <TabsTrigger 
                      value="week"
                      onClick={() => setCalendarView('week')}
                      className={calendarView === 'week' ? 'bg-orange-100 dark:bg-orange-900' : ''}
                    >
                      Week
                    </TabsTrigger>
                    <TabsTrigger 
                      value="month"
                      onClick={() => setCalendarView('month')}
                      className={calendarView === 'month' ? 'bg-orange-100 dark:bg-orange-900' : ''}
                    >
                      Month
                    </TabsTrigger>
                  </TabsList>
                  <Button className="bg-orange-600 hover:bg-orange-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Event
                  </Button>
                </div>
              </div>

              {/* Calendar Content */}
              <Card>
                <CardContent className="p-6">
                  {calendarView === 'day' && (
                    <div className="space-y-4">
                      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                        <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>Day view showing events for {currentDate.toLocaleDateString()}</p>
                        <p className="text-sm mt-2">Calendar integration coming soon</p>
                      </div>
                    </div>
                  )}
                  
                  {calendarView === 'week' && (
                    <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                      <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Week view for week of {currentDate.toLocaleDateString()}</p>
                      <p className="text-sm mt-2">Calendar integration coming soon</p>
                    </div>
                  )}
                  
                  {calendarView === 'month' && (
                    <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                      <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Month view for {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                      <p className="text-sm mt-2">Calendar integration coming soon</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}