import { SiteHero } from "../components/SiteHero";
import { Services } from "../components/Services";
import { Portfolio } from "../components/Portfolio";
import { TestimonialMarquee } from "../components/TestimonialMarquee";
import { QuoteEngine } from "../components/QuoteEngine";

export function HomePage() {
    return (
        <>
            <SiteHero />
            <TestimonialMarquee />
            <Services />
            <Portfolio />
            <QuoteEngine />
        </>
    );
}
