import { Phone, ArrowRight, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-light pt-20">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-purple/5 -skew-x-12 transform origin-top-right hidden lg:block" />
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-brand-orange/10 rounded-full blur-3xl animate-pulse" />

      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange font-bold text-sm mb-6 border border-brand-orange/20">
              <Shield size={16} />
Top Pest Control Services in Tirupati and Surrounding Areas           </div>
            <h1 className="text-5xl md:text-8xl font-bold leading-[1] mb-8 lg:max-w-2xl tracking-tight">
              Keep Your Home <br />
              <span className="text-gradient">Totally Pest Free.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 lg:max-w-lg leading-relaxed font-medium opacity-80">
              We provide professional, eco-friendly pest management solutions to protect your home and business from unwanted invaders with guaranteed results.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="tel:+918790851377"
                className="btn-purple group flex items-center gap-3 px-8 py-4 rounded-2xl shadow-xl hover:shadow-brand-purple/30"
              >
                <Phone size={20} />
                <span>Call +91 9885271305</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="bg-white text-brand-purple px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Visual Piece */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(48,35,65,0.3)] transform hover:scale-[1.02] transition-transform duration-700 animate-float">
              <img
                src="/assets/hero-section-img.png"
                alt="Pest Control Hero"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-2xl shadow-2xl hidden md:block animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="bg-brand-orange p-3 rounded-xl text-white">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="font-bold text-brand-purple">100% Guaranteed</p>
                  <p className="text-xs text-brand-purple/60">Professional Treatment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShieldCheck({ size }: { size: number }) {
  return <Shield size={size} />;
}
