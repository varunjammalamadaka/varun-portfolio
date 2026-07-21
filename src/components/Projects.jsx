function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-800 px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-sky-400 text-center mb-6">
          Projects
        </h2>

        <p className="text-center text-gray-300 text-lg mb-12">
          A collection of finance and analytical projects that showcase my
          technical skills and problem-solving abilities.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Project 1 */}
          <div className="bg-slate-900 rounded-xl p-8 shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-white mb-4">
              Financial Statement Analysis
            </h3>

            <p className="text-gray-300 mb-6">
              Analyze a public company's financial statements and evaluate
              profitability, liquidity, leverage, and operating performance.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="bg-sky-400 text-slate-900 px-3 py-1 rounded-full text-sm">
                Excel
              </span>

              <span className="bg-sky-400 text-slate-900 px-3 py-1 rounded-full text-sm">
                Financial Analysis
              </span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-slate-900 rounded-xl p-8 shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-white mb-4">
              DCF Valuation Model
            </h3>

            <p className="text-gray-300 mb-6">
              Build a discounted cash flow model to estimate intrinsic value
              using financial projections and valuation assumptions.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="bg-sky-400 text-slate-900 px-3 py-1 rounded-full text-sm">
                Valuation
              </span>

              <span className="bg-sky-400 text-slate-900 px-3 py-1 rounded-full text-sm">
                Excel
              </span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-slate-900 rounded-xl p-8 shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-white mb-4">
              FP&A Dashboard
            </h3>

            <p className="text-gray-300 mb-6">
              Create an interactive dashboard to visualize revenue,
              expenses, budgets, and key performance indicators.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="bg-sky-400 text-slate-900 px-3 py-1 rounded-full text-sm">
                Power BI
              </span>

              <span className="bg-sky-400 text-slate-900 px-3 py-1 rounded-full text-sm">
                FP&A
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;