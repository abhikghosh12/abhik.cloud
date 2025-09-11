export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Multi-Agent AI Models: The Next Game Changer",
      excerpt: "Introduction Multi-agent AI models represent a significant leap forward in artificial intelligence, moving beyond single-model systems to...",
      author: "Abhik Ghosh",
      date: "Aug 9, 2024",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center",
      category: "AI/ML"
    },
    {
      id: 2,
      title: "Cloud Security Best Practices for 2024",
      excerpt: "As organizations continue their digital transformation journey, cloud security remains a top priority. Here are the essential practices...",
      author: "Abhik Ghosh",
      date: "Jul 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop&crop=center",
      category: "Cloud Security"
    },
    {
      id: 3,
      title: "DevSecOps: Integrating Security into CI/CD Pipelines",
      excerpt: "Learn how to seamlessly integrate security practices into your development workflow without compromising speed or efficiency...",
      author: "Abhik Ghosh",
      date: "Jun 28, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&crop=center",
      category: "DevSecOps"
    }
  ];

  return (
    <section id="blog" className="section bg-white/5 backdrop-blur-sm">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-white mb-6">Latest Insights</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore my thoughts on cloud architecture, AI/ML, and the latest trends in technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="card group hover:scale-105 transition-all duration-300">
              {/* Blog Post Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">📝</div>
                    <p className="text-sm opacity-80">Blog Post Image</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Blog Post Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Author and Meta Info */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AG</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{post.author}</p>
                      <p className="text-gray-500 text-xs">{post.date}</p>
                    </div>
                  </div>
                  <span className="text-gray-500 text-xs">{post.readTime}</span>
                </div>

                {/* Read More Button */}
                <div className="pt-2">
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-2xl text-white">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
}
