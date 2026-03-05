import Section from "./Section.jsx";

export default function Education({ education }) {
    return (
        <Section title="Education">
            <div className="stack">
                {education.map((e) => (
                    <article key={e.school} className="card eduCard">
                        <div className="eduRow">
                            <div className="eduLeft">
                                <h3 className="eduSchool">{e.school}</h3>
                                <div className="eduDegree">{e.degree}</div>
                            </div>

                            <div className="eduRight">
                                <div className="eduMeta">{e.location}</div>
                                <div className="eduMeta">{e.dates}</div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    );
}