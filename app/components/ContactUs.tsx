// import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter } from "lucide-react";

// export default function ContactUs() {
//   return (
//     <section id="contact" className="section-container bg-white">
//       <div className="text-center mb-20">
//         <p className="text-brand-orange font-bold uppercase tracking-widest mb-4">READY TO HELP</p>
//         <h2 className="text-4xl md:text-6xl font-bold text-brand-purple">Get In Touch With Us</h2>
//       </div>

//       <div className="flex flex-col lg:flex-row gap-16">
//         {/* Contact Info */}
//         <div className="lg:w-5/12 space-y-12">
//           <div>
//             <h3 className="text-3xl font-bold text-brand-purple mb-8">Branch Address</h3>
            
//             <div className="space-y-10">
//               <div className="flex gap-6 items-start group">
//                 <div className="bg-brand-orange/10 p-4 rounded-2xl text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
//                   <MapPin size={24} />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-brand-purple mb-2">Piler Branch</h4>
//                   <p className="text-gray-600 leading-relaxed">
//                     D No:2-3467, 1st Floor,<br />
//                     Chennareddy colony, Piler,<br />
//                     Annamayya District - 517214.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-6 items-start group">
//                 <div className="bg-brand-orange/10 p-4 rounded-2xl text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
//                   <MapPin size={24} />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-brand-purple mb-2">Kurnool Branch</h4>
//                   <p className="text-gray-600 leading-relaxed">
//                     Door No: 45/24-B-5A-1,<br />
//                     2nd Floor ASHOK Nagar Kurnool,<br />
//                     Kurnool District, Pincode 518005.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-4">
//              <h4 className="text-xl font-bold text-brand-purple">Contact Details</h4>
//              <div className="flex items-center gap-3 text-lg font-semibold text-gray-700 hover:text-brand-orange transition-colors">
//                 <Phone size={20} className="text-brand-orange" />
//                 <a href="tel:+918790851377">+91 8790851377</a>
//              </div>
//              <div className="flex items-center gap-3 text-lg font-semibold text-gray-700 hover:text-brand-orange transition-colors">
//                 <Phone size={20} className="text-brand-orange" />
//                 <a href="tel:+919492931535">+91 9492931535</a>
//              </div>
//              <div className="flex items-center gap-3 text-lg font-semibold text-gray-700 hover:text-brand-orange transition-colors">
//                 <Mail size={20} className="text-brand-orange" />
//                 <a href="mailto:info@starpestcontrol.in">info@starpestcontrol.in</a>
//              </div>
//           </div>

//           <div className="flex gap-4">
//              {[Facebook, Instagram, Twitter].map((Icon, i) => (
//                 <a key={i} href="#" className="w-12 h-12 rounded-xl bg-brand-purple/5 text-brand-purple flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all">
//                    <Icon size={20} />
//                 </a>
//              ))}
//           </div>
//         </div>

//         {/* Lead Form */}
//         <div className="lg:w-7/12">
//           <div className="glass-card p-6 md:p-14 rounded-[2rem] relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl" />
            
//             <h3 className="text-2xl font-bold text-brand-purple mb-2">Schedule A Free Inspection</h3>
//             <p className="text-gray-500 mb-10">We'll get back to you within 24 hours.</p>

//             <form className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <input 
//                   type="text" 
//                   placeholder="Your Name" 
//                   className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-brand-orange transition-all outline-none" 
//                   required
//                 />
//                 <input 
//                   type="email" 
//                   placeholder="Email Address" 
//                   className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-brand-orange transition-all outline-none" 
//                   required
//                 />
//               </div>
//               <input 
//                 type="text" 
//                 placeholder="Phone Number" 
//                 className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-brand-orange transition-all outline-none" 
//                 required
//               />
//               <textarea 
//                 placeholder="How can we help you?" 
//                 rows={4} 
//                 className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-brand-orange transition-all outline-none"
//               ></textarea>
              
//               <button className="w-full bg-brand-orange text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:translate-y-[-2px] transition-all hover:shadow-xl active:scale-95">
//                 <Send size={20} />
//                 Get A Free Quote Now
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter } from "lucide-react";

export default function ContactUs() {
  return (
    <section id="contact" className="section-container bg-white">
      <div className="text-center mb-20">
        <p className="text-brand-orange font-bold uppercase tracking-widest mb-4">READY TO HELP</p>
        <h2 className="text-4xl md:text-6xl font-bold text-brand-purple">Get In Touch With Us</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Contact Info */}
        <div className="lg:w-5/12 space-y-12">
          <div>
            <h3 className="text-3xl font-bold text-brand-purple mb-2">Branch Address</h3>

            {/* Owner Name (added without changing UI structure) */}
            <p className="text-gray-500 mb-6">
              Proprietor: <span className="font-semibold text-brand-purple">S. Amaranadha Reddy</span>
            </p>
            
            <div className="space-y-10">
              <div className="flex gap-6 items-start group">
                <div className="bg-brand-orange/10 p-4 rounded-2xl text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-purple mb-2">Main Branch - Tiruchanoor</h4>
                  <p className="text-gray-600 leading-relaxed">
                    8-52, Samajam Street,<br />
                    Tiruchanoor, Tirupati.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-brand-purple">Contact Details</h4>

            <div className="flex items-center gap-3 text-lg font-semibold text-gray-700 hover:text-brand-orange transition-colors">
              <Phone size={20} className="text-brand-orange" />
              <a href="tel:+919885271305">+91 9885271305</a>
            </div>

            <div className="flex items-center gap-3 text-lg font-semibold text-gray-700 hover:text-brand-orange transition-colors">
              <Mail size={20} className="text-brand-orange" />
              <a href="mailto:amaranadhatpt03@gmail.com">amaranadhatpt03@gmail.com</a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 rounded-xl bg-brand-purple/5 text-brand-purple flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Lead Form */}
        <div className="lg:w-7/12">
          <div className="glass-card p-6 md:p-14 rounded-[2rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl" />
            
            <h3 className="text-2xl font-bold text-brand-purple mb-2">Schedule A Free Inspection</h3>
            <p className="text-gray-500 mb-10">We'll get back to you within 24 hours.</p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-brand-orange transition-all outline-none" 
                  required
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-brand-orange transition-all outline-none" 
                  required
                />
              </div>
              <input 
                type="text" 
                placeholder="Phone Number" 
                className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-brand-orange transition-all outline-none" 
                required
              />
              <textarea 
                placeholder="How can we help you?" 
                rows={4} 
                className="w-full bg-gray-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-brand-orange transition-all outline-none"
              ></textarea>
              
              <button className="w-full bg-brand-orange text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:translate-y-[-2px] transition-all hover:shadow-xl active:scale-95">
                <Send size={20} />
                Get A Free Quote Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}