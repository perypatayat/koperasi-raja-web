import { Link } from "react-router-dom";
import { Car, Package, Smartphone } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const services = [
  {
    icon: Car,
    title: "RAJA Ride",
    description: "Layanan transportasi online untuk mitra driver. Akses mudah, tarif kompetitif, dan penghasilan terjamin.",
    color: "bg-blue-500",
    features: ["Penumpang Online", "Akses Pasar Luas", "Pendapatan Stabil"],
  },
  {
    icon: Package,
    title: "RAJA Express",
    description: "Jasa kurir dan pengiriman barang cepat dan terpercaya. Solusi logistik untuk kebutuhan pribadi dan bisnis.",
    color: "bg-green-500",
    features: ["Pengiriman Cepat", "Pelacakan Real-time", "Tarif Terjangkau"],
  },
  {
    icon: Smartphone,
    title: "RAJA App",
    description: "Aplikasi digital koperasi untuk memudahkan anggota mengakses berbagai layanan.",
    color: "bg-purple-500",
    features: ["One-stop Solution", "Transaksi Digital", "Notifikasi Pintar"],
  },
];

const ServicesPreview = () => {
  return (
    <section className='section-padding bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionTitle subtitle='Layanan Kami' title='Solusi Digital untuk Setiap Kebutuhan' />

        <div className='grid md:grid-cols-3 gap-8 mb-12'>
          {services.map((service, index) => (
            <div key={index} className='card p-6 group hover:-translate-y-2 transition-all duration-300'>
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className='w-8 h-8 text-white' />
              </div>

              <h3 className='text-2xl font-bold text-gray-900 mb-3'>{service.title}</h3>

              <p className='text-gray-600 mb-6'>{service.description}</p>

              <ul className='space-y-2 mb-6'>
                {service.features.map((feature, idx) => (
                  <li key={idx} className='flex items-center text-sm text-gray-600'>
                    <div className='w-2 h-2 bg-primary-500 rounded-full mr-2'></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='text-center'>
          <Link to='/services' className='btn-primary inline-flex items-center'>
            Lihat Semua Layanan
            <svg className='w-5 h-5 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
