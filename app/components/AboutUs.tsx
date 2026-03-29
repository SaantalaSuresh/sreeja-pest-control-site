import { CheckCircle2, Zap } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="section-container">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        {/* Visual */}
        <div className="lg:w-5/12 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/assets/pc-graphic.png"
              alt="About Star Pest Control"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-brand-purple/10 mix-blend-multiply" />
          </div>
          {/* Accent Piece */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-orange/20 rounded-full blur-3xl" />
          
          <div className="mt-8 glass-card p-8 rounded-3xl border-l-4 border-brand-orange">
             <p className="text-brand-purple italic text-lg leading-relaxed font-serif">
               "We prioritize your safety, delivering reliable solutions to defend your property against destructive pests."
             </p>
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-7/12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-orange text-white font-bold text-xs uppercase tracking-widest mb-6">
            <Zap size={14} />
            Who We Are
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Expert solutions for a <span className="text-gradient">Total Pest-Free</span> environment.
          </h2>
          
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
            <p>
Looking for the best pest control in Tirupati and nearby areas? Your search ends here with Sreeja Pest Control, your trusted partner for reliable and effective pest control services. We ensure a pest-free home by eliminating termites, cockroaches, mosquitoes, rats, spiders, and more.            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                "Residential Pest Control",
                "Commercial Solutions",
                "Government Establishments",
                "Hospitality & Healthcare",
                "Agri & Farmhouse Protection",
                "Industrial Termite Treatment"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 font-semibold text-brand-purple">
                  <CheckCircle2 size={18} className="text-brand-orange" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-6 pt-4">
            <button className="btn-purple px-10 rounded-2xl">Discover Our Story</button>
            
          </div>
        </div>
      </div>
    </section>
  );
}
