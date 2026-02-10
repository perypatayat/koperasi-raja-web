import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className='relative bg-gradient-to-br from-primary-50 via-white to-blue-50 overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-primary-600 rounded-full blur-3xl'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-primary-400 rounded-full blur-3xl'></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Text Content */}
          <div className='space-y-8'>
            <div className='inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium'>
              <span className='w-2 h-2 bg-primary-600 rounded-full animate-pulse'></span>
              <span>Koperasi Digital Terpercaya</span>
            </div>

            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight'>
              Sistem Koperasi Digital untuk
              <span className='text-primary-600'> Mitra Transportasi</span> & UMKM
            </h1>

            <p className='text-xl text-gray-600 max-w-xl'>Koperasi digital modern, transparan, dan berbasis teknologi untuk meningkatkan kesejahteraan anggota.</p>

            <div className='flex flex-col sm:flex-row gap-4'>
              <Link to='/contact' className='btn-primary group'>
                Gabung Sekarang
                <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </Link>
              <Link to='/services' className='btn-secondary'>
                Pelajari Lebih Lanjut
              </Link>
            </div>

            {/* Trust Badges */}
            <div className='flex items-center gap-8 pt-4'>
              <div className='flex items-center gap-2 text-gray-600'>
                <Shield className='w-5 h-5 text-primary-600' />
                <span className='text-sm font-medium'>Terpercaya</span>
              </div>
              <div className='flex items-center gap-2 text-gray-600'>
                <Users className='w-5 h-5 text-primary-600' />
                <span className='text-sm font-medium'>2000+ Mitra</span>
              </div>
              <div className='flex items-center gap-2 text-gray-600'>
                <TrendingUp className='w-5 h-5 text-primary-600' />
                <span className='text-sm font-medium'>Pertumbuhan 25%</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className='relative hidden lg:block'>
            <div className='relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100'>
              {/* Mock Dashboard */}
              <div className='space-y-6'>
                <div className='flex items-center justify-between'>
                  <h3 className='font-bold text-gray-900'>Statistik Koperasi</h3>
                  <span className='text-sm text-gray-500'>Bulan Ini</span>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <div className='bg-primary-50 rounded-xl p-4'>
                    <p className='text-sm text-gray-600'>Total Mitra</p>
                    <p className='text-2xl font-bold text-primary-600'>2,000+</p>
                  </div>
                  <div className='bg-green-50 rounded-xl p-4'>
                    <p className='text-sm text-gray-600'>Perjalanan/Hari</p>
                    <p className='text-2xl font-bold text-green-600'>350</p>
                  </div>
                </div>

                <div className='space-y-3'>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm text-gray-600'>RAJA Ride</span>
                    <div className='w-24 h-2 bg-gray-200 rounded-full overflow-hidden'>
                      <div className='h-full bg-primary-600 rounded-full' style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm text-gray-600'>RAJA Express</span>
                    <div className='w-24 h-2 bg-gray-200 rounded-full overflow-hidden'>
                      <div className='h-full bg-green-500 rounded-full' style={{ width: "60%" }}></div>
                    </div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm text-gray-600'>RAJA App</span>
                    <div className='w-24 h-2 bg-gray-200 rounded-full overflow-hidden'>
                      <div className='h-full bg-blue-500 rounded-full' style={{ width: "85%" }}></div>
                    </div>
                  </div>
                </div>

                <div className='pt-4 border-t'>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-600'>Pertumbuhan</span>
                    <span className='text-green-600 font-semibold'>+25%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className='absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-bounce'>
              <div className='flex items-center gap-2'>
                <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                <span className='text-sm font-medium'>Aktif</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
