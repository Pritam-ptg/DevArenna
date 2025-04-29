
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Brain, FileCode, Dice1, Mic, Star, Users, LayoutGrid, Bug, Lock } from 'lucide-react';

type Event = {
  id: number;
  title: string;
  day: 1 | 2 | 3;
  icon: React.ReactNode;
  description: string;
  color: string;
  time: string;
};

const EventsSection = () => {
  const [activeDay, setActiveDay] = useState<1 | 2 | 3>(1);
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);

  const events: Event[] = [
    {
      id: 1,
      title: "Teach Relay",
      day: 1,
      icon: <Brain className="h-6 w-6" />,
      description: "A fast-paced knowledge transfer challenge where teams must communicate complex concepts under time pressure. Test your understanding and teaching skills!",
      color: "squidPink",
      time: "10:00 AM - 12:00 PM",
    },
    {
      id: 2,
      title: "Ghost Code",
      day: 1,
      icon: <FileCode className="h-6 w-6" />,
      description: "Debug the undebugable! Find and fix the invisible errors in our haunted codebase before time runs out. Coding skills mixed with detective instincts.",
      color: "squidGreen",
      time: "01:00 PM - 03:00 PM",
    },
    {
      id: 3,
      title: "Game of Cards",
      day: 1,
      icon: <Dice1 className="h-6 w-6" />,
      description: "A strategic card game that tests your memory, pattern recognition, and decision-making under pressure. Every card matters in this mental battleground.",
      color: "championGold",
      time: "03:30 PM - 05:30 PM",
    },
    {
      id: 4,
      title: "Rangasthala Rampage",
      day: 1,
      icon: <Mic className="h-6 w-6" />,
      description: "Showcase your cultural talents in this high-energy performance competition. Dance, music, drama - all artistic expressions welcome on this battlefield of creativity.",
      color: "championSilver",
      time: "06:00 PM - 08:00 PM",
    },
    {
      id: 5,
      title: "Reva's Got Latent",
      day: 2,
      icon: <Star className="h-6 w-6" />,
      description: "The ultimate talent showcase where participants bring their most spectacular skills to win over our judges and audience. What's your winning talent?",
      color: "squidPink",
      time: "10:00 AM - 01:00 PM",
    },
    {
      id: 6,
      title: "Speaker Session",
      day: 2,
      icon: <Users className="h-6 w-6" />,
      description: "Inspirational talks from industry leaders and innovators who've conquered their own games. Learn, network, and get motivated by the best.",
      color: "squidGreen",
      time: "02:00 PM - 05:00 PM",
    },
    {
      id: 7,
      title: "Code Frenzy",
      day: 3,
      icon: <Bug className="h-6 w-6" />,
      description: "A high-octane coding competition where speed meets precision. Solve complex algorithms and programming challenges against the clock and against each other.",
      color: "squidPink",
      time: "09:00 AM - 11:00 AM",
    },
    {
      id: 8,
      
      title: "Vibe Coding",
      day: 3,
      icon: <LayoutGrid className="h-6 w-6" />,
      description: "A life-sized, high-stakes version of the classic game where strategy meets physical challenge. Think fast, move faster, and outmaneuver your opponents.",
      color: "championGold",
      time: "11:30 AM - 01:30 PM",
    },
    {
      id: 9,
      title: "Encryption ID",
      day: 3,
      icon: <Lock className="h-6 w-6" />,
      description: "Crack the codes, solve the encryption puzzles, and unlock the digital fortress in this cybersecurity challenge that tests your logical thinking and hacking mindset.",
      color: "squidGreen",
      time: "02:00 PM - 04:00 PM",
    },
  ];

  const filteredEvents = events.filter(event => event.day === activeDay);

  return (
    <section id="events" className="py-20 md:py-28 bg-dark relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-squidPink/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-squidGreen/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-block font-squid px-3 py-1 mb-6 bg-white/5 rounded-full border border-white/10 text-squidPink text-sm">
            EVENTS SCHEDULE
          </div>
          
          <h2 className="text-3xl md:text-4xl font-squid lg:text-5xl font-heading font-bold mb-6 text-white">
            Three Days of <span className="text-squidGreen">Epic</span> Challenges
          </h2>
          
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Each day brings new opportunities to compete, showcase your skills, and survive elimination. Choose your battlegrounds wisely.
          </p>
        </div>
        
        {/* Day selector */}
        <div className="flex justify-center mb-12 reveal">
          <div className="inline-flex bg-darkAccent/50 rounded-lg p-1">
            {[1, 2, 3].map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day as 1 | 2 | 3)}
                className={cn(
                  "py-2 px-6 md:px-10 font-medium rounded-md transition-all duration-300",
                  activeDay === day
                    ? "bg-squidPink text-white shadow-lg"
                    : "text-white/60 hover:text-white"
                )}
              >
                Day {day}
              </button>
            ))}
          </div>
        </div>
        
        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className={cn(
                "glass-card rounded-lg overflow-hidden transition-all duration-500 group",
                expandedEvent === event.id ? "md:col-span-2 md:row-span-2" : "",
                `hover:border-${event.color}/50`
              )}
              onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-full bg-${event.color}/20 flex items-center justify-center`}>
                    {event.icon}
                  </div>
                  <span className="text-sm text-white/60">{event.time}</span>
                </div>
                <h3 className="text-xl font-semibold text-white font-squid mb-2">{event.title}</h3>
                <p className={cn(
                  "text-white/70 transition-all duration-500",
                  expandedEvent === event.id ? "max-h-96" : "max-h-0 overflow-hidden opacity-0 md:group-hover:max-h-96 md:group-hover:opacity-100"
                )}>
                  {event.description}
                </p>
              </div>
              <div className={`h-1 w-full bg-${event.color}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
