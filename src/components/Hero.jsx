import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-green-50 flex items-center justify-center px-6 overflow-hidden">
      
      {/* Leaf Image - Bottom Left Corner */}
      <img 
        src="/leaf.png" 
        alt="Leaf decoration" 
        className="absolute bottom-40 left-[-40px] w-36 md:w-52 opacity-90 pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content with Radial Background */}
        <div className="relative md:w-1/2 text-center md:text-left z-10">
          {/* Background Glow */}
          <div className="absolute inset-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-green-200 opacity-30 rounded-full blur-3xl -left-20 -top-20 pointer-events-none z-0"></div>

          <div className="relative z-10">
            <p className="text-green-700 font-semibold tracking-widest uppercase text-sm mb-4">
              Markets & Resources
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold text-green-900  mb-8">
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
        </div>

        {/* Right Image with Background Shapes */}
        <div className="relative md:w-1/2 mt-10 md:mt-0 flex justify-center z-10">
          {/* Background Shape 1 */}
          <div className="absolute w-[300px] h-[300px] bg-green-200 rounded-full rotate-[60deg] -z-10 bottom-36 right-[40px]"></div>

          {/* Background Shape 2 */}
          <div className="absolute w-[200px] h-[200px] bg-green-300 rounded-full rotate-[30deg] -z-10 bottom-48 right-[80px]"></div>

          {/* Bottom Right Leaf Image */}
          <img 
            src="/leaf1.png"
            alt="Decorative Leaf"
            className="absolute bottom-[-30px] right-[-20px]  w-32 md:w-48 opacity-70 pointer-events-none z-0"
          />

          {/* Gardener Image */}
          <img 
            src="/gardener.png"
            alt="Gardener Woman" 
            className="w-full max-w-md object-contain relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
