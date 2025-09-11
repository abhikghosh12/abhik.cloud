import React from 'react';

const GalleryPage: React.FC = () => {
  const galleryItems = [
    {
      title: 'Cloud Architecture Workshop',
      description: 'Leading a workshop on modern cloud architecture patterns',
      image: '/api/placeholder/400/300',
      category: 'Events'
    },
    {
      title: 'AI/ML Conference Presentation',
      description: 'Presenting multi-agent AI systems at tech conference',
      image: '/api/placeholder/400/300',
      category: 'Speaking'
    },
    {
      title: 'DevSecOps Pipeline Demo',
      description: 'Demonstrating automated security integration',
      image: '/api/placeholder/400/300',
      category: 'Technical'
    },
    {
      title: 'Team Collaboration',
      description: 'Working with cross-functional teams on cloud migration',
      image: '/api/placeholder/400/300',
      category: 'Teamwork'
    },
    {
      title: 'Kubernetes Training',
      description: 'Training session on Kubernetes best practices',
      image: '/api/placeholder/400/300',
      category: 'Training'
    },
    {
      title: 'Innovation Lab',
      description: 'Experimenting with new cloud technologies',
      image: '/api/placeholder/400/300',
      category: 'Innovation'
    },
    {
      title: 'Client Presentation',
      description: 'Presenting cloud transformation strategy to clients',
      image: '/api/placeholder/400/300',
      category: 'Client Work'
    },
    {
      title: 'Certification Achievement',
      description: 'Receiving latest cloud certification',
      image: '/api/placeholder/400/300',
      category: 'Achievements'
    },
    {
      title: 'Open Source Contribution',
      description: 'Contributing to open source cloud projects',
      image: '/api/placeholder/400/300',
      category: 'Open Source'
    }
  ];

  const categories = ['All', 'Events', 'Speaking', 'Technical', 'Teamwork', 'Training', 'Innovation', 'Client Work', 'Achievements', 'Open Source'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <div className="container py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h1>
          <p className="text-lg text-gray-600">A visual journey through my professional experiences</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#E91E63] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-[#E91E63] rounded-full text-xs">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10"
              >
                ×
              </button>
              
              <img 
                src={filteredItems[selectedImage].image} 
                alt={filteredItems[selectedImage].title}
                className="max-w-full max-h-full object-contain"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{filteredItems[selectedImage].title}</h3>
                <p className="text-sm opacity-90">{filteredItems[selectedImage].description}</p>
              </div>
              
              {/* Navigation Arrows */}
              {selectedImage > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage - 1);
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-300"
                >
                  ‹
                </button>
              )}
              
              {selectedImage < filteredItems.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage + 1);
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-300"
                >
                  ›
                </button>
              )}
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-[#E91E63] mb-2">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#E91E63] mb-2">15+</div>
            <div className="text-gray-600">Certifications</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#E91E63] mb-2">100+</div>
            <div className="text-gray-600">Clients Served</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#E91E63] mb-2">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;