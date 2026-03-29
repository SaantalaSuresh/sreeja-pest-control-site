import { Truck, BadgeCheck, CircleDollarSign, ShieldCheck, HeartPulse, Timer } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    { title: "No Visiting Charges", icon: Truck, desc: "A complimentary initial inspection with no initial expenses." },
    { title: "Certified Technicians", icon: BadgeCheck, desc: "Equipped with necessary expertise and training to handle any pest issue." },
    { title: "Reasonable Price", icon: CircleDollarSign, desc: "Top-notch quality with cost-effective solutions for your property." },
    { title: "Service Warranty", icon: ShieldCheck, desc: "Commitment to resolving recurring concerns without additional costs." },
    { title: "100% Satisfaction", icon: HeartPulse, desc: "We strive to exceed expectations and guarantee your satisfaction." },
    { title: "Ontime Completion", icon: Timer, desc: "Prompt and effective solutions to resolve your pest issues without delay." },
  ];

  return (
    <section className="bg-brand-purple py-32 overflow-hidden relative">
      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent opacity-5" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <p className="text-brand-orange font-bold uppercase tracking-widest mb-4">ENJOY YOUR HOME TOTALLY PEST FREE</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Why Choose Star Pest Control</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/20 text-brand-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-white/60 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
