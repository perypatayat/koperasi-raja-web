import SectionTitle from "../components/SectionTitle";

const stats = [
  {
    number: "2000+",
    label: "Mitra Aktif",
    description: "Mitra transportasi online & UMKM",
  },
  {
    number: "350",
    label: "Ritase/Hari",
    description: "Perjalanan yang dilakukan setiap hari",
  },
  {
    number: "25%",
    label: "Pertumbuhan",
    description: "Pertumbuhan dari tahun ke tahun",
  },
  {
    number: "100%",
    label: "Digital",
    description: "Layanan berbasis teknologi modern",
  },
];

const Stats = () => {
  return (
    <section className='section-padding bg-primary-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>Dampak Nyata untuk Anggota</h2>
          <p className='text-primary-200 text-lg max-w-2xl mx-auto'>Angka-angka yang menunjukkan komitmen kami dalam meningkatkan kesejahteraan mitra</p>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {stats.map((stat, index) => (
            <div key={index} className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-white mb-2'>{stat.number}</div>
              <div className='text-xl font-semibold text-primary-300 mb-2'>{stat.label}</div>
              <p className='text-primary-200 text-sm'>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
