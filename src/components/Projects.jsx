import Section from "./Section.jsx";

export default function Projects({ projects }) {
    return (
        <Section
            title="Projects"
        >
            <div className="grid">
                {projects.map((p) => (
                    <article key={p.name} className="card projectCard">
                        <header className="projectHeader">
                            <div className="projectTitleRow">
                                <h3 className="projectTitle">{p.name}</h3>
                                <span className="meta">{p.dates}</span>
                            </div>

                            {p.tags?.length ? (
                                <div className="tagRow">
                                    {p.tags.map((t) => (
                                        <span key={t} className="tag">{t}</span>
                                    ))}
                                </div>
                            ) : null}
                        </header>

                        <ul className="bullets">
                            {p.bullets.map((b, idx) => (
                                <li key={idx}>{b}</li>
                            ))}
                        </ul>

                        {p.links?.length ? (
                            <footer className="cardFooter">
                                {p.links.map((l) => (
                                    <a
                                        key={l.href}
                                        className="miniBtn"
                                        href={l.href}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {l.label}
                                    </a>
                                ))}
                            </footer>
                        ) : (
                            <footer className="cardFooter">

                            </footer>
                        )}
                    </article>
                ))}
            </div>
        </Section>
    );
}