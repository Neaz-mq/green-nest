import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);

          let start = 0;
          const end = 20; // Target number
          const duration = 2000; // Total duration in ms
          const stepTime = Math.abs(Math.floor(duration / end));

          const timer = setInterval(() => {
            start += 1;
            setCount(start);

            if (start === end) {
              clearInterval(timer);
            }
          }, stepTime); 
        }
      },
      { threshold: 0.5 } // Starts when 50% of badge is visible
    );

    const currentRef = counterRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasStarted]);

  return (
    <div
      id="about"
      className="md:py-28 py-10 px-4 sm:px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-10 bg-white max-w-7xl mx-auto scroll-smooth"
    >
      {/* Left Side - Image with overlay */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] rounded-full">
          {/* Image wrapper */}
          <div className="w-full h-full rounded-full overflow-hidden">
            <img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1757489734/the-girl-in-the-glasses_xmftxv.jpg"
              alt="Gardener"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Circle overlay */}
          <div className="absolute md:-top-16 -top-8 right-0 md:w-24 md:h-24 w-16 h-16 border-8 border-green-600 rounded-full z-20 "></div>

          {/* Experience Badge with counter */}
          <div
            ref={counterRef}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-10 bg-green-600 text-white px-8 py-5 rounded-md shadow-md text-sm font-semibold flex items-center gap-3 border border-white"
          >
            <span className="text-3xl font-bold leading-none">{count}</span>
            <div className="leading-tight text-[13px]">
              Years Of <br /> experience
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Text */}
      <div className="w-full lg:w-1/2">
        <p className="text-green-600 text-sm font-semibold tracking-widest uppercase mb-4">
          About Us
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          The Best Choice For <br /> your Business.
        </h2>

        <p className="text-gray-600 mb-8">
          Our team ensures every garden is tailored to your lifestyle — whether
          you're seeking tranquility, productivity, or visual impact.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="flex items-start gap-4">
            <div className="text-green-600 text-3xl">⚙️</div>
            <div>
              <h4 className="text-md font-semibold text-gray-900">
                Expert Designers
              </h4>
              <p className="text-gray-600 text-sm">
                Our creative professionals design custom landscapes that reflect
                your vision.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-green-600 text-3xl">💻</div>
            <div>
              <h4 className="text-md font-semibold text-gray-900">
                Modern Tools
              </h4>
              <p className="text-gray-600 text-sm">
                We use advanced tech and sustainable practices for quality and
                efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* Box image and CTA */}
        <div className="flex items-center gap-10 flex-wrap ">
          <button className="bg-green-600 text-white px-6 py-3 rounded font-semibold hover:bg-green-700 transition duration-300">
            Get A Quote
          </button>
          <img
            src="/box.jpg"
            alt="Box of flowers"
            className="w-32 h-32 object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
