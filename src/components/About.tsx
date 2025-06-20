import React from 'react';
import { Target, Lightbulb, TrendingUp, Github, Linkedin } from 'lucide-react';
import profilePic from '../assets/casual_profile_photo.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={profilePic}
                alt="Praveen Satya R V - Profile" 
                className="w-80 h-80 rounded-full mx-auto object-cover shadow-2xl border-4 border-white"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Hello! I am Praveen Satya. 
                I am a data enthusiast who’s passionate about uncovering actionable insights that drive real business value. 
                I enjoy transforming complex data into clear, practical solutions—whether that means building AI-powered tools, automating workflows, or creating dashboards that make an impact.
              </p>
            </div>

            {/* Key Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Strategic Analysis</h3>
                <p className="text-sm text-gray-600">Turning data into actionable business strategies</p>
              </div>

              <div className="text-center p-6 bg-indigo-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-sm text-gray-600">Creative solutions for complex problems</p>
              </div>

              <div className="text-center p-6 bg-cyan-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Growth Impact</h3>
                <p className="text-sm text-gray-600">Driving measurable business outcomes</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.linkedin.com/in/praveen-satya-r-v"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn Profile
              </a>
              <a 
                href="https://github.com/praveensatyarv"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg bg-white"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;