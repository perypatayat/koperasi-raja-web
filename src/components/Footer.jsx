import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import logoRaja from "../assets/raja-logo.png";

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Brand */}
          <div className='col-span-1 md:col-span-2'>
            {/* Brand */}
            <div className='col-span-1 md:col-span-2'>
              <div className='mb-4'>
                <img src={logoRaja} alt='Logo Koperasi RAJA' className='h-16 w-auto object-contain' />
              </div>
            </div>
            <p className='text-gray-400 mb-6 max-w-md'>Koperasi Rukun Amanah Jaya Abadi (RAJA) - Sistem koperasi digital untuk mitra transportasi online & UMKM. Membangun ekonomi anggota melalui teknologi dan transparansi.</p>
            <div className='flex space-x-4'>
              <a href='#' className='p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors'>
                <Facebook size={20} />
              </a>
              <a href='#' className='p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors'>
                <Instagram size={20} />
              </a>
              <a href='#' className='p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors'>
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-white font-semibold mb-4'>Menu</h3>
            <ul className='space-y-2'>
              <li>
                <Link to='/' className='hover:text-primary-400 transition-colors'>
                  Beranda
                </Link>
              </li>
              <li>
                <Link to='/about' className='hover:text-primary-400 transition-colors'>
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to='/services' className='hover:text-primary-400 transition-colors'>
                  Layanan
                </Link>
              </li>
              <li>
                <Link to='/contact' className='hover:text-primary-400 transition-colors'>
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-white font-semibold mb-4'>Hubungi Kami</h3>
            <ul className='space-y-3'>
              <li className='flex items-center space-x-3'>
                <Mail size={18} className='text-primary-400' />
                <span className='text-sm'>rajatransportasi99@gmail.com</span>
              </li>
              <li className='flex items-center space-x-3'>
                <Phone size={18} className='text-primary-400' />
                <span className='text-sm'>0821-3467-5554</span>
              </li>
              <li className='flex items-start space-x-3'>
                <MapPin size={18} className='text-primary-400 mt-1' />
                <span className='text-sm'>Pool Taxi BKK, Husein Sastranegara, Tangerang</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-800 mt-12 pt-8 text-center'>
          <p className='text-gray-500 text-sm'>© {new Date().getFullYear()} Koperasi RAJA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
