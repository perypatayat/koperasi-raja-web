import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoRaja from "../assets/raja-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Beranda" },
    { path: "/about", label: "Tentang" },
    { path: "/services", label: "Layanan" },
    { path: "/contact", label: "Kontak" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className='bg-white shadow-md sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-24'>
          <Link to='/' className='flex items-center space-x-3'>
            <img src={logoRaja} alt='Logo Koperasi RAJA' className='h-14 md:h-16 w-auto object-contain' />

            <div className='leading-tight'>
              <h1 className='text-lg md:text-xl font-bold text-primary-700'>Koperasi RAJA</h1>
              <p className='text-xs md:text-sm text-gray-500'>Rukun Amanah Jaya Abadi</p>
            </div>
          </Link>

          <div className='hidden md:flex items-center space-x-8 h-full'>
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className={`font-medium transition-colors duration-200 ${isActive(item.path) ? "text-primary-600" : "text-gray-600 hover:text-primary-600"}`}>
                {item.label}
              </Link>
            ))}
            <Link to='/contact' className='btn-primary text-sm py-2'>
              Gabung Sekarang
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className='md:hidden p-2 rounded-lg hover:bg-gray-100'>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className='md:hidden bg-white border-t'>
          <div className='px-4 py-4 space-y-3'>
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className={`block px-4 py-2 rounded-lg font-medium ${isActive(item.path) ? "bg-primary-50 text-primary-600" : "text-gray-600 hover:bg-gray-50"}`}>
                {item.label}
              </Link>
            ))}
            <Link to='/contact' onClick={() => setIsOpen(false)} className='block btn-primary text-center'>
              Gabung Sekarang
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
