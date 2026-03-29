import React, { useState } from "react";

export default function    PorousPip() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "benefits", label: "Benefits" },
    { id: "installation", label: "Installation" },
    { id: "maintenance", label: "Maintenance" },
  ];

  const content = {
    overview: {
      images: [
        "/assets/porous.jpg",
        "/assets/porous1.jpeg",
        "/assets/porous2.jpg",
      ],
      jsx: (
        <>
          <h2 className="text-2xl font-semibold mb-3">
            What is a Termite Reticulation System?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            A termite reticulation system is a network of underground piping
            installed around a building’s perimeter and beneath its foundation.
            It distributes termiticides evenly to create a protective barrier.
          </p>
        </>
      ),
    },

    features: {
      images: [
        "/assets/porous.jpg",
        "/assets/porous1.jpeg",
        "/assets/porous2.jpg",
      ],
      jsx: (
        <ul className="space-y-3 text-gray-700">
          <li>✔ Even Chemical Distribution</li>
          <li>✔ Rechargeable System</li>
          <li>✔ Discreet Underground Design</li>
        </ul>
      ),
    },

    benefits: {
      images: [
         "/assets/porous.jpg",
        "/assets/porous1.jpeg",
        "/assets/porous2.jpg",
      ],
      jsx: (
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Long-Term Protection",
            "Eco-Friendly Solution",
            "Cost-Effective",
            "Convenient Maintenance",
            "Comprehensive Coverage",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow hover:shadow-md"
            >
              {item}
            </div>
          ))}
        </div>
      ),
    },

    installation: {
      images: [
         "/assets/porous.jpg",
        "/assets/porous1.jpeg",
        "/assets/porous2.jpg",
      ],
      jsx: (
        <div className="space-y-3">
          <Step text="Site Preparation – excavation and leveling" />
          <Step text="Pipe Placement around foundation" />
          <Step text="Chemical Injection into system" />
          <Step text="Sealing for protection" />
        </div>
      ),
    },

    maintenance: {
      images: [
        "/assets/porous.jpg",
        "/assets/porous1.jpeg",
        "/assets/porous2.jpg",
        
      ],
      jsx: (
        <div className="space-y-3">
          <Step text="Refill chemicals every 3–5 years" />
          <Step text="Regular inspections" />
          <Step text="Repair leaks or blockages" />
        </div>
      ),
    },
  };

  const activeContent = content[activeTab];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-8">
        Termite Reticulation System
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-6 border-b pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-t-lg font-medium transition ${
              activeTab === tab.id
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-orange-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {activeContent.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="service"
            className="w-full h-48 object-cover rounded-xl shadow"
          />
        ))}
      </div>

      {/* Content */}
      <div className="bg-gray-50 p-6 rounded-xl shadow">
        {activeContent.jsx}
      </div>

      
      <div className="mt-12 mb-20 rounded-2xl overflow-hidden relative shadow-xl">
  
  <img
    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
    alt="pest control"
    className="absolute w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-orange-600/80"></div>

  <div className="relative p-10 text-center text-white">
    <h2 className="text-3xl font-bold mb-4">
      Termite Protection Starts Today
    </h2>
    <p className="mb-6">
      Secure your home with advanced termite control solutions.
    </p>
    <a
  href="tel:9885271305"
  className="inline-block bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-100 transition"
>
  Contact Now
</a>
  </div>
</div>
    </div>
  );
}

/* Step Component */
const Step = ({ text }) => (
  <div className="bg-orange-50 border-l-4 border-orange-500 p-3 rounded">
    ✔ {text}
  </div>
);