import { Building2, Award, Users, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import VisionMission from "../sections/VisionMission";

const values = [
  {
    icon: Building2,
    title: "Profesionalisme",
    description: "Melayani dengan standar tinggi dan etika profession",
  },
  {
    icon: Users,
    title: "Kerjasama",
    description: "Membangun ekosistem yang menguntungkan semua pihak",
  },
  {
    icon: TrendingUp,
    title: "Pertumbuhan",
    description: "Terus berinovasi untuk kemajuan anggota",
  },
  {
    icon: Award,
    title: "Integritas",
    description: "Menjunjung tinggi transparansi dan kepercayaan",
  },
];

const About = () => {
  return (
    <div>
      {/* Page Header */}
      <section className='bg-primary-900 py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>Tentang Koperasi RAJA</h1>
          <p className='text-primary-200 text-lg max-w-3xl mx-auto'>Koperasi Rukun Amanah Jaya Abadi (RAJA) - Membangun kesejahteraan mitra transportasi online dan UMKM melalui sistem koperasi digital yang transparan dan terpercaya.</p>
        </div>
      </section>

      {/* About Content */}
      <section className='section-padding bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>Siapa Kami?</h2>
              <div className='space-y-4 text-gray-600 leading-relaxed'>
                <p>
                  <strong>Koperasi Rukun Amanah Jaya Abadi (RAJA)</strong> adalah organisasi koperasi yang didirikan dengan visi untuk memberdayakan mitra transportasi online dan pelaku UMKM di Indonesia.
                </p>
                <p>
                  Kami memahami tantangan yang dihadapi oleh mitra transportasi online dan pelaku usaha kecil dalam menjalankan bisnis mereka. Oleh karena itu, kami hadir dengan solusi digital yang terintegrasi untuk membantu meningkatkan
                  pendapatan dan kesejahteraan anggota.
                </p>
                <p>
                  Dengan memanfaatkan teknologi modern, kami menyediakan layanan yang transparan, efisien, dan mudah diakses oleh seluruh anggota. Kami percaya bahwa melalui semangat kebersamaan dan inovasi, kita dapat menciptakan dampak
                  positif yang nyata bagi komunitas.
                </p>
              </div>
            </div>

            <div className='relative'>
              <div className='bg-gradient-to-br from-primary-100 to-blue-100 rounded-2xl p-8'>
                <div className='bg-white rounded-xl shadow-lg p-8'>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>Sektor Kami</h3>
                  <ul className='space-y-4'>
                    <li className='flex items-start gap-3'>
                      <div className='w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                        <span className='text-primary-600 font-bold'>1</span>
                      </div>
                      <div>
                        <strong className='text-gray-900'>Transportasi Online</strong>
                        <p className='text-sm text-gray-600'>Layanan transportasi digital untuk mitra driver</p>
                      </div>
                    </li>
                    <li className='flex items-start gap-3'>
                      <div className='w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                        <span className='text-green-600 font-bold'>2</span>
                      </div>
                      <div>
                        <strong className='text-gray-900'>Koperasi Digital</strong>
                        <p className='text-sm text-gray-600'>Layanan koperasi berbasis teknologi modern</p>
                      </div>
                    </li>
                    <li className='flex items-start gap-3'>
                      <div className='w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                        <span className='text-purple-600 font-bold'>3</span>
                      </div>
                      <div>
                        <strong className='text-gray-900'>Kolaborasi UMKM</strong>
                        <p className='text-sm text-gray-600'>Wadah kerjasama untuk pelaku usaha kecil</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <VisionMission />

      {/* Values */}
      <section className='section-padding bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <SectionTitle subtitle='Nilai-Nilai Kami' title='Prinsip yang Kami Pegang Teguh' />

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {values.map((value, index) => (
              <div key={index} className='card p-6 text-center hover:-translate-y-1 transition-transform'>
                <div className='w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4'>
                  <value.icon className='w-7 h-7 text-primary-600' />
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>{value.title}</h3>
                <p className='text-gray-600 text-sm'>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='section-padding bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold text-gray-900 mb-6'>Bergabunglah Bersama Kami</h2>
          <p className='text-gray-600 text-lg mb-8'>Jadilah bagian dari komunitas yang terus berkembang dan memberikan dampak positif bagi kehidupan mitra transportasi online dan UMKM.</p>
          <Link to='/contact' className='btn-primary inline-flex items-center'>
            Daftar Sekarang
            <ArrowRight className='ml-2 w-5 h-5' />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
