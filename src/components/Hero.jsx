import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-green-50 flex items-center justify-center px-6 overflow-hidden">
      {/* Leaf Image - Bottom Left Corner (Adjusted Position) */}
      <img 
        src="/leaf.png" 
        alt="Leaf decoration" 
        className="absolute bottom-[-40px] left-[-40px] w-36 md:w-48 opacity-90 pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-green-700 font-semibold tracking-widest uppercase text-sm mb-2">
            Markets & Resources
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight mb-6">
            Planting a garden is <br /> similar to believe in <br /> tomorrow
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button className="bg-green-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-800 transition">
              Get A Quote
            </button>
            <button className="border border-green-700 text-green-700 px-6 py-3 rounded-md font-semibold hover:bg-green-100 transition">
              Read More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img 
            src="/gardener.png"
            alt="Gardener Woman" 
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
