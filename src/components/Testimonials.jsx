import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonial-card",
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="testimonials"
      className="md:py-28 py-10 text-center scroll-smooth"
      ref={containerRef}
    >
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h3 className="text-sm font-medium tracking-[2px] text-[#97d498] uppercase mb-2">
            CLIENT TESTIMONIALS
          </h3>
          <h2 className="text-4xl font-semibold text-[#2b392b]">
            What our clients say
          </h2>
        </div>

        <div className="flex flex-wrap justify-center 2xl:gap-8 xl:gap-8 lg:gap-16 gap-32 md:mt-20 mt-24">
          {/* Testimonial Card 1 */}
          <div className="testimonial-card relative p-8 pt-16 bg-[#e9f5e9] rounded-xl shadow-md border border-transparent w-[350px]">
            <img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1757925789/staff-box1_xyl6fu.jpg"
              alt="Eugene Freeman"
              className="absolute top-[-45px] left-1/2 transform -translate-x-1/2 w-[90px] h-[90px] rounded-full border-4 border-[#89c58a] shadow-lg"
            />
            <div className="text-left">
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                "The online course on sustainable gardening was a game-changer
                for me. I finally have a garden that not only looks great but
                also helps the environment. The instructions were so easy to
                follow!"
              </p>
            </div>
            <h4 className="text-lg font-semibold text-[#2b392b] mt-4">
              Eugene Freeman
            </h4>
            <p className="text-sm text-gray-500">Urban Gardener</p>
            <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 w-[50px] h-[50px] flex items-center justify-center text-4xl text-[#97d498] font-serif bg-white rounded-full shadow-lg border border-gray-200">
              “
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div
            className="testimonial-card relative p-8 pt-16 bg-[#e9f5e9] rounded-xl shadow-md border border-[#97d498] w-[350px]"
            style={{
              backgroundImage:
                'url(https://res.cloudinary.com/dxohwanal/image/upload/v1757926319/Mask-testimonial-box.a92ffa6d_xahu2n.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1757925804/staff-box2_gmcqma.jpg"
              alt="Kelly Coleman"
              className="absolute top-[-45px] left-1/2 transform -translate-x-1/2 w-[90px] h-[90px] rounded-full border-4 border-[#89c58a] shadow-lg"
            />
            <div className="text-left">
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                "I've been gardening for years, but this site gave me so many new ideas. The community forum is amazing, and I love the detailed guides on companion planting. Highly recommend for any plant lover!"
              </p>
            </div>
            <h4 className="text-lg font-semibold text-[#2b392b] mt-4">
              Kelly Coleman
            </h4>
            <p className="text-sm text-gray-500">Hobbyist</p>
            <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 w-[50px] h-[50px] flex items-center justify-center text-4xl text-[#97d498] font-serif bg-white rounded-full shadow-lg border border-gray-200">
              “
            </div>
          </div>

          {/* Testimonial Card 3 */}
          <div className="testimonial-card relative p-8 pt-16 bg-[#e9f5e9] rounded-xl shadow-md border border-transparent w-[350px]">
            <img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1757925813/staff-box3_op0uhf.jpg"
              alt="Philip Mendez"
              className="absolute top-[-45px] left-1/2 transform -translate-x-1/2 w-[90px] h-[90px] rounded-full border-4 border-[#89c58a] shadow-lg"
            />
            <div className="text-left">
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                "My biggest problem was keeping my herbs alive. After following the advice on this site, my kitchen garden is thriving! The personalized tips on soil and sunlight made all the difference."
              </p>
            </div>
            <h4 className="text-lg font-semibold text-[#2b392b] mt-4">
              Philip Mendez
            </h4>
            <p className="text-sm text-gray-500">Home Cook</p>
            <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 w-[50px] h-[50px] flex items-center justify-center text-4xl text-[#97d498] font-serif bg-white rounded-full shadow-lg border border-gray-200">
              “
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
