import { Eye, Target, Lightbulb } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const VisionMission = () => {
  return (
    <section className='section-padding bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionTitle subtitle='Visi & Misi' title='Membangun Koperasi Digital Masa Depan' />

        {/* Visi */}
        <div className='card p-8 mb-8 border-l-4 border-primary-600'>
          <div className='flex items-start gap-6'>
            <div className='flex-shrink-0'>
              <div className='w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center'>
                <Eye className='w-8 h-8 text-primary-600' />
              </div>
            </div>
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Visi</h3>
              <p className='text-lg text-gray-600 leading-relaxed'>
                Menjadi koperasi digital terpercaya yang memberdayakan mitra transportasi online dan UMKM melalui teknologi modern, transparansi, dan pelayanan prima untuk kesejahteraan anggota.
              </p>
            </div>
          </div>
        </div>

        {/* Misi */}
        <div className='grid md:grid-cols-3 gap-6'>
          <div className='card p-6 hover:shadow-lg transition-shadow'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center'>
                <Target className='w-6 h-6 text-green-600' />
              </div>
              <h4 className='text-lg font-bold text-gray-900'>Layanan Prima</h4>
            </div>
            <p className='text-gray-600'>Menyediakan layanan koperasi yang mudah, transparan, dan terjangkau bagi seluruh anggota dengan memanfaatkan teknologi digital.</p>
          </div>

          <div className='card p-6 hover:shadow-lg transition-shadow'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center'>
                <Lightbulb className='w-6 h-6 text-blue-600' />
              </div>
              <h4 className='text-lg font-bold text-gray-900'>Ekonomi Anggota</h4>
            </div>
            <p className='text-gray-600'>Meningkatkan kesejahteraan ekonomi anggota melalui program pengembangan dan kolaborasi dengan UMKM dan mitra yang berkelanjutan dan menguntungkan bagi semua pihak.</p>
          </div>

          <div className='card p-6 hover:shadow-lg transition-shadow'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center'>
                <Target className='w-6 h-6 text-purple-600' />
              </div>
              <h4 className='text-lg font-bold text-gray-900'>Inovasi Teknologi</h4>
            </div>
            <p className='text-gray-600'>Mengembangkan sistem berbasis teknologi untuk efisiensi operasional dan meningkatkan daya saing di era digital.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
