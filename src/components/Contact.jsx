import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-900 flex items-center justify-center px-6"
    >
      <div className="max-w-3xl text-center">

        <h2 className="text-5xl font-bold text-sky-400 mb-6">
          Contact
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          Thank you for visiting my portfolio. Whether you're interested in
          discussing internship opportunities, finance projects, or simply
          connecting, I'd be happy to hear from you.
        </p>

        <div className="space-y-6">

          <a
            href="mailto:varun06.jammala@gmail.com"
            className="flex items-center justify-center gap-3 text-white text-xl hover:text-sky-400 transition"
          >
            <FaEnvelope />
            varun06.jammala@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/varunjammalamadaka/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-white text-xl hover:text-sky-400 transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;