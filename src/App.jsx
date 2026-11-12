import "./App.css";

const projects = [
  {
    title: "Project One",
    description: "A short line about what it does.",
    link: "#",
  },
  {
    title: "Project Two",
    description: "Another short description.",
    link: "#",
  },
  { title: "Project Three", description: "What problem it solves.", link: "#" },
];

function App() {
  return (
    <>
      <header className="hero">
        <h1>Hi, I'm Your Name</h1>
        <p>BTech CSE student who builds things and learns along the way.</p>
        <a href="#projects" className="btn">
          See my work
        </a>
      </header>

      <main>
        <section id="projects">
          <h2>Projects</h2>
          <div className="grid">
            {projects.map((p) => (
              <a key={p.title} href={p.link} className="card">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>Deployed with GitHub Actions</p>
      </footer>
    </>
  );
}

export default App;
