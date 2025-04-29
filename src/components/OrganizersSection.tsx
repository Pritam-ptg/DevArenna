import { cn } from "@/lib/utils";
import Pritam from "..//assets/Pritam_7.jpeg"
import Prerna from "../assets/Prerna.jpeg"
import Aditya from "../assets/Aditya.jpeg"
import V from "../assets/vyshnavi.jpeg"
import D from "../assets/Danush.png"
import k from "../assets/Karthik.jpeg"
import Pr from "../assets/Pravitha.jpeg"
import Deeksa from "../assets/Deekha.jpeg"
import CommignSoon from "../assets/comingSoon.png"
import Satyam from "../assets/Satyam.jpeg"
import Tanush from "../assets/chuthiya.jpeg"

const organizers = [
  {
    name: "Pritam",
    role: "Technical Lead",
    image: Pritam,
    linkedIn: "https://www.linkedin.com/in/pritam-p-012561253/"
  },
  {
    name: "Prerna",
    role: "PR Lead",
    image: Prerna,
    linkedIn: "https://www.linkedin.com/in/prerna-logachandran-b10a57249/"
  },
  {
    name: "Aaditya Gowda",
    role: "Event/Media mangement Lead",
    image: Aditya,
    linkedIn: "https://www.linkedin.com/in/aaditya-gowda-a9b328298/"
  },
  {
    name: "Vyishnavi",
    role: "Marketing Head",
    image: V,
    linkedIn: "https://www.linkedin.com/in/vyshnavi-reddy-b1b670290"
  },
  {
    name: "Danush",
    role: "Design Lead",
    image: D,
    linkedIn: "#"
  },
  {
    name: "Karthik",
    role: "Public Relations",
    image: k,
    linkedIn: "https://www.linkedin.com/in/kartikjarali/"
  },
  {
    name: "Deeksha",
    role: "Marketing",
    image:Deeksa,
    linkedIn: "https://www.linkedin.com/in/deeksha-shetti-51b9362a3/"
  },
  {
    name: "Pravitha",
    role: "Finance",
    image: Pr,
    linkedIn: "https://www.linkedin.com/in/pravitta-jeromie-506aab27b"
  },
  {
    name: "Tanush Jain",
    role: "Operational",
    image: Tanush,
    linkedIn: "https://www.linkedin.com/in/tanush-jain-17601321a/"
  },
  {
    name: "Satyam",
    role: "AIML",
    image: Satyam,
    linkedIn: "https://www.linkedin.com/in/satyam-gupta-41606a28a/"
  },
];

const OrganizersSection = () => {
  return (
    <section id="organizers" className="py-20 bg-dark relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-squidPink/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-3 py-1 font-squid mb-6 bg-white/5 rounded-full border border-white/10 text-squidPink text-sm">
            MEET THE TEAM
          </div>
          
          <h2 className="text-3xl md:text-4xl font-squid lg:text-5xl  font-bold mb-6 text-white">
            The <span className="text-squidGreen">Masterminds</span> Behind
          </h2>
          
          <p className="text-lg text-white/80  max-w-3xl mx-auto">
            Our dedicated team working tirelessly to bring you an unforgettable experience.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 reveal">
          {organizers.map((organizer, index) => (
            <a href={`${organizer.linkedIn}`}
              target="_blank"
              key={index}
              className="flex flex-col items-center group w-36 md:w-44"
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 rounded-full overflow-hidden transition-all duration-300 group-hover:squid-border">
                {organizer.image ? (
                  <img
                    src={organizer.image}
                    alt={organizer.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center text-white">
                    {organizer.name.charAt(0)}
                  </div>
                )}
              </div>
              <h3 className="text-lg font-medium text-white text-center">{organizer.name}</h3>
              <p className="text-sm text-white/60 text-center mt-1">{organizer.role}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizersSection;