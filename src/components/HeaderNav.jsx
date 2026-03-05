export default function HeaderNav({ name, headline, items, activeId, onNav }) {
    return (
        <header className="siteHeader">
            <div className="headerInner">
                <div className="identity">
                    <div className="nameRow">
                        <span className="name">{name}</span>
                        <span className="dot" aria-hidden="true">•</span>
                        <span className="headline">{headline}</span>
                    </div>
                    <div className="microHint">Scroll or use the nav to jump sections</div>
                </div>

                <nav className="siteNav" aria-label="Primary">
                    {items.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            className={"navBtn " + (activeId === item.id ? "isActive" : "")}
                            onClick={() => onNav(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );
}