export default function Section({ title, subtitle, children }) {
    return (
        <section className="section">
            <header className="sectionHeader">
                <div>
                    <h2 className="sectionTitle">{title}</h2>
                    {subtitle ? <p className="sectionSub">{subtitle}</p> : null}
                </div>
            </header>
            {children}
        </section>
    );
}