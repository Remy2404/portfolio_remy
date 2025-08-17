function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card px-6 py-3 flex items-center justify-between">
          <div className="text-white font-bold text-xl gradient-text">
            Phon Ramy
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#home"
              className="text-white hover:text-purple-300 transition-colors"
            >
              Home
            </a>
            <a
              href="#skills"
              className="text-white hover:text-purple-300 transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-white hover:text-purple-300 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-white hover:text-purple-300 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-white hover:text-purple-300 transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
