import { useEffect } from "react";
import gsap from "gsap";

export default function Loader({ setLoading }) {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setLoading(false),
    });

    tl.to(".loader-bar", {
      width: "100%",
      duration: 2,
      ease: "power2.inOut",
    }).to(".loader", {
      opacity: 0,
      duration: 0.5,
      delay: 0.3,
    });
  }, [setLoading]);

  return (
    <div className="loader fixed inset-0 flex items-center justify-center bg-brand.green z-50">
      <div className="w-64 h-2 bg-brand.light overflow-hidden rounded">
        <div className="loader-bar h-full bg-white w-0"></div>
      </div>
    </div>
  );
}
