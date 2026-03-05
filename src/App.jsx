import { useEffect, useMemo, useRef, useState } from "react";
import resumeData from "./data/resumeData.js";

import HeaderNav from "./components/HeaderNav.jsx";
import Hero from "./components/Hero.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Footer from "./components/Footer.jsx";
import ParallaxBackground from "./components/ParallaxBackground.jsx";

const SECTION_IDS = ["experience", "projects", "skills", "education", "contact"];

export default function App() {
    const [activeId, setActiveId] = useState("experience");
    const sectionRefs = useRef({});

    const navItems = useMemo(
        () => [
            { id: "experience", label: "Experience" },
            { id: "projects", label: "Projects" },
            { id: "skills", label: "Skills" },
            { id: "education", label: "Education" },
            { id: "contact", label: "Contact" },
        ],
        []
    );

    useEffect(() => {
        // IntersectionObserver to highlight the active section in nav
        const observer = new IntersectionObserver(
            (entries) => {
                // pick the most visible intersecting section
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
                if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
            },
            {
                root: null,
                threshold: [0.2, 0.35, 0.5, 0.65],
                rootMargin: "-15% 0px -65% 0px", // makes switching feel “snappy” with sticky header
            }
        );

        SECTION_IDS.forEach((id) => {
            const el = sectionRefs.current[id];
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        const el = sectionRefs.current[id];
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="appRoot">
            <ParallaxBackground />

            <HeaderNav
                name={resumeData.identity.name}
                headline={resumeData.identity.headline}
                items={navItems}
                activeId={activeId}
                onNav={scrollToSection}
            />

            <main className="page">
                <Hero
                    contact={resumeData.contact}
                    ctas={[
                        { label: "View Experience", id: "experience" },
                        { label: "View Projects", id: "projects" },
                    ]}
                    onCta={scrollToSection}
                    setContactRef={(el) => (sectionRefs.current.contact = el)}
                />

                <div
                    ref={(el) => (sectionRefs.current.experience = el)}
                    id="experience"
                    className="sectionAnchor"
                >
                    <Experience roles={resumeData.experience} />
                </div>

                <div
                    ref={(el) => (sectionRefs.current.projects = el)}
                    id="projects"
                    className="sectionAnchor"
                >
                    <Projects projects={resumeData.projects} />
                </div>

                <div
                    ref={(el) => (sectionRefs.current.skills = el)}
                    id="skills"
                    className="sectionAnchor"
                >
                    <Skills skills={resumeData.skills} />
                </div>

                <div
                    ref={(el) => (sectionRefs.current.education = el)}
                    id="education"
                    className="sectionAnchor"
                >
                    <Education education={resumeData.education} />
                </div>

                <Footer onBackToTop={() => scrollToSection("experience")} />
            </main>
        </div>
    );
}