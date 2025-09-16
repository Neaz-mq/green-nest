import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const leafRef = useRef(null);
  const leaf1Ref = useRef(null);
  const gardenerRef = useRef(null);
  const shape1Ref = useRef(null);
  const shape2Ref = useRef(null);
  const textRef = useRef([]);
  const buttonsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text Animation - fast & snappy
      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });

      // Buttons - quick pop
      gsap.from(buttonsRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "back.out(1.5)",
        stagger: 0.2,
        delay: 0.6,
      });

      // Gardener - slide in fast
      gsap.from(gardenerRef.current, {
        x: 150,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      });

      // Leaf Bottom Left - faster float
      gsap.to(leafRef.current, {
        y: -25,
        repeat: -1,
        yoyo: true,
        duration: 3.5,
        ease: "sine.inOut",
      });

      // Leaf Bottom Right - faster float
      gsap.to(leaf1Ref.current, {
        y: -20,
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: "sine.inOut",
      });

      // Background shapes - faster subtle parallax
      gsap.to(shape1Ref.current, {
        y: -20,
        rotation: 8,
        repeat: -1,
        yoyo: true,
        duration: 4.5,
        ease: "sine.inOut",
      });

      gsap.to(shape2Ref.current, {
        y: -15,
        rotation: -8,
        repeat: -1,
        yoyo: true,
        duration: 5,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative bg-green-50 flex items-center justify-center px-6 overflow-hidden"
    >
      <img
        ref={leafRef}
        src="/leaf.png"
        alt="Leaf decoration"
        className="absolute md:bottom-40 bottom-0 left-[-40px] w-36 md:w-52 opacity-90 pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between md:mt-0 mt-6">
        <div className="relative md:w-1/2 text-center md:text-left z-10">
          <div className="absolute inset-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] md:bg-green-200 bg-green-50 opacity-30 rounded-full blur-3xl -left-20 -top-20 pointer-events-none z-0"></div>

          <div className="relative">
            <p
              ref={(el) => (textRef.current[0] = el)}
              className="text-green-700 font-semibold tracking-widest uppercase text-sm mb-4"
            >
              Markets & Resources
            </p>
            <h1
              ref={(el) => (textRef.current[1] = el)}
              className="text-4xl md:text-6xl font-semibold text-green-900 mb-8"
            >
              Planting a garden is <br /> similar to believe in <br /> tomorrow
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-4">
              <button
                ref={(el) => (buttonsRef.current[0] = el)}
                className="bg-green-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-800 transition"
              >
                Get A Quote
              </button>
              <button
                ref={(el) => (buttonsRef.current[1] = el)}
                className="border border-green-700 text-green-700 px-6 py-3 rounded-md font-semibold hover:bg-green-100 transition"
              >
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="relative md:w-1/2 mt-10 md:mt-0 flex justify-center z-10">
          <div
            ref={shape1Ref}
            className="absolute md:w-[300px] md:h-[300px] w-[250px] h-[250px] bg-green-200 rounded-full rotate-[60deg] -z-10 bottom-36 md:right-[40px] right-[20px]"
          ></div>
          <div
            ref={shape2Ref}
            className="absolute md:w-[200px] md:h-[200px] w-[180px] h-[180px] bg-green-300 rounded-full rotate-[30deg] -z-10 md:bottom-48 bottom-44 md:right-[80px] right-[40px]"
          ></div>

          <img
            ref={leaf1Ref}
            src="/leaf1.png"
            alt="Decorative Leaf"
            className="absolute bottom-[-30px] md:right-[-80px] right-[-60px] w-32 md:w-48 opacity-70 pointer-events-none z-0"
          />

          <img
            ref={gardenerRef}
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
