import { Search, Bug, SprayCan } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "INSPECT",
      description: "We pinpoint the exact pest issues and nesting zones in your property.",
      icon: Search
    },
    {
      number: "02",
      title: "IDENTIFY",
      description: "Our experts identify the species and the root cause of the infestation.",
      icon: Bug
    },
    {
      number: "03",
      title: "TREAT",
      description: "Application of eco-friendly and guaranteed treatments for lasting results.",
      icon: SprayCan
    }
  ];

  return (
    <section className="bg-brand-light py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <p className="text-brand-orange font-bold uppercase tracking-widest mb-4">OUR METHODOLOGY</p>
          <h2 className="text-4xl md:text-6xl font-bold text-brand-purple leading-tight">Three Step Pest Control Process</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-brand-orange/20 -translate-y-12 z-0" />
           
          {steps.map((step, idx) => (
            <div key={step.number} className="relative z-10 group">
              <div className="glass-card p-12 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 flex flex-col items-center text-center border-0">
                <div className="w-24 h-24 rounded-3xl bg-brand-orange/5 text-brand-orange flex items-center justify-center mb-8 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 rotate-3 group-hover:rotate-0 shadow-inner">
                  <step.icon size={40} />
                </div>
                <div className="bg-brand-orange/10 text-brand-orange text-xs font-black px-4 py-1.5 rounded-full mb-6">
                  STEP {step.number}
                </div>
                <h3 className="text-3xl font-bold text-brand-purple mb-6">{step.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
