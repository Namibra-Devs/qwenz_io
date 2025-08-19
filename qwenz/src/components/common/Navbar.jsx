import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">CryptoSite</Link>
        <ul className="flex space-x-6 font-medium">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/markets" className="hover:text-blue-500">Markets</Link></li>
          <li><Link to="/news" className="hover:text-blue-500">News</Link></li>
          <li><Link to="/portfolio" className="hover:text-blue-500">Portfolio</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
