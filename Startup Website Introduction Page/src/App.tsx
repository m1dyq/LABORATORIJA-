import { useState, useEffect } from 'react';
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/Demo";
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { Blog } from "./components/Blog";
import { Security } from "./components/Security";
import { AboutUs } from "./components/AboutUs";
import { Community } from "./components/Community";
import { Support } from "./components/Support";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";
import { LoginSignup } from "./components/LoginSignup";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { PersonalInfo, PersonalInfoData } from "./components/onboarding/PersonalInfo";
import { WhyChooseDaymian } from "./components/onboarding/WhyChooseDaymian";
import { AppIntegrations } from "./components/onboarding/AppIntegrations";
import { LifeQuestions, LifeAnswers } from "./components/onboarding/LifeQuestions";
import { NotificationPreferences, NotificationSettings } from "./components/onboarding/NotificationPreferences";
import { MainApp } from "./components/MainApp";

type AppState = 
  | 'landing'
  | 'login'
  | 'welcome'
  | 'personal-info'
  | 'why-choose'
  | 'integrations'
  | 'life-questions'
  | 'notifications'
  | 'main-app';

interface UserData {
  personalInfo?: PersonalInfoData;
  choiceReason?: string;
  integrations?: string[];
  lifeAnswers?: LifeAnswers;
  notificationSettings?: NotificationSettings;
}

export default function App() {
  const [appState, setAppState] = useState<AppState>('landing');
  const [userData, setUserData] = useState<UserData>({});
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    
    setIsDarkMode(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  // Navigation functions
  const handleGetStarted = () => setAppState('login');
  const handleLoginComplete = () => setAppState('welcome');
  const handleWelcomeContinue = () => setAppState('personal-info');
  
  const handlePersonalInfoNext = (data: PersonalInfoData) => {
    setUserData(prev => ({ ...prev, personalInfo: data }));
    setAppState('why-choose');
  };

  const handleWhyChooseNext = (reason: string) => {
    setUserData(prev => ({ ...prev, choiceReason: reason }));
    setAppState('integrations');
  };

  const handleIntegrationsNext = (integrations: string[]) => {
    setUserData(prev => ({ ...prev, integrations }));
    setAppState('life-questions');
  };

  const handleLifeQuestionsNext = (answers: LifeAnswers) => {
    setUserData(prev => ({ ...prev, lifeAnswers: answers }));
    setAppState('notifications');
  };

  const handleNotificationsComplete = (settings: NotificationSettings) => {
    setUserData(prev => ({ ...prev, notificationSettings: settings }));
    setAppState('main-app');
  };

  // Render based on current state
  switch (appState) {
    case 'login':
      return <LoginSignup onComplete={handleLoginComplete} isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />;
    
    case 'welcome':
      return <WelcomeScreen onContinue={handleWelcomeContinue} isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />;
    
    case 'personal-info':
      return <PersonalInfo onNext={handlePersonalInfoNext} isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />;
    
    case 'why-choose':
      return <WhyChooseDaymian onNext={handleWhyChooseNext} isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />;
    
    case 'integrations':
      return <AppIntegrations onNext={handleIntegrationsNext} isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />;
    
    case 'life-questions':
      return <LifeQuestions onNext={handleLifeQuestionsNext} isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />;
    
    case 'notifications':
      return <NotificationPreferences onComplete={handleNotificationsComplete} isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />;
    
    case 'main-app':
      return <MainApp userInfo={userData.personalInfo} isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />;
    
    case 'landing':
    default:
      return (
        <div className="min-h-screen">
          <Navigation onGetStarted={handleGetStarted} isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
          <main style={{ paddingTop: '4rem' }} id="hero">
            <Hero onGetStarted={handleGetStarted} />
            <HowItWorks />
            <Features />
            <Testimonials />
            <Pricing onGetStarted={handleGetStarted} />
            <Blog />
            <Security />
            <AboutUs />
            <Community />
            <Support />
            <CallToAction onGetStarted={handleGetStarted} />
            <Footer />
          </main>
        </div>
      );
  }
}