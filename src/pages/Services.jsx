import { Car, Package, Smartphone, Clock, Shield, MapPin, CreditCard } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Car,
    title: "RAJA Ride",
    subtitle: "Transportasi Online",
    description: "Layanan transportasi online yang menghubungkan mitra driver dengan penumpang. Nikmati akses ke pasar yang luas, pendapatan yang stabil, dan dukungan penuh dari tim kami.",
    color: "bg-blue-500",
    features: [
      { icon: MapPin, text: "Akses ke pasar luas" },
      { icon: Clock, text: "Fleksibilitas waktu kerja" },
      { icon: Shield, text: "Asuransi driver" },
      { icon: CreditCard, text: "Pembayaran digital" },
    ],
    benefits: ["Pendapatan kompetitif dengan sistem yang transparan", "Bantuan 24/7 dari tim support kami", "Program pelatihan dan pengembangan skill", "Akses ke berbagai promo dan insentif"],
  },
  {
    icon: Package,
    title: "RAJA Express",
    subtitle: "Kurir & Pengiriman",
    description: "Jasa kurir dan pengiriman barang yang cepat, aman, dan terpercaya. Solusi logistik lengkap untuk kebutuhan pengiriman personal maupun bisnis.",
    color: "bg-green-500",
    features: [
      { icon: Clock, text: "Pengiriman express" },
      { icon: MapPin, text: "Pelacakan real-time" },
      { icon: Shield, text: "Asuransi pengiriman" },
      { icon: CreditCard, text: "Tarif kompetitif" },
    ],
    benefits: ["Jaringan pengiriman ke seluruh wilayah", "Layanan pelanggan profesional", "Sistem pelacakan barang online", "Pilihan pengiriman sesuai kebutuhan"],
  },
  {
    icon: Smartphone,
    title: "RAJA App",
    subtitle: "Aplikasi Digital Koperasi",
    description: "Aplikasi all-in-one yang memudahkan anggota mengakses seluruh layanan koperasi. Kemudahan dalam genggaman untuk memaksimalkan pengalaman anggota.",
    color: "bg-purple-500",
    features: [
      { icon: Smartphone, text: "One-stop solution" },
      { icon: CreditCard, text: "Transaksi digital" },
      { icon: Clock, text: "Notifikasi pintar" },
      { icon: Shield, text: "Keamanan data" },
    ],
    benefits: ["Akses ke seluruh layanan dalam satu app", "Transaksi cepat dan aman", "Informasi dan notifikasi terbaru", "Pengelolaan keanggotaan mudah"],
  },
];

const Services = () => {
  return (
    <div>
      {/* Page Header */}
      <section className='bg-primary-900 py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>Layanan Kami</h1>
          <p className='text-primary-200 text-lg max-w-3xl mx-auto'>Berbagai layanan digital yang dirancang untuk memenuhi kebutuhan mitra transportasi online dan UMKM, didukung teknologi modern dan pelayanan prima.</p>
        </div>
      </section>

      {/* Services Detail */}
      <section className='section-padding bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20'>
          {services.map((service, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className={`inline-flex items-center gap-2 ${service.color} bg-opacity-10 px-4 py-2 rounded-full mb-6`}>
                  <service.icon className={`w-5 h-5 ${service.color.replace("bg-", "text-")}`} />
                  <span className={`font-medium ${service.color.replace("bg-", "text-")}`}>{service.subtitle}</span>
                </div>

                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>{service.title}</h2>

                <p className='text-gray-600 text-lg mb-8 leading-relaxed'>{service.description}</p>

                {/* Features Grid */}
                <div className='grid grid-cols-2 gap-4 mb-8'>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className='flex items-center gap-3 p-4 bg-gray-50 rounded-xl'>
                      <div className={`w-10 h-10 ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <feature.icon className='w-5 h-5 text-white' />
                      </div>
                      <span className='text-gray-700 font-medium text-sm'>{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div className='space-y-3'>
                  <h3 className='font-bold text-gray-900'>Keuntungan:</h3>
                  <ul className='space-y-2'>
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className='flex items-start gap-2 text-gray-600'>
                        <div className='w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                          <svg className='w-3 h-3 text-green-600' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                          </svg>
                        </div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Visual */}
              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className='bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-8 h-full flex items-center justify-center'>
                  <div className='text-center'>
                    <div className={`w-32 h-32 ${service.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                      <service.icon className='w-16 h-16 text-white' />
                    </div>
                    <div className='space-y-2'>
                      <div className='h-1 w-24 bg-gray-200 rounded-full mx-auto'></div>
                      <div className='h-1 w-16 bg-gray-200 rounded-full mx-auto'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to Join */}
      <section className='section-padding bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <SectionTitle subtitle='Cara Bergabung' title='Mulai Sekarang' />

          <div className='grid md:grid-cols-4 gap-6'>
            {[
              { step: "1", title: "Daftar", desc: "Isi form pendaftaran online" },
              { step: "2", title: "Verifikasi", desc: "Proses verifikasi data" },
              { step: "3", title: " Aktivasi", desc: " Aktivasi keanggotaan" },
              { step: "4", title: "Nikmati", desc: "Akses seluruh layanan" },
            ].map((item, index) => (
              <div key={index} className='text-center'>
                <div className='w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4'>{item.step}</div>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>{item.title}</h3>
                <p className='text-gray-600 text-sm'>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className='text-center mt-12'>
            <Link to='/contact' className='btn-primary inline-flex items-center'>
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
