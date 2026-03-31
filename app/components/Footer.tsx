import { Link } from "react-router";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-purple text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange via-brand-purple to-brand-orange opacity-30" />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <Link to="/" className="inline-block bg-white p-3 rounded-2xl shadow-xl">
              <img src="/assets/spc-logo.png" alt="Star Pest Control" className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-white/60 leading-relaxed text-lg italic">
              "Providing the most effective and eco-friendly pest control services across AP & Telangana for over a decade."
            </p>
            <div className="flex gap-4">
               {[Facebook, Instagram, Twitter].map((Icon, i) => (
                 <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all">
                    <Icon size={20} />
                 </a>
               ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center gap-3">
               <div className="w-6 h-1 bg-brand-orange rounded-full" />
               Quick Links
            </h4>
            <ul className="space-y-4 text-white/70 font-medium">
              <li><Link to="#about" className="hover:text-brand-orange transition-colors">About Our Company</Link></li>
              <li><Link to="#services" className="hover:text-brand-orange transition-colors">Our Special Services</Link></li>
              <li><Link to="#solutions" className="hover:text-brand-orange transition-colors">Pest Solutions</Link></li>
              <li><Link to="#contact" className="hover:text-brand-orange transition-colors">Request a Quote</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center gap-3">
               <div className="w-6 h-1 bg-brand-orange rounded-full" />
               Contact Info
            </h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                 <MapPin className="text-brand-orange mt-1" size={20} />
<span className="text-white/70">
  8-52, Samajam Street, Tiruchanoor, Tirupati.
</span>              </li>
              <li className="flex gap-4 items-center">
                 <Phone className="text-brand-orange" size={20} />
                 <span className="text-white/70">+91 9885271305</span>
              </li>
              <li className="flex gap-4 items-center">
                 <Mail className="text-brand-orange" size={20} />
                 <span className="text-white/70">amaranadhatpt03@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Certification */}
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
             <div className="flex items-center gap-4 mb-6">
                <div className="bg-brand-orange/20 p-3 rounded-2xl text-brand-orange">
                   <ShieldCheck size={32} />
                </div>
                
             </div>
             <p className="text-white/50 text-sm leading-relaxed">
               We follow international standards for quality management and safety protocols in every treatment.
             </p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-white/40 font-medium tracking-wide">
          <p>© 2023 Star Pest Control. All Rights Reserved.</p>
         
        </div>
      </div>
    </footer>
  );
}
