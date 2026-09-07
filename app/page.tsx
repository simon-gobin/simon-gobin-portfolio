const projects = [
  {
    index: "01",
    category: "Responsible AI / Evaluation",
    title: "LLM confidence across cultures",
    summary:
      "A reproducible benchmark comparing Gemma 3 12B and Qwen 3 8B across locale-aware prompts, accuracy and confidence behaviour.",
    metrics: [
      ["87.3%", "Gemma high-confidence accuracy"],
      ["85.8%", "Qwen high-confidence accuracy"],
      ["5", "country contexts"],
    ],
    tags: ["Python", "LLM evaluation", "Statistics", "Responsible AI"],
    links: [
      {
        label: "Read case study",
        href: "https://simongobin.wordpress.com/2026/05/05/benchmarking-large-language-models-accuracy-confidence-and-cross-locale-evaluation/",
      },
      {
        label: "View GitHub",
        href: "https://github.com/simon-gobin/Benchmark-LLM-Simon-Gobin",
      },
    ],
  },
  {
    index: "02",
    category: "Data Engineering / Education",
    title: "PISA 2022 data pipeline",
    summary:
      "An end-to-end Python, SQL and Google Cloud workflow for processing large education datasets, modelling outcomes and communicating findings clearly.",
    metrics: [
      ["6.5 GB", "source data"],
      ["3", "pipeline layers"],
      ["Cloud", "reproducible workflow"],
    ],
    tags: ["Python", "SQL", "Google Cloud", "Machine learning"],
    links: [
      {
        label: "Read case study",
        href: "https://simongobin.wordpress.com/2025/05/21/python-sql-google-cloud-pipeline-for-analyzing-the-pisa-2022-dataset-2/",
      },
      {
        label: "View GitHub",
        href: "https://github.com/simon-gobin/Pisa_project",
      },
    ],
  },
  {
    index: "03",
    category: "Internal Innovation / Secure AI",
    title: "SDS workforce intelligence tool",
    summary:
      "A secure internal prototype that translated natural-language requests into workforce analysis without exposing raw sensitive data to the LLM layer.",
    metrics: [
      ["3", "global locations"],
      ["2", "LLM providers"],
      ["1", "secure data boundary"],
    ],
    tags: ["Snowflake", "DuckDB", "Claude", "Gemini", "RIO / Shuri"],
    links: [],
  },
  {
    index: "04",
    category: "Applied AI / Product",
    title: "Telegram AI assistant",
    summary:
      "A Python application combining open-source language models, image generation and real-time message handling in one conversational interface.",
    metrics: [
      ["3", "AI capabilities"],
      ["Live", "API orchestration"],
      ["Open", "source stack"],
    ],
    tags: ["Python", "FastAPI", "Flask", "Streamlit", "LLMs"],
    links: [
      {
        label: "Read case study",
        href: "https://simongobin.wordpress.com/2026/01/13/python-llm-telegram-api-open-source-llm-and-image-generation-app/",
      },
      {
        label: "View GitHub",
        href: "https://github.com/simon-gobin/AI-chat-bot",
      },
    ],
  },
];

const expertise = [
  {
    label: "AI & LLMs",
    detail: "Evaluation, RAG, prompt design, confidence and hallucination analysis",
  },
  {
    label: "Data & BI",
    detail: "Python, SQL, Snowflake, Tableau, DuckDB and Google Cloud",
  },
  {
    label: "Investigation",
    detail: "Fraud patterns, anomaly detection, evidence and decision quality",
  },
  {
    label: "Delivery",
    detail: "Stakeholder discovery, technical storytelling and secure workflows",
  },
];

const experience = [
  {
    date: "2025 — 2026",
    role: "Quality Business Analyst · WFO Rotation",
    company: "Apple · Strategic Data Solutions",
    copy: "Supported Tableau reporting end to end, worked with Snowflake data integrity, automated recurring analysis and gathered feedback across Austin, Singapore and Cork.",
  },
  {
    date: "2022 — Present",
    role: "Fraud Prevention Specialist",
    company: "Apple · Strategic Data Solutions",
    copy: "Investigated 22,000+ transactions across EMEA and AMR with 99.41% verified accuracy, turning ambiguous signals into structured decisions.",
  },
  {
    date: "2019 — 2022",
    role: "Technical Support Supervisor & Mentor",
    company: "AppleCare",
    copy: "Led complex issue resolution and mentoring in a high-volume environment while maintaining customer satisfaction above 95%.",
  },
];

const education = [
  ["2025 — 2027", "MSc Artificial Intelligence", "Munster Technological University"],
  ["2023 — 2025", "Higher Diploma in Data Analytics", "National College of Ireland"],
  ["2023", "Diploma in Corporate Fraud Investigation", "City Colleges Dublin"],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Simon Gobin, home">
          SG<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-status" href="mailto:simon.gobin.do@gmail.com">
          <span /> Available for the right challenge
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker reveal reveal-1">
          <span>Cork, Ireland</span>
          <span>Open to relocation</span>
        </div>
        <h1 className="reveal reveal-2">
          Investigation
          <br />
          meets <em>intelligence.</em>
        </h1>
        <div className="hero-bottom reveal reveal-3">
          <p>
            Fraud investigator turned AI builder, combining data, reasoning and
            human-centred systems to make complex decisions clearer.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <Arrow />
            </a>
            <a className="button button-quiet" href="/Simon-Gobin-CV.pdf" download>
              Download CV <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <div className="hero-mark" aria-hidden="true">
          DATA / AI / FRAUD
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-label">
          <span>01</span> About
        </div>
        <div className="about-copy">
          <p className="lead">
            I work where <em>human judgement</em>, data and artificial
            intelligence intersect.
          </p>
          <div className="about-detail">
            <p>
              Six years at Apple taught me to investigate carefully, communicate
              clearly and stay calm when the signal is incomplete. A Data
              Analytics diploma and my current MSc in Artificial Intelligence
              gave me the tools to turn that judgement into systems.
            </p>
            <p>
              Today I build and evaluate data products, LLM workflows and secure
              analytical tools with a focus on usefulness, transparency and
              responsible decision-making.
            </p>
          </div>
        </div>
      </section>

      <section className="section expertise-section">
        <div className="section-label">
          <span>02</span> Expertise
        </div>
        <div className="expertise-grid">
          {expertise.map((item, index) => (
            <article className="expertise-item" key={item.label}>
              <span className="expertise-number">0{index + 1}</span>
              <h2>{item.label}</h2>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-label light-label">
          <span>03</span> Experience
        </div>
        <div className="experience-intro">
          <p>From individual cases to systems-level insight.</p>
          <span>Apple · 2019 — now</span>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.role}>
              <time>{item.date}</time>
              <div>
                <p className="company">{item.company}</p>
                <h2>{item.role}</h2>
                <p className="timeline-copy">{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="work">
        <div className="projects-heading">
          <div className="section-label">
            <span>04</span> Selected work
          </div>
          <p>Projects built to answer a real question, not just demonstrate a tool.</p>
        </div>
        <div className="projects-list">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className="project-index">{project.index}</div>
              <div className="project-main">
                <p className="project-category">{project.category}</p>
                <h2>{project.title}</h2>
                <p className="project-summary">{project.summary}</p>
                <div className="project-metrics">
                  {project.metrics.map(([value, label]) => (
                    <div key={label}>
                      <strong>{value}</strong>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
                <div className="project-footer">
                  <div className="tags" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.links.length ? (
                      project.links.map((link) => (
                        <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                          {link.label} <Arrow />
                        </a>
                      ))
                    ) : (
                      <span className="internal-label">Internal project</span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section education-section">
        <div className="section-label">
          <span>05</span> Education
        </div>
        <div className="education-list">
          {education.map(([date, title, school]) => (
            <article key={title}>
              <time>{date}</time>
              <h2>{title}</h2>
              <p>{school}</p>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="section-label light-label">
          <span>06</span> Let&apos;s talk
        </div>
        <p className="footer-title">
          Have a difficult problem?
          <br />
          <em>That&apos;s where I start.</em>
        </p>
        <a className="footer-email" href="mailto:simon.gobin.do@gmail.com">
          simon.gobin.do@gmail.com <Arrow />
        </a>
        <div className="footer-bottom">
          <p>© 2026 Simon Gobin · Cork, Ireland</p>
          <div>
            <a href="https://linkedin.com/in/simongobin" target="_blank" rel="noreferrer">
              LinkedIn <Arrow />
            </a>
            <a href="https://github.com/simon-gobin" target="_blank" rel="noreferrer">
              GitHub <Arrow />
            </a>
            <a href="https://simongobin.wordpress.com" target="_blank" rel="noreferrer">
              Archive <Arrow />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
