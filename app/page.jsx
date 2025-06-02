import Hero from "@/components/Hero";
import Square from "@/components/Squares/Squares";
export default function Home() {
    return (
        <div className="font-[family-name:var(--font-poppins)]">
            <div className="absolute top-0 opacity-30 left-0 w-full h-4/5">
                <Square speed={0.2} hoverFillColor="#D946EF" direction="up" />
            </div>
            <Hero />
        </div>
    );
}
