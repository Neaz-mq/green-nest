import React, { useRef, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCaretDown,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef();
  const containerRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hvs27r7",
        "template_a72ajwj",
        formRef.current,
        "UYc-cRy2E2HxVAyKv"
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
          });
          formRef.current.reset();
        },
        () => {
          toast.error("❌ Failed to send message. Try again!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
          });
        }
      );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate left info box
      gsap.from(".contact-info", {
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-info",
          start: "top 80%",
        },
      });

      // Animate contact form
      gsap.from(".contact-form", {
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="contact"
      className="flex flex-col lg:flex-row justify-center items-center py-8 px-4 md:px-8 lg:px-16 scroll-smooth"
      ref={containerRef}
    >
      {/* Left Info */}
      <div className="flex-1 p-6 md:p-10 lg:p-16 flex flex-col justify-center items-center lg:items-start max-w-lg contact-info">
        <div className="text-left w-full mb-8">
          <p className="text-sm text-[#97d498] uppercase tracking-widest mb-1">
            Get in touch
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600 leading-tight mt-4">
            We want to share our <br className="hidden lg:block" />
            location to find <br className="hidden lg:block" />
            us easily.
          </h1>
        </div>
        <div className="relative w-full">
          <div className="bg-green-700 text-white rounded-xl p-8 shadow-lg flex flex-col gap-6 w-full">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-2xl md:text-3xl bg-white bg-opacity-20 rounded-full p-2" />
              <div>
                <h3 className="font-semibold text-lg">Our Address</h3>
                <p className="text-sm opacity-90">Bd, Bogura Sadar, Bogura.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-2xl md:text-3xl bg-white bg-opacity-20 rounded-full p-2" />
              <div>
                <h3 className="font-semibold text-lg">Our Phone</h3>
                <p className="text-sm opacity-90">+880 130 3660481</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl md:text-3xl bg-white bg-opacity-20 rounded-full p-2" />
              <div>
                <h3 className="font-semibold text-lg">Our Email</h3>
                <p className="text-sm opacity-90">neazmorshed.cse@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex-1 p-6 md:p-10 lg:p-16 bg-white rounded-xl shadow-lg mt-8 lg:mt-0 max-w-xl contact-form">
        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label
                htmlFor="fullName"
                className="text-sm text-gray-600 mb-1 block"
              >
                Name <span className="text-gray-400 text-xs">[required]</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="from_name"
                required
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="phoneNumber"
                className="text-sm text-gray-600 mb-1 block"
              >
                Phone <span className="text-gray-400 text-xs">[optional]</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phone"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label
                htmlFor="email"
                className="text-sm text-gray-600 mb-1 block"
              >
                Email <span className="text-gray-400 text-xs">[required]</span>
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                required
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="services"
                className="text-sm text-gray-600 mb-1 block"
              >
                Services <span className="text-gray-400 text-xs">[required]</span>
              </label>
              <div className="relative">
                <select
                  id="services"
                  name="services"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none pr-10 truncate"
                >
                  <option value="">Choose service</option>
                  <option value="Plant Care">Plant Care</option>
                  <option value="Landscape Design">Landscape Design</option>
                  <option value="Tree Pruning">Tree Pruning</option>
                </select>
                <FaCaretDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none" />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-sm text-gray-600 mb-1 block"
            >
              Your message*
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-500 resize-y"
            ></textarea>
          </div>

          <input type="hidden" name="date" value={new Date().toLocaleDateString()} />
          <input type="hidden" name="time" value={new Date().toLocaleTimeString()} />

          <button
            type="submit"
            className="w-full bg-slate-800 text-white py-3 rounded-lg text-lg font-semibold hover:bg-slate-700 transition-colors duration-300"
          >
            Send message
          </button>
        </form>
      </div>

      {/* Centered Toastify container */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
    </div>
  );
};

export default Contact;
