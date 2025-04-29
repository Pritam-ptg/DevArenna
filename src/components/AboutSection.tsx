
import { cn } from "@/lib/utils";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-darkAccent relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-squidGreen/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-squidPink/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 reveal">
            <div className="inline-block px-3 py-1 mb-6 bg-white/5 rounded-full border border-white/10">
              <span className="text-squidPink font-squid text-sm">ABOUT THE EVENT</span>
            </div>
            
            <h2 className="text-3xl font-squid md:text-4xl lg:text-5xl  font-bold mb-6 text-white">
              Where <span className="text-squidGreen">Technology</span> Meets <span className="text-squidPink">Challenge</span>
            </h2>
          </div>
          
          <div className="glass-card p-8 md:p-10 rounded-lg reveal">
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              <span className="text-squidPink font-semibold">Dev Arena</span> is an adrenaline-fueled three-day extravaganza that combines the high-stakes intensity of Dev/Arrena with the glory of championship competition. Participants will navigate through a series of challenging technical puzzles, mind-bending games, and cultural showcases designed to test their limits. With elimination rounds reminiscent of the famous series but with a college-friendly twist, only the most skilled, strategic, and resilient competitors will survive to claim the ultimate prize and championship title. Are you ready to play?
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              <div className={cn(
                "p-4 rounded-lg text-center",
                "bg-gradient-to-b from-squidPink/20 to-transparent"
              )}>
                <div className="text-3xl font-bold text-white mb-1">9+</div>
                <div className="text-white/70 text-sm">Unique Events</div>
              </div>
              
              <div className={cn(
                "p-4 rounded-lg text-center",
                "bg-gradient-to-b from-squidGreen/20 to-transparent"
              )}>
                <div className="text-3xl font-bold text-white mb-1">3</div>
                <div className="text-white/70 text-sm">Action Days</div>
              </div>
              
              <div className={cn(
                "p-4 rounded-lg text-center",
                "bg-gradient-to-b from-championGold/20 to-transparent"
              )}>
                <div className="text-3xl font-bold text-white mb-1">₹15k+</div>
                <div className="text-white/70 text-sm">Prize Pool</div>
              </div>
              
              <div className={cn(
                "p-4 rounded-lg text-center",
                "bg-gradient-to-b from-white/10 to-transparent"
              )}>
                <div className="text-3xl font-bold text-white mb-1">5+</div>
                <div className="text-white/70 text-sm">Colleges</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
