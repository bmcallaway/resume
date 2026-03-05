import { useEffect, useRef } from "react";

export default function ParallaxBackground() {
    const rootRef = useRef(null);

    useEffect(() => {
        // Optional: light JS parallax. If you want pure CSS only, delete this useEffect.
        const el = rootRef.current;
        if (!el) return;

        const layers = Array.from(el.querySelectorAll("[data-depth]"));

        const onScroll = () => {
            const y = window.scrollY || 0;
            for (const layer of layers) {
                const depth = Number(layer.getAttribute("data-depth") || 0);
                layer.style.transform = `translate3d(0, ${y * depth}px, 0)`;
            }
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div ref={rootRef} className="parallaxRoot" aria-hidden="true">
            <div className="parallaxLayer layerBack" data-depth="0.06" />
            <div className="parallaxLayer layerMid" data-depth="0.10" />
            <div className="parallaxLayer layerFront" data-depth="0.14" />
            <div className="parallaxVignette" />
        </div>
    );
}