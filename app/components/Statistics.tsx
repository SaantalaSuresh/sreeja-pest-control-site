import { Projector as Projects, Users, Clock, Award } from "lucide-react";

export default function Statistics() {
  const stats = [
    { label: "Projects Completed", value: "750+", icon: Projects },
    { label: "Happy Clients", value: "2500+", icon: Users },
    { label: "Years of Experience", value: "10+", icon: Clock },
    { label: "Expert Employees", value: "10+", icon: Award },
  ];

  return (
    <div className="relative py-20 bg-brand-purple overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-brand-orange rounded-full blur-[80px] md:blur-[150px] -translate-y-1/2 translate-x-1/2" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-brand-orange mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon size={32} />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-white/60 font-medium tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
