import Hero from "../sections/Hero";
import Features from "../sections/Features";
import Stats from "../sections/Stats";
import ServicesPreview from "../sections/ServicesPreview";
import VisionMission from "../sections/VisionMission";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Stats Section */}
      <Stats />

      {/* Services Preview Section */}
      <ServicesPreview />

      {/* Vision Mission Preview */}
      <VisionMission />

      {/* CTA Section */}
      <section className='section-padding bg-primary-900'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>Siap Bergabung dengan Koperasi RAJA?</h2>
          <p className='text-primary-200 text-lg mb-8 max-w-2xl mx-auto'>Jadilah bagian dari komunitas mitra transportasi online dan UMKM yang berkembang. Daftar sekarang dan n berbagai benefits menarik.</p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link to='/contact' className='btn-primary bg-white text-primary-600 hover:bg-gray-100'>
              Gabung Sekarang
            </Link>
            <Link to='/about' className='border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition'>
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
