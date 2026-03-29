import { ArrowUpRight } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    { title: "Termites Control", image: "/assets/termites.png", desc: "Advanced liquid soil treatment and baiting systems." },
    { title: "Rodent Protection", image: "/assets/mouse.png", desc: "Humane and effective rodent exclusion strategies." },
    { title: "Ant Control", image: "/assets/ant.png", desc: "Targeted elimination of colony nests and pheromones." },
    { title: "Mosquito Mgmt", image: "/assets/mosquito.png", desc: "Seasonal protection and source reduction programs." },
    { title: "Fly Management", image: "/assets/flies.png", desc: "Sanitation advice and specialized light traps." },
    { title: "Cockroach Control", image: "/assets/cockroach.png", desc: "Gel baiting and growth regulators for long-term fix." },
    { title: "Snake Rescue", image: "/assets/snake.png", desc: "Professional snake removal and property proofing." },
    { title: "Spider Control", image: "/assets/spider.png", desc: "De-webbing and specialized exterior treatments." },
  ];

  return (
    <section id="services" className="section-container bg-white">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className="md:w-2/3">
          <p className="text-brand-orange font-bold uppercase tracking-widest mb-4">OUR SPECIALIZED SOLUTIONS</p>
          <h2 className="text-4xl md:text-6xl font-bold text-brand-purple">Defend your space from <br/><span className="text-gradient">all household pests.</span></h2>
        </div>
        <div className="md:w-1/3">
           <p className="text-gray-500 text-lg">We use the latest technology and eco-friendly products to ensure your environment is safe and pest-free.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div 
            key={service.title} 
            className="group glass-card rounded-[2rem] overflow-hidden hover-lift border-0"
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center transform translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
                 <ArrowUpRight className="text-brand-purple" />
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-brand-purple mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
