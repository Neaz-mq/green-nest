import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: "🌿",
    title: "Landscaping",
    description:
      "Transform your outdoor space with custom designs, stone pathways, garden beds, and natural elements tailored to your property.",
  },
  {
    icon: "✂️",
    title: "Pruning Plants",
    description:
      "Maintain plant health and aesthetics by trimming overgrowth, removing dead branches, and shaping trees and shrubs professionally.",
  },
  {
    icon: "🧺",
    title: "Lawn Maintenance",
    description:
      "Ensure a lush, green lawn year-round with mowing, edging, fertilizing, weed control, and seasonal cleanup services.",
  },
  {
    icon: "💧",
    title: "Irrigation & Drainage",
    description:
      "Install and maintain efficient irrigation systems and drainage solutions to keep your landscape healthy and water-efficient.",
  },
];

const Landscaping = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".service-card", {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".service-card",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="services"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white scroll-smooth"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-green-600 text-3xl">{service.icon}</span>
                <h3 className="text-lg font-bold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landscaping;
