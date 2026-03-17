"use client";

export default function CommandHandler({ command }: { command: string }) {
  const cmd = command.toLowerCase().trim();

  // HELP (better UX)
  if (cmd === "help") {
    return (
      <div className="mt-1 text-green-400">
        <p className="text-green-300">Available commands:</p>

        <div className="mt-2 space-y-1">
          <p><span className="text-green-300">about</span> — Who I am</p>
          <p><span className="text-green-300">skills</span> — Tech stack</p>
          <p><span className="text-green-300">projects</span> — My work</p>
          <p><span className="text-green-300">contact</span> — Get in touch</p>
          <p><span className="text-green-300">resume</span> — View resume</p>
          <p><span className="text-green-300">clear</span> — Clear terminal</p>
        </div>

        <p className="mt-3 text-green-500">
          Tip: Try typing commands like <span className="text-green-300">about</span> or <span className="text-green-300">projects</span>
        </p>
      </div>
    );
  }

  // ABOUT
  if (cmd === "about") {
    return (
      <div className="mt-1 space-y-2">
        <p>
          👋 Hi, I'm <span className="text-green-300">Rahul Kushwaha</span>
        </p>
        <p>
          I'm a <span className="text-green-300">React Native Developer</span> focused on building
          scalable mobile apps and modern web experiences.
        </p>
        <p>
          I enjoy turning ideas into real-world products and continuously learning new technologies.
        </p>
      </div>
    );
  }

  // SKILLS (structured)
  if (cmd === "skills") {
    return (
      <div className="mt-1 space-y-2">
        <p className="text-green-300">Tech Stack:</p>

        <p>Frontend: React, React Native, Next.js</p>
        <p>Backend: Node.js, Flask</p>
        <p>Tools: Firebase, Git, Postman</p>
        <p>Languages: JavaScript, TypeScript, Python</p>
      </div>
    );
  }

  // PROJECTS (better readability)
  if (cmd === "projects") {
    return (
      <div className="mt-1 space-y-2">
        <p className="text-green-300">Projects:</p>

        <p>• Echoo — Real-time chat app</p>
        <p>• CityZen — AI smart city dashboard</p>
        <p>• Floryn Stayz — Hotel booking website</p>
        <p>• Yoga App — Fitness mobile app</p>

        <p className="text-green-500 mt-2">
          Visit Portfolio view for detailed project cards
        </p>
      </div>
    );
  }

  // CONTACT (more complete)
  if (cmd === "contact") {
    return (
      <div className="mt-1 space-y-1">
        <p>Email: <span className="text-green-300">therahulkushwaha16@gmail.com</span></p>
        <p>Location: Hyderabad, India</p>
      </div>
    );
  }

  // RESUME (clear CTA)
  if (cmd === "resume") {
    return (
      <div className="mt-1">
        <a
          href="/resume/rahul-kushwaha-resume.pdf"
          target="_blank"
          className="text-green-300 underline hover:text-green-200"
        >
          📄 Open Resume
        </a>
      </div>
    );
  }

  // CLEAR (handled in Terminal)
  if (cmd === "clear") {
    return "__CLEAR__";
  }

  // EMPTY INPUT
  if (!cmd) {
    return null;
  }

  // ERROR (better UX)
  return (
    <div className="mt-1 text-red-400">
      Command not found: <span className="text-red-300">{command}</span>
      <p className="text-green-500 mt-1">
        Type <span className="text-green-300">help</span> to see available commands
      </p>
    </div>
  );
}