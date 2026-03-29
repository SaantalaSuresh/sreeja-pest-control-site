export default function Clients() {
  const clients = [
    { name: "Greenko", image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Greenko_Logo.png/220px-Greenko_Logo.png" }, // Mock paths
    { name: "Poly Jed Solar", logo: "POLY JED SOLAR" },
    { name: "Axis", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Axis_Bank_logo.svg/2560px-Axis_Bank_logo.svg.png" },
    { name: "Tourist Hotel", logo: "TOURIST HOTEL" },
    { name: "Hotel Palla's Pride", logo: "HOTEL PALLA'S PRIDE" },
  ];

  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="section-container">
        <div className="text-center mb-16">
           <p className="text-brand-orange font-bold uppercase tracking-widest mb-4">OUR TRUSTED PARTNERS</p>
           <h2 className="text-3xl md:text-5xl font-bold text-brand-purple">Who Are Our Clients</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map((client, i) => (
            <div key={i} className="flex items-center justify-center p-4 hover:scale-110 transition-transform">
              {client.image ? (
                <img src={client.image} alt={client.name} className="max-h-12 w-auto object-contain" />
              ) : (
                <span className="font-black text-brand-purple/40 text-sm tracking-tighter text-center">{client.logo}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
