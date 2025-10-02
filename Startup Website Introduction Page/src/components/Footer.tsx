import daymianLogo from 'figma:asset/061bef0e257818d45f962c693291dfb85a790385.png';
import { Twitter, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t-2" style={{ backgroundColor: 'white', borderColor: '#F5F1E8' }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Company */}
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <img 
              src={daymianLogo} 
              alt="Daymian Logo" 
              className="w-10 h-10"
            />
            <span className="text-xl" style={{ color: '#B8763E', fontWeight: '600' }}>
              daymian
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mb-6 md:mb-0">
            <a 
              href="#" 
              className="p-2 rounded-full hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: '#F5F1E8' }}
            >
              <Twitter className="h-5 w-5" style={{ color: '#B8763E' }} />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: '#F5F1E8' }}
            >
              <Linkedin className="h-5 w-5" style={{ color: '#B8763E' }} />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: '#F5F1E8' }}
            >
              <Mail className="h-5 w-5" style={{ color: '#B8763E' }} />
            </a>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:opacity-75 transition-opacity" style={{ color: '#8B5E3A' }}>
              Privacy Policy
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity" style={{ color: '#8B5E3A' }}>
              Terms of Service
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity" style={{ color: '#8B5E3A' }}>
              Contact
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-6 mt-6 text-center" style={{ borderColor: '#F5F1E8' }}>
          <p className="text-sm flex items-center justify-center gap-2" style={{ color: '#8B5E3A' }}>
            Made with <Heart className="h-4 w-4 fill-current" style={{ color: '#B8763E' }} /> by the Daymian team
            <span className="mx-2">•</span>
            © 2024 Daymian. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}