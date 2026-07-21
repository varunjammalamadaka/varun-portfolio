import { FaFilePdf, FaDownload } from "react-icons/fa";

function Resume() {
  return (
    <section
      id="resume"
      className="min-h-screen bg-slate-800 flex items-center justify-center px-6"
    >
      <div className="max-w-3xl text-center">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-sky-400 mb-6">
          Resume
        </h2>

        {/* Paragraph */}
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          Interested in learning more about my background? My resume highlights
          my education, internship experience, financial modeling, technical
          skills, and leadership experiences. Feel free to view it online or
          download a copy for future reference.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sky-400 text-slate-900 font-semibold rounded-lg hover:bg-sky-300 transition"
          >
            <FaFilePdf />
            View Resume
          </a>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-sky-400 text-sky-400 font-semibold rounded-lg hover:bg-sky-400 hover:text-slate-900 transition"
          >
            <FaDownload />
            Download Resume
          </a>

        </div>

      </div>
    </section>
  );
}

export default Resume;