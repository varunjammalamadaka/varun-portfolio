import heroImage from "../assets/hero.illustration.jpg";

function Hero() {
  return (
    <section
  id="home"
  className="min-h-screen flex items-start justify-center px-6 pt-32"
    >
      <div className="text-center max-w-4xl">
        <h1 className="text-6xl font-bold text-white">
          Varun <span className="text-sky-400">Jammalamadaka</span>
        </h1>

        <p className="mt-6 text-xl text-sky-400">
          Finance Student | Corporate Finance | FP&A | Financial Analysis
        </p>

        <p className="mt-6 text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Aspiring finance professional with an interest in corporate finance,
          financial planning & analysis, and using data to support strategic
          business decisions.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-sky-400 text-slate-900 rounded-lg font-semibold hover:bg-sky-300 transition"
          >
            View Projects
          </a>

          <a
            href="#resume"
            className="px-6 py-3 border border-sky-400 text-sky-400 rounded-lg font-semibold hover:bg-sky-400 hover:text-slate-900 transition"
          >
            Resume
          </a>
        </div>

        {/* Hero Image */}
        <div className="mt-24 flex justify-center">
  <img
    src={heroImage}
    alt="Finance Illustration"
    className="w-full max-w-2xl h-125 object-cover rounded-2xl shadow-2xl"
  />
</div>
      </div>
    </section>
  );
}

export default Hero;