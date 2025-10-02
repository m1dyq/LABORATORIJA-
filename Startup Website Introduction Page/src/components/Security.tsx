import { ImageWithFallback } from './figma/ImageWithFallback';
import { Shield, Lock, Eye, Server, Key, FileCheck, Globe, CheckCircle } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All your personal data is encrypted using AES-256 encryption both in transit and at rest, ensuring only you can access your information."
  },
  {
    icon: Server,
    title: "Local Data Storage",
    description: "Choose to store your sensitive data locally on your device, giving you complete control over your personal information."
  },
  {
    icon: Eye,
    title: "Privacy by Design", 
    description: "We collect only the minimal data necessary to provide our service and never sell your personal information to third parties."
  },
  {
    icon: Key,
    title: "Zero-Knowledge Architecture",
    description: "Our AI processes your data without storing or accessing your raw personal information on our servers."
  },
  {
    icon: FileCheck,
    title: "Regular Security Audits",
    description: "Independent security firms regularly audit our systems to ensure the highest standards of data protection."
  },
  {
    icon: Globe,
    title: "GDPR & CCPA Compliant",
    description: "Full compliance with international privacy regulations including GDPR, CCPA, and other data protection laws."
  }
];

const certifications = [
  { name: "SOC 2 Type II", status: "Certified" },
  { name: "ISO 27001", status: "Certified" },
  { name: "GDPR", status: "Compliant" },
  { name: "CCPA", status: "Compliant" },
  { name: "HIPAA", status: "Ready" },
  { name: "PCI DSS", status: "Compliant" }
];

export function Security() {
  return (
    <section id="security" className="py-20" style={{ backgroundColor: 'white' }}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ color: '#B8763E' }}>
            Your Privacy is
            <span className="relative ml-3">
              Protected
              <div className="absolute -bottom-2 left-0 w-full h-1 rounded-full" style={{ backgroundColor: '#D4A574' }}></div>
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#8B5E3A' }}>
            We understand that your personal data is precious. That's why we've built Daymian 
            with security and privacy as our top priorities, not afterthoughts.
          </p>
        </div>

        {/* Hero Image & Key Message */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl mb-6" style={{ color: '#B8763E' }}>
              Security You Can Trust
            </h3>
            <p className="mb-6" style={{ color: '#8B5E3A' }}>
              Daymian employs enterprise-grade security measures to protect your personal 
              information. Our commitment to privacy means your data stays yours, always.
            </p>
            <div className="space-y-4">
              {[
                "Military-grade encryption for all data",
                "No personal data sold to advertisers",
                "Optional local data storage",
                "Transparent privacy practices",
                "Regular third-party security audits"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" style={{ color: '#B8763E' }} />
                  <span style={{ color: '#8B5E3A' }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1603985529862-9e12198c9a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwcHJpdmFjeSUyMHByb3RlY3Rpb258ZW58MXx8fHwxNzU4MDMxNjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Cybersecurity protection"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Security Features Grid */}
        <div className="mb-16">
          <h3 className="text-2xl text-center mb-8" style={{ color: '#B8763E' }}>
            How We Protect Your Data
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border-2 hover:shadow-lg transition-all duration-300"
                style={{ 
                  borderColor: '#F5F1E8',
                  backgroundColor: '#FEFCF9'
                }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#F5F1E8' }}
                >
                  <feature.icon className="h-6 w-6" style={{ color: '#B8763E' }} />
                </div>
                <h3 className="text-lg mb-3" style={{ color: '#B8763E' }}>
                  {feature.title}
                </h3>
                <p className="text-sm" style={{ color: '#8B5E3A' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl text-center mb-8" style={{ color: '#B8763E' }}>
            Security Certifications & Compliance
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="text-center p-4 rounded-xl border-2"
                style={{ 
                  borderColor: '#F5F1E8',
                  backgroundColor: '#FEFCF9'
                }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: '#F5F1E8' }}
                >
                  <Shield className="h-6 w-6" style={{ color: '#B8763E' }} />
                </div>
                <div className="text-sm mb-1" style={{ color: '#B8763E', fontWeight: '600' }}>
                  {cert.name}
                </div>
                <div 
                  className="inline-block px-2 py-1 rounded-full text-xs"
                  style={{ 
                    backgroundColor: '#F5F1E8',
                    color: '#8B5E3A'
                  }}
                >
                  {cert.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Controls */}
        <div 
          className="max-w-4xl mx-auto p-8 rounded-2xl border-2 mb-16"
          style={{ 
            borderColor: '#D4A574',
            backgroundColor: '#F5F1E8'
          }}
        >
          <h3 className="text-2xl text-center mb-6" style={{ color: '#B8763E' }}>
            You Control Your Data
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Data Portability",
                description: "Export all your data in standard formats anytime you want."
              },
              {
                title: "Deletion Rights", 
                description: "Permanently delete your account and all associated data with one click."
              },
              {
                title: "Access Control",
                description: "See exactly what data we have and how it's being used in your account."
              }
            ].map((control, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'white' }}
                >
                  <CheckCircle className="h-8 w-8" style={{ color: '#B8763E' }} />
                </div>
                <h4 className="mb-2" style={{ color: '#B8763E' }}>
                  {control.title}
                </h4>
                <p className="text-sm" style={{ color: '#8B5E3A' }}>
                  {control.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Transparency */}
        <div className="text-center">
          <div 
            className="max-w-2xl mx-auto p-8 rounded-2xl border-2"
            style={{ 
              borderColor: '#D4A574',
              backgroundColor: 'white'
            }}
          >
            <h3 className="text-2xl mb-4" style={{ color: '#B8763E' }}>
              Questions About Security?
            </h3>
            <p className="mb-6" style={{ color: '#8B5E3A' }}>
              We believe in complete transparency about our security practices. 
              If you have any questions about how we protect your data, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ 
                  backgroundColor: '#B8763E', 
                  borderColor: '#B8763E',
                  color: 'white'
                }}
              >
                Read Privacy Policy
              </button>
              <button 
                className="px-8 py-3 rounded-full border-2 hover:shadow-lg transition-all duration-300"
                style={{ 
                  borderColor: '#B8763E',
                  color: '#B8763E',
                  backgroundColor: 'transparent'
                }}
              >
                Contact Security Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}