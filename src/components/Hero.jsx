function Hero() {
  return (
    <section
  id="home"
className="min-h-screen flex items-center justify-center px-6 -mt-16"    >
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-bold text-white">
         Varun <span className="text-sky-400">Jammalamadaka</span>
        </h1>

        <p className="mt-6 text-xl text-gray-300">
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
      </div>
    </section>
  );
}

export default Hero;