import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
export default function Home() {
    return (
        <div className="font-[family-name:var(--font-poppins)]">
            
            <Hero />
            <Projects />
            <Skills/>
        </div>
    );
}
