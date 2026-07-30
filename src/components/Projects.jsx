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
          <div className="bg-slate-900 rounded-xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300 flex flex-col h-full">

            <h3 className="text-2xl font-bold text-white mb-4 min-h-[64px]">
              Financial Statement Analysis
            </h3>

            <p className="text-gray-300 mb-6 flex-grow">
              Conducted a comprehensive financial analysis of Apple Inc. by
              evaluating profitability, liquidity, leverage, cash flow, and
              investment outlook using publicly available financial statements
              and SEC filings.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-sky-400 text-slate-900 px-3 py-1 rounded-full text-sm">
                Excel
              </span>

              <span className="bg-sky-400 text-slate-900 px-3 py-1 rounded-full text-sm">
                Financial Analysis
              </span>
            </div>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-3">

                <a
                  href="/Apple_Financial_Statement_Analysis.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-400 text-slate-900 font-semibold px-4 py-2 rounded-lg hover:bg-sky-300 transition"
                >
                  View
                </a>

                <a
                  href="/Apple_Financial_Statement_Analysis.pdf"
                  download
                  className="border border-sky-400 text-sky-400 font-semibold px-4 py-2 rounded-lg hover:bg-sky-400 hover:text-slate-900 transition"
                >
                  Download PDF
                </a>

                <a
                  href="/Apple_Financial_Statement_Analysis.xlsx"
                  download
                  className="border border-green-400 text-green-400 font-semibold px-4 py-2 rounded-lg hover:bg-green-400 hover:text-slate-900 transition"
                >
                  Download Excel
                </a>

              </div>
            </div>

          </div>

          {/* Project 2 */}
          <div className="bg-slate-900 rounded-xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300 flex flex-col h-full">

            <h3 className="text-2xl font-bold text-white mb-4 min-h-[64px]">
              Apple DCF Valuation
            </h3>

            <p className="text-gray-300 mb-6 flex-grow">
              Built a discounted cash flow valuation model for Apple Inc. by
              forecasting revenue, free cash flow, terminal value, and
              estimating intrinsic share price using valuation assumptions and
              sensitivity analysis.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-sky-400 text-slate-900 px-3 py-1 rounded-full text-sm">
                Valuation
              </span>

              <span className="bg-sky-400 text-slate-900 px-3 py-1 rounded-full text-sm">
                Excel
              </span>

              <span className="bg-sky-400 text-slate-900 px-3 py-1 rounded-full text-sm">
                DCF Modeling
              </span>
            </div>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-3">

                <a
                  href="/DCF_Valuation.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-400 text-slate-900 font-semibold px-4 py-2 rounded-lg hover:bg-sky-300 transition"
                >
                  View
                </a>

                <a
                  href="/DCF%20valuation.pdf"
                  download
                  className="border border-sky-400 text-sky-400 font-semibold px-4 py-2 rounded-lg hover:bg-sky-400 hover:text-slate-900 transition"
                >
                  Download PDF
                </a>

                <a
                  href="/DCF%20valuation.xlsx"
                  download
                  className="border border-green-400 text-green-400 font-semibold px-4 py-2 rounded-lg hover:bg-green-400 hover:text-slate-900 transition"
                >
                  Download Excel
                </a>

              </div>
            </div>

          </div>

          {/* Project 3 */}
          <div className="bg-slate-900 rounded-xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300 flex flex-col h-full">

            <h3 className="text-2xl font-bold text-white mb-4 min-h-[64px]">
              FP&A Dashboard
            </h3>

            <p className="text-gray-300 mb-6 flex-grow">
              Created an interactive Power BI dashboard to analyze financial
              performance, visualize revenue and expense trends, and track key
              performance indicators for business decision-making.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-sky-400 text-slate-900 px-3 py-1 rounded-full text-sm">
                Power BI
              </span>

              <span className="bg-sky-400 text-slate-900 px-3 py-1 rounded-full text-sm">
                FP&amp;A
              </span>

              <span className="bg-sky-400 text-slate-900 px-3 py-1 rounded-full text-sm">
                Data Visualization
              </span>
            </div>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-3">

                <a
                  href="/FP&A_Dashboard.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-400 text-slate-900 font-semibold px-4 py-2 rounded-lg hover:bg-sky-300 transition"
                >
                  View Visualization
                </a>

                <a
                  href="/FP^0A_Dashboard_Data.xlsx"
                  download
                  className="border border-green-400 text-green-400 font-semibold px-4 py-2 rounded-lg hover:bg-green-400 hover:text-slate-900 transition"
                >
                  Download Data
                </a>

                <a
                  href="/FP&A_Dashboard_App.pbix"
                  download
                  className="border border-purple-400 text-purple-400 font-semibold px-4 py-2 rounded-lg hover:bg-purple-400 hover:text-slate-900 transition"
                >
                  Download PBIX
                </a>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;