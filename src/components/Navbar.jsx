export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-brand.green">Green Nest</h1>
        <ul className="hidden md:flex gap-6 font-medium text-gray-700">
          <li><a href="#about" className="hover:text-brand.green">About</a></li>
          <li><a href="#services" className="hover:text-brand.green">Services</a></li>
          <li><a href="#team" className="hover:text-brand.green">Team</a></li>
          <li><a href="#contact" className="hover:text-brand.green">Contact</a></li>
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-block px-4 py-2 rounded-lg bg-brand.green text-white hover:bg-brand.dark"
        >
          Get a Quote
        </a>
      </div>
    </nav>
  );
}
