import { Users, Smartphone, CreditCard, FileText, Handshake, BarChart } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const features = [
  {
    icon: Users,
    title: "Manajemen Mitra",
    description: "Sistem lengkap untuk mengelola data dan informasi mitra transportasi online. Mudah, cepat, dan terorganisir.",
    color: "bg-blue-500",
  },
  {
    icon: Smartphone,
    title: "Transportasi Online",
    description: "Platform terintegrasi untuk layanan transportasi online yang mendukung operasional sehari-hari mitra.",
    color: "bg-green-500",
  },
  {
    icon: CreditCard,
    title: "Keuangan Digital",
    description: "Transaksi keuangan yang transparan dan efisien dengan sistem pembayaran digital modern.",
    color: "bg-purple-500",
  },
  {
    icon: FileText,
    title: "Dokumen Digital",
    description: "Pengelolaan dokumen secara terpusat dan aman. Semua selalu tersedia kapan saja.",
    color: "bg-orange-500",
  },
  {
    icon: Handshake,
    title: "Kolaborasi UMKM",
    description: "Wadah kolaborasi untuk memperluas jaringan usaha mikro, kecil, dan menengah.",
    color: "bg-indigo-500",
  },
  {
    icon: BarChart,
    title: "Laporan & Analitik",
    description: "Dashboard komprehensif dengan laporan dan analitik untuk pengambilan keputusan yang tepat.",
    color: "bg-pink-500",
  },
];

const Features = () => {
  return (
    <section className='section-padding bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionTitle subtitle='Fitur Unggulan' title='Solusi Lengkap untuk Koperasi Digital' />

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div key={index} className='card p-6 group hover:-translate-y-1'>
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className='w-7 h-7 text-white' />
              </div>

              <h3 className='text-xl font-bold text-gray-900 mb-3'>{feature.title}</h3>

              <p className='text-gray-600 leading-relaxed'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
