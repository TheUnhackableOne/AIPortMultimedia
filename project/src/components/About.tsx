import React from 'react';
import { Bot, Code, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Bot className="h-6 w-6" />,
    title: 'AI Integration',
    description: 'Leveraging cutting-edge AI technologies for content generation and interaction.'
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Modern Tech Stack',
    description: 'Built with React, TailwindCSS, and other modern web technologies.'
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'Creative Design',
    description: 'Unique and engaging user experience with smooth animations and interactions.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              I'm a developer passionate about combining AI with web development to create
              innovative and engaging experiences. My work focuses on pushing the boundaries
              of what's possible with modern web technologies.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-blue-600/20 rounded-lg">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1673845529314-d196a8ebd356"
              alt="AI Developer"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}