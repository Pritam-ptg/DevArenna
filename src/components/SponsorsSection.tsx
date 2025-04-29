
import { cn } from "@/lib/utils";
import Innoknowvew from "../assets/Innoknowvex.jpeg"
import CommingSoon from "../assets/ComingSoon.png"

const sponsors = [
  {
    name: "Coming Soon",
    logo: `${CommingSoon}`,
    tier: "platinum"
  },
  {
    name: "Innoknowvew",
    logo: `${Innoknowvew}`,
    tier: "gold"
  },
  {
    name: "Coming Soon",
    logo: `${CommingSoon}`,
    tier: "silver"
  }
];

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-20 bg-darkAccent relative">
      <div className="absolute top-0 left-0 w-80 h-80 bg-squidGreen/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-squidPink/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-3 py-1 font-squid mb-6 bg-white/5 rounded-full border border-white/10 text-squidPink text-sm">
            OUR PROUD SPONSORS
          </div>
          
          <h2 className="text-3xl font-squid md:text-4xl lg:text-5xl  font-bold mb-6 text-white">
            Powered by <span className="text-championGold">Visionaries</span>
          </h2>
          
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            These industry leaders support our mission to create the ultimate championship experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className={cn(
                "glass-card p-8 rounded-lg flex flex-col items-center justify-center transition-all duration-300 hover:translate-y-[-5px]",
                sponsor.tier === "platinum" && "border border-white/20 shadow-[0_0_15px_rgba(255,215,0,0.2)]",
                sponsor.tier === "gold" && "border border-championGold/20 shadow-[0_0_10px_rgba(255,215,0,0.1)]",
                sponsor.tier === "silver" && "border border-championSilver/20"
              )}
            >
              <div className="w-32 h-32 mb-4 overflow-hidden rounded-lg">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span 
                className={cn(
                  "text-lg font-medium",
                  sponsor.tier === "platinum" && "text-white",
                  sponsor.tier === "gold" && "text-championGold",
                  sponsor.tier === "silver" && "text-championSilver"
                )}
              >
                {sponsor.name}
              </span>
              <span className="text-xs uppercase tracking-wider text-white/60 mt-1">
                {sponsor.tier} sponsor
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
