function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-sky-400">
          Varun J.
        </h1>

        <div className="flex gap-6 text-white">
          <a href="#home" className="hover:text-sky-400">
            Home
          </a>

          <a href="#about" className="hover:text-sky-400">
            About
          </a>

          <a href="#skills" className="hover:text-sky-400">
            Skills
          </a>

          <a href="#projects" className="hover:text-sky-400">
            Projects
          </a>

          <a href="#resume" className="hover:text-sky-400">
            Resume
          </a>

          <a href="#contact" className="hover:text-sky-400">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;