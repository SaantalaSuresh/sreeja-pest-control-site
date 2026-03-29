import { ShieldCheck, Zap } from "lucide-react";

export default function InfoBar() {
  return (
    <div className="relative -mt-16 z-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-brand-purple rounded-[2.5rem] p-4 shadow-[0_20px_50px_rgba(48,35,65,0.4)] border border-white/5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-4 md:px-8 py-6">
            <div className="flex items-center gap-6">
              <div className="bg-brand-orange text-white p-4 rounded-2xl animate-pulse">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h4 className="text-white text-xl font-bold mb-1">Serving Tirupati, Renigunta, Chandragiri, Tiruchanur, Srikalahasti, and surrounding areas.</h4>
                <p className="text-white/60 font-medium">Over 10+ years of dedicated pest control expertise.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
               <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-brand-purple bg-gray-200 overflow-hidden">
                       <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-brand-purple bg-brand-orange flex items-center justify-center text-white text-xs font-bold">
                    +1.5k
                  </div>
               </div>
               <p className="text-white font-bold">Happy Clients Served</p>
            </div>

            <a 
              href="tel:+918790851377"
              className="group bg-brand-orange text-white px-10 py-5 rounded-3xl font-black text-lg flex items-center gap-3 hover:translate-y-[-2px] transition-all hover:shadow-[0_10px_30px_rgba(241,110,55,0.4)] active:scale-95"
            >
              <Zap size={24} className="group-hover:animate-bounce" />
              GET FREE INSPECTION
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
