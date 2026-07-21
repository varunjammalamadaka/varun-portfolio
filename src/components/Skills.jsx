function Skills() {
  const skills = [
    "Financial Analysis",
    "Corporate Finance",
    "Financial Modeling",
    "FP&A",
    "Excel",
    "Power BI",
    "SQL",
    "Python",
    "Bloomberg Terminal",
    "Valuation",
    "Accounting",
    "Microsoft Office"
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-900 flex items-center justify-center px-6"
    >
      <div className="max-w-5xl w-full text-center">

        <h2 className="text-5xl font-bold text-sky-400 mb-6">
          Skills
        </h2>

        <p className="text-gray-300 mb-12">
          Technical and analytical skills developed through coursework,
          projects, and hands-on experience.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-800 p-6 rounded-xl shadow-lg hover:bg-sky-400 hover:text-slate-900 transition duration-300 font-semibold"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;