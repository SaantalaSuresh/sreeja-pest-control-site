import { Home, Building2, ShieldCheck, ArrowRight } from "lucide-react";

export default function ServiceAreas() {
  const areas = [
    {
      title: "Residential Pest Control",
      desc: "Complete protection for families. We handle everything from ants to termites.",
      icon: Home,
      image: "/assets/residential.png"
    },
    {
      title: "Commercial Pest Control",
      desc: "Professional management for businesses, hotels, and healthcare facilities.",
      icon: Building2,
      image: "/assets/commercial.png"
    },
    {
      title: "Prevention Services",
      desc: "Source reduction and ongoing maintenance to keep your space secure and pest-free.",
      icon: ShieldCheck,
      image: "/assets/prevention.png"
    }
  ];

  return (
    <section className="section-container bg-brand-light">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <p className="text-brand-orange font-bold uppercase tracking-widest mb-4">VERSATILE PROTECTION</p>
        <h2 className="text-4xl md:text-6xl font-bold text-brand-purple">Dedicated Services For Every Environment</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {areas.map((area, idx) => (
          <div key={idx} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
            <div className="h-64 relative overflow-hidden">
               <img src={area.image} alt={area.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-brand-purple/20 group-hover:bg-brand-purple/0 transition-colors" />
               <div className="absolute top-6 left-6 bg-brand-orange text-white p-3 rounded-2xl shadow-xl">
                  <area.icon size={24} />
               </div>
            </div>
            <div className="p-10">
              <h3 className="text-2xl font-bold text-brand-purple mb-4">{area.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-8">{area.desc}</p>
              <button className="flex items-center gap-2 text-brand-orange font-bold group-hover:gap-4 transition-all">
                Learn More <ArrowRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
