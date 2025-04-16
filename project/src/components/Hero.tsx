import React, { useState } from 'react';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [customText, setCustomText] = useState('');
  const [isInputVisible, setIsInputVisible] = useState(false);

  const defaultIntroduction = `Hello and welcome to my portfolio! My name is Niranjan and I am from VIT-AP University, and I'm an AI enthusiast and multimedia developer. With expertise in building dynamic websites and leveraging AI technologies, I create innovative projects that blend creativity with cutting-edge tech. Feel free to explore my work and reach out for collaboration. Thanks for visiting!`;

  const playIntroduction = () => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const textToSpeak = customText || defaultIntroduction;

      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      
      // Configure voice settings
      utterance.rate = 0.9; // Slightly slower for clarity
      utterance.pitch = 1;
      utterance.volume = 1;

      // Get available voices and select a good one
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(voice => 
        voice.name.includes('Daniel') || // Chrome
        voice.name.includes('Alex') ||   // Safari
        voice.name.includes('Microsoft David') // Edge
      );
      
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      // Handle speech events
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  const stopIntroduction = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,180,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            AI-Powered
          </span>
          <br />
          Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Showcasing the future of web development with AI-generated content and multimedia experiences.
        </p>
        
        {/* Text Input Area */}
        <div className={`transition-all duration-300 mb-8 ${isInputVisible ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          <textarea
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            placeholder="Enter your text here to be spoken..."
            className="w-full max-w-2xl mx-auto px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows={4}
          />
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            View Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <button
            onClick={() => setIsInputVisible(!isInputVisible)}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
          >
            {isInputVisible ? 'Hide Text Input' : 'Show Text Input'}
          </button>
          <button
            onClick={isPlaying ? stopIntroduction : playIntroduction}
            className="inline-flex items-center px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
            aria-label={isPlaying ? "Stop speaking" : "Start speaking"}
          >
            {isPlaying ? (
              <>
                Stop Speaking
                <VolumeX className="ml-2 h-5 w-5" />
              </>
            ) : (
              <>
                Speak Introduction
                <Volume2 className="ml-2 h-5 w-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}