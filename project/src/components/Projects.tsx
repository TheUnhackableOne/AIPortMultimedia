import React from 'react';

const projects = [
  {
    title: 'AI Content Generator',
    description: 'A tool that uses GPT-4 to generate high-quality content for various purposes.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    tags: ['React', 'OpenAI', 'TailwindCSS']
  },
  {
    title: 'Voice Synthesis App',
    description: 'Text-to-speech application powered by ElevenLabs API.',
    image: 'https://images.unsplash.com/photo-1676299081847-8b52d3c93f04',
    tags: ['React', 'ElevenLabs', 'WebAudio']
  },
  {
    title: 'Smart Portfolio Builder',
    description: 'AI-assisted portfolio creation platform for professionals.',
    image: 'https://images.unsplash.com/photo-1675257163553-7b47b4860717',
    tags: ['React', 'AI', 'Firebase']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}