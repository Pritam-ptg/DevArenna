
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Users, Trophy, CalendarCheck, Shirt, Coffee, UserPlus, MapPin, GraduationCap, Clock } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
  icon: React.ReactNode;
};

const faqs: FaqItem[] = [
  {
    question: "Who can participate in the event?",
    answer: "Students from any college can participate. You need to register through our official website or on-site registration desk with a valid college ID.",
    icon: <Users className="h-5 w-5 text-squidPink" />,
  },
  {
    question: "What are the prizes for winners?",
    answer: "Top performers will receive cash prizes and certificates. The total prize pool is valued at ₹15,000+.",
    icon: <Trophy className="h-5 w-5 text-championGold" />,
  },
  {
    question: "How can we register for the event?",
    answer: "Registration is open on our website. Click on the 'Register' button and fill out the form. The registration fee is ₹30 per team for per game in Day 1 and 3 event. Reva's Got Latent Got no Registration fee.",
    icon: <CalendarCheck className="h-5 w-5 text-squidGreen" />,
  },
  {
    question: "Can non-students attend the event?",
    answer: "Yes, There are non tech / semi tech Events in Day 1 and 2.",
    icon: <UserPlus className="h-5 w-5 text-squidPink" />,
  },
  {
    question: "Is there any dress code for the events?",
    answer: "There's no strict dress code, but we recommend comfortable attire for technical events. For cultural events, you can dress according to your performance theme.",
    icon: <Shirt className="h-5 w-5 text-squidGreen" />,
  },
  // {
  //   question: "Will food and accommodation be provided?",
  //   answer: "Light refreshments will be provided during the events. For accommodation, we have tie-ups with nearby hostels and hotels at discounted rates for participants.",
  //   icon: <Coffee className="h-5 w-5 text-championGold" />,
  // },
  {
    question: "Are team events allowed or solo only?",
    answer: "Both team and solo events are available. Team sizes vary from 2-4 members depending on the event. Check individual event details for specific requirements.",
    icon: <Users className="h-5 w-5 text-squidPink" />,
  },
  {
    question: "Where will the event be conducted?",
    answer: "All events will be held at the Reva University campus. Detailed venue information for each event will be shared with registered participants.",
    icon: <MapPin className="h-5 w-5 text-squidGreen" />,
  },
  // {
  //   question: "Can alumni participate?",
  //   answer: "Yes, alumni can participate in specific events marked as 'Open'. These events will be highlighted on our event schedule page.",
  //   icon: <GraduationCap className="h-5 w-5 text-championGold" />,
  // },
  {
    question: "What's the last date to register?",
    answer: "Online registration closes 3 days before the event. Limited on-spot registrations will be available on a first-come, first-served basis.",
    icon: <Clock className="h-5 w-5 text-squidPink" />,
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 bg-darkAccent relative">
      <div className="absolute top-0 left-0 w-80 h-80 bg-squidGreen/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-squidPink/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-3 py-1 mb-6 font-squid bg-white/5 rounded-full border border-white/10 text-squidPink text-sm">
            GOT QUESTIONS?
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-squid font-bold mb-6 text-white">
            Frequently Asked <span className="text-squidGreen">Questions</span>
          </h2>
          
          <p className="text-lg text-white/80 font-squid max-w-3xl mx-auto">
            Everything you need to know about the DevArrena event.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto reveal">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card border-none rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/5 group">
                  <div className="flex items-center text-left">
                    <div className="mr-4">
                      {faq.icon}
                    </div>
                    <span className="text-white group-hover:text-squidPink transition-colors duration-200">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-white/80">
                  <div className="pl-9">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
