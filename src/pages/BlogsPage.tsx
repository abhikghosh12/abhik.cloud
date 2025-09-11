import React from 'react';

const BlogsPage: React.FC = () => {
  const blogs = [
    {
      title: 'Multi-Agent AI Models: The Next Game Changer',
      excerpt: 'Introduction Multi-agent AI models represent a significant leap forward in artificial intelligence, moving beyond single-model systems to...',
      author: 'Abhik Ghosh',
      date: 'Aug 9, 2024',
      readTime: '3 min read',
      image: '/api/placeholder/400/250',
      category: 'AI/ML'
    },
    {
      title: 'Cloud Migration Strategies for Enterprise',
      excerpt: 'Exploring the best practices and strategies for successful cloud migration in large enterprise environments...',
      author: 'Abhik Ghosh',
      date: 'Jul 25, 2024',
      readTime: '5 min read',
      image: '/api/placeholder/400/250',
      category: 'Cloud Architecture'
    },
    {
      title: 'DevSecOps: Security in the Modern Development Pipeline',
      excerpt: 'How to integrate security practices seamlessly into your development and deployment workflows...',
      author: 'Abhik Ghosh',
      date: 'Jul 10, 2024',
      readTime: '4 min read',
      image: '/api/placeholder/400/250',
      category: 'DevSecOps'
    },
    {
      title: 'Kubernetes Best Practices for Production',
      excerpt: 'Essential practices and patterns for running Kubernetes clusters in production environments...',
      author: 'Abhik Ghosh',
      date: 'Jun 28, 2024',
      readTime: '6 min read',
      image: '/api/placeholder/400/250',
      category: 'Kubernetes'
    },
    {
      title: 'FinOps: Optimizing Cloud Costs',
      excerpt: 'Understanding and implementing financial operations for cloud cost optimization and management...',
      author: 'Abhik Ghosh',
      date: 'Jun 15, 2024',
      readTime: '4 min read',
      image: '/api/placeholder/400/250',
      category: 'FinOps'
    },
    {
      title: 'The Future of Infrastructure as Code',
      excerpt: 'Exploring the evolution of IaC tools and practices, and what the future holds for infrastructure automation...',
      author: 'Abhik Ghosh',
      date: 'May 30, 2024',
      readTime: '5 min read',
      image: '/api/placeholder/400/250',
      category: 'Infrastructure'
    }
  ];

  const categories = ['All', 'AI/ML', 'Cloud Architecture', 'DevSecOps', 'Kubernetes', 'FinOps', 'Infrastructure'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredBlogs = selectedCategory === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <div className="container py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Posts</h1>
          <p className="text-lg text-gray-600">Insights on Cloud Architecture, AI/ML, and Modern Development</p>
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

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E91E63] focus:border-transparent"
          />
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredBlogs.map((blog, index) => (
            <article key={index} className="card card-hover">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="certificate-badge">
                    {blog.category}
                  </span>
                  <span className="text-sm text-gray-500">{blog.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#E91E63] transition-colors cursor-pointer">
                  {blog.title}
                </h2>
                
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <img 
                      src="/api/placeholder/32/32" 
                      alt={blog.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{blog.author}</span>
                  </div>
                  <span>{blog.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button className="btn-primary">
            Load More Posts
          </button>
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-r from-[#E91E63] to-[#9C27B0] rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="mb-6">Subscribe to get notified about new blog posts and updates</p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-[#E91E63] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;