export default function Footer() {
  return (
    <footer className="bg-brand.dark text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-xl font-bold">Green Nest</h2>
          <p className="text-sm mt-2">Smart garden & landscaping solutions for modern spaces.</p>
        </div>
        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#about" className="hover:text-brand.light">About</a></li>
            <li><a href="#services" className="hover:text-brand.light">Services</a></li>
            <li><a href="#contact" className="hover:text-brand.light">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Follow Us</h3>
          <p className="text-sm mt-2">Instagram • Facebook • Twitter</p>
        </div>
      </div>
      <div className="text-center py-4 text-xs border-t border-white/20">
        © {new Date().getFullYear()} Green Nest. All rights reserved.
      </div>
    </footer>
  );
}
