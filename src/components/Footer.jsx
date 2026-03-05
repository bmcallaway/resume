export default function Footer({ onBackToTop }) {
    return (
        <footer className="siteFooter">
            <div className="footerInner">
                <div className="muted">
                    Built with React + Vite
                </div>
                <button className="miniBtn" type="button" onClick={onBackToTop}>
                    Back to top ↑
                </button>
            </div>
        </footer>
    );
}