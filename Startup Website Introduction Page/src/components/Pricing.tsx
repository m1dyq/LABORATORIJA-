import { Button } from "./ui/button";
import { Check, Star, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "Forever",
    description: "Perfect for individuals getting started with AI-powered planning",
    features: [
      "Up to 50 tasks per month",
      "Basic AI scheduling suggestions",
      "Mobile and web access",
      "Email support",
      "Core productivity templates"
    ],
    buttonText: "Get Started Free",
    popular: false
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    description: "Ideal for professionals who want advanced productivity features",
    features: [
      "Unlimited tasks and projects",
      "Advanced AI planning and optimization",
      "Calendar integrations (Google, Outlook)",
      "Priority support via chat",
      "Custom templates and workflows",
      "Productivity analytics and insights",
      "Team collaboration (up to 5 members)"
    ],
    buttonText: "Start Pro Trial",
    popular: true
  },
  {
    name: "Business",
    price: "$25",
    period: "per user/month",
    description: "Designed for teams and organizations that need enterprise features",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Advanced team analytics",
      "Custom integrations via API",
      "Dedicated account manager",
      "SSO and advanced security",
      "24/7 phone support",
      "Custom onboarding and training"
    ],
    buttonText: "Contact Sales",
    popular: false
  }
];

interface PricingProps {
  onGetStarted?: () => void;
}

export function Pricing({ onGetStarted }: PricingProps) {
  return (
    <section id="pricing" className="py-20 bg-orange-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-32 left-16 w-48 h-48 rounded-full bg-orange-300 dark:bg-orange-600"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 rounded-full bg-amber-300 dark:bg-amber-600"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-orange-600 dark:text-orange-400">
            Simple, Transparent
            <span className="relative ml-3">
              Pricing
              <div className="absolute -bottom-2 left-0 w-full h-1 rounded-full bg-amber-400 dark:bg-amber-300"></div>
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-orange-900 dark:text-orange-200">
            Choose the plan that fits your needs. Start free and upgrade as you grow. 
            All plans include our core AI-powered planning features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl border-2 bg-white dark:bg-gray-800 transition-colors duration-300 ${
                plan.popular ? 'transform lg:scale-105 border-orange-600 dark:border-orange-400 shadow-2xl shadow-orange-600/10 dark:shadow-orange-400/20' : 'border-amber-400 dark:border-gray-600 shadow-lg shadow-black/5 dark:shadow-black/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full flex items-center gap-2 bg-orange-600 dark:bg-orange-500 text-white">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm">Most Popular</span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl mb-4 text-orange-600 dark:text-orange-400">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-semibold text-orange-600 dark:text-orange-400">
                    {plan.price}
                  </span>
                  {plan.period !== 'Forever' && (
                    <span className="text-lg ml-2 text-orange-900 dark:text-orange-200">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-sm text-orange-900 dark:text-orange-200">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-orange-100 dark:bg-orange-900">
                        <Check className="h-3 w-3 text-orange-600 dark:text-orange-400" />
                      </div>
                      <span className="text-sm text-orange-900 dark:text-orange-200">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                className={`w-full py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 text-white' 
                    : 'border-2 border-orange-600 dark:border-orange-400 text-orange-600 dark:text-orange-400 bg-transparent hover:bg-orange-50 dark:hover:bg-orange-950'
                }`}
                variant={plan.popular ? 'default' : 'outline'}
                onClick={onGetStarted}
              >
                {plan.buttonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl text-center mb-8 text-orange-600 dark:text-orange-400">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {[
              {
                question: "Can I change plans anytime?",
                answer: "Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately and we'll prorate any billing adjustments."
              },
              {
                question: "Is there a free trial for Pro and Business plans?",
                answer: "Yes, we offer a 14-day free trial for both Pro and Business plans. No credit card required to start your trial."
              },
              {
                question: "What happens to my data if I cancel?",
                answer: "Your data remains accessible for 30 days after cancellation. You can export all your data anytime, and we'll permanently delete it after 30 days if you don't reactivate."
              },
              {
                question: "Do you offer discounts for nonprofits or students?",
                answer: "Yes! We offer 50% discounts for qualified nonprofits and educational institutions. Contact our sales team for more information."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border-2 border-amber-400 dark:border-gray-600 bg-white dark:bg-gray-800"
              >
                <h4 className="mb-3 text-orange-600 dark:text-orange-400">
                  {faq.question}
                </h4>
                <p className="text-orange-900 dark:text-orange-200">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}