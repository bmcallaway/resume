import Section from "./Section.jsx";

export default function Skills({ skills }) {
    const entries = Object.entries(skills);

    return (
        <Section title="Technical Skills">
            <div className="skillColumns">
                {entries.map(([group, items]) => (
                    <div key={group} className="card skillCard">
                        <h3 className="cardTitle">{group}</h3>
                        <ul className="pillList">
                            {items.map((s) => (
                                <li key={s} className="pill">{s}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}