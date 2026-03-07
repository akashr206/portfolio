import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds) => {
    const [activeSection, setActiveSection] = useState("");
    const sectionIdsStr = sectionIds.join(",");

    useEffect(() => {
        const ids = sectionIdsStr.split(",");
        const visibleSections = new Set();
        const observedElements = new Set();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        visibleSections.add(entry.target.id);
                    } else {
                        visibleSections.delete(entry.target.id);
                    }
                });

                if (visibleSections.size > 0) {
                    const visibleSection = ids.find((id) =>
                        visibleSections.has(id),
                    );
                    setActiveSection(visibleSection || "");
                }
            },
            {
                rootMargin: "-40% 0px -40% 0px",
            },
        );

        const observeElements = () => {
            ids.forEach((id) => {
                const el = document.getElementById(id);
                if (el && !observedElements.has(el)) {
                    observer.observe(el);
                    observedElements.add(el);
                }
            });
        };

        // Try to observe immediately just in case
        observeElements();

        // Since elements might be added after a loading screen finishes,
        // watch the DOM for newly added elements
        const mutationObserver = new MutationObserver(() => {
            observeElements();
        });

        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true,
        });

        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, [sectionIdsStr]);

    return activeSection;
};
