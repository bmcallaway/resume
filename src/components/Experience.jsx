import Section from "./Section.jsx";

export default function Experience({ roles }) {
    return (
        <Section
            title="Technical Experience"
        >
            <div className="stack">
                {roles.map((r) => (
                    <article key={`${r.company}-${r.title}`} className="card roleCard">
                        <header className="roleHeader">
                            <div>
                                <h3 className="roleTitle">
                                    {r.title} <span className="muted">— {r.company}</span>
                                </h3>
                                <div className="meta">{r.location}</div>
                            </div>
                            <div className="meta">{r.dates}</div>
                        </header>

                        {r.chips?.length ? (
                            <div className="chipRow">
                                {r.chips.map((c) => (
                                    <span key={c} className="chip">{c}</span>
                                ))}
                            </div>
                        ) : null}

                        <ul className="bullets">
                            {r.bullets.map((b, idx) => (
                                <li key={idx}>{b}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </Section>
    );
}