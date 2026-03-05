export default function Hero({ contact, ctas, onCta, setContactRef }) {
    return (
        <section className="hero" aria-label="Intro">
            <div className="heroGrid">
                <div className="card heroCard">
                    <div className="heroTop">
                        <h1 className="heroTitle">
                            Build clean APIs. Ship reliable services. Make it feel premium.
                        </h1>
                    </div>

                    <div className="ctaRow">
                        {ctas.map((c) => (
                            <button key={c.id} className="ctaBtn" onClick={() => onCta(c.id)}>
                                {c.label}
                            </button>
                        ))}
                    </div>

                    <div className="heroBadges">
                        <span className="badge">GraphQL</span>
                        <span className="badge">gRPC</span>
                        <span className="badge">Spring Boot</span>
                        <span className="badge">Kubernetes</span>
                    </div>
                </div>

                <div className="card contactCard" ref={setContactRef}>
                    <h2 className="cardTitle">Contact</h2>
                    <ul className="contactList">
                        <li>
                            <span className="muted">Location</span>
                            <span>{contact.location}</span>
                        </li>
                        <li>
                            <span className="muted">Phone</span>
                            <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}>{contact.phone}</a>
                        </li>
                        <li>
                            <span className="muted">Email</span>
                            <a href={`mailto:${contact.email}`}>{contact.email}</a>
                        </li>
                        <li>
                            <span className="muted">LinkedIn</span>
                            <a href={contact.linkedin} target="_blank" rel="noreferrer">
                                Open
                            </a>
                        </li>
                        <li>
                            <span className="muted">GitHub</span>
                            <a href={contact.github} target="_blank" rel="noreferrer">
                                Open
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </section>
    );
}