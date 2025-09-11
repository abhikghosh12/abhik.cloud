export default function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-12">
      <div className="container">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gradient mb-2">Abhik Ghosh</h3>
            <p className="text-white/60">Cloud Architect | DevSecOps Expert | AI/ML Specialist</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:abhikghosh87@gmail.com" className="text-white/60 hover:text-primary-400 transition-colors duration-200">
              <span className="sr-only">Email</span>
              📧
            </a>
            <a href="https://www.linkedin.com/in/abhik-ghosh-msc/" className="text-white/60 hover:text-primary-400 transition-colors duration-200">
              <span className="sr-only">LinkedIn</span>
              💼
            </a>
            <a href="https://github.com/abhikghosh12" className="text-white/60 hover:text-primary-400 transition-colors duration-200">
              <span className="sr-only">GitHub</span>
              💻
            </a>
          </div>
          
          <div className="border-t border-white/10 pt-6">
            <p className="text-white/60">&copy; 2025 Abhik Ghosh. All rights reserved.</p>
            <p className="mt-2 text-white/40">Built with ❤️ and lots of ☕</p>
          </div>
        </div>
      </div>
    </footer>
  );
}