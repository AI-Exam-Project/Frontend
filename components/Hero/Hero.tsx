import HeroContent from "./HeroContent";
import HeroVideo from "./HeroVideo";

export default function Hero () {
    return(
       <section id="hero" className="relative pt-20 md:pt-28 min-h-screen overflow-hidden">
      <HeroVideo />
      <HeroContent />
    </section>
        
    )
}