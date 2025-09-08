import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds) => {
    const [activeSection, setActiveSection] = useState("");
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const intersecting = entries.filter(
                    (entry) => entry.isIntersecting
                );

                if (intersecting.length > 0) {
                    const visibleSection = sectionIds.find((id) =>
                        intersecting.some((entry) => entry.target.id === id)
                    );

                    setActiveSection(visibleSection || "");
                } else {
                    setActiveSection("");
                }
            },
            {
                rootMargin: "-50% 0px -50% 0px",
            }
        );

        const elements = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean);
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [sectionIds]);

    return activeSection;
};
