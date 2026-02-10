import { useState } from "react";
import { Mail, Phone, MapPin, Send, User, MessageCircle } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Terima kasih! Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "rajatransportasi99@gmail.com",
      link: "mailto:rajatransportasi99@gmail.com",
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "0821-3467-5554",
      link: "tel:082134675554",
    },
    {
      icon: MapPin,
      title: "Alamat",
      content: "Pool Taxi BKK, Husein Sastranegara, Tangerang",
      link: "https://maps.google.com",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className='bg-primary-900 py-16 md:py-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>Hubungi Kami</h1>
          <p className='text-primary-200 text-lg max-w-3xl mx-auto'>Punya pertanyaan atau ingin bergabung dengan Koperasi RAJA? Silakan hubungi kami melalui form di bawah atau kontak langsung.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className='section-padding bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Contact Info */}
            <div>
              <SectionTitle subtitle='Informasi Kontak' title='Kami Siap Membantu' centered={false} />

              <p className='text-gray-600 mb-8 leading-relaxed'>Tim Koperasi RAJA siap membantu Anda. Jangan ragu untuk menghubungi kami jika ada pertanyaan tentang layanan, keanggotaan, atau hal lainnya.</p>

              <div className='space-y-6'>
                {contactInfo.map((item, index) => (
                  <a key={index} href={item.link} target='_blank' rel='noopener noreferrer' className='flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group'>
                    <div className='w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors'>
                      <item.icon className='w-6 h-6 text-primary-600' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-gray-900 mb-1'>{item.title}</h3>
                      <p className='text-gray-600'>{item.content}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Additional Info */}
              <div className='mt-8 p-6 bg-primary-50 rounded-xl'>
                <h3 className='font-bold text-gray-900 mb-3'>Jam Operasional</h3>
                <ul className='space-y-2 text-gray-600'>
                  <li className='flex justify-between'>
                    <span>Senin - Jumat</span>
                    <span className='font-medium'>08.00 - 17.00 WIB</span>
                  </li>
                  <li className='flex justify-between'>
                    <span>Sabtu</span>
                    <span className='font-medium'>08.00 - 12.00 WIB</span>
                  </li>
                  <li className='flex justify-between'>
                    <span>Minggu</span>
                    <span className='font-medium'>Tutup</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className='bg-gray-50 rounded-2xl p-8'>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>Kirim Pesan</h3>

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
                    Nama Lengkap
                  </label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <User className='h-5 w-5 text-gray-400' />
                    </div>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all'
                      placeholder='Masukkan nama lengkap Anda'
                    />
                  </div>
                </div>

                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                      Email
                    </label>
                    <div className='relative'>
                      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                        <Mail className='h-5 w-5 text-gray-400' />
                      </div>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all'
                        placeholder='email@anda.com'
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-2'>
                      No. Telepon
                    </label>
                    <div className='relative'>
                      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                        <Phone className='h-5 w-5 text-gray-400' />
                      </div>
                      <input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        className='block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all'
                        placeholder='0812-3456-7890'
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
                    Pesan
                  </label>
                  <div className='relative'>
                    <div className='absolute top-3 left-3 pointer-events-none'>
                      <MessageCircle className='h-5 w-5 text-gray-400' />
                    </div>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows='4'
                      className='block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none'
                      placeholder='Tulis pesan Anda di sini...'></textarea>
                  </div>
                </div>

                <button type='submit' className='btn-primary w-full flex items-center justify-center'>
                  <Send className='w-5 h-5 mr-2' />
                  Kirim Pesan
                </button>
              </form>

              <p className='text-xs text-gray-500 text-center mt-4'>Dengan mengirim pesan, Anda menyetujui kebijakan privasi kami.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className='bg-gray-100 h-96'>
        <div className='w-full h-full'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d782.2708504134376!2d106.68345010276353!3d-6.1155311977099345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a03ca6f0b8a21%3A0xad2c029133b166a6!2sBKK%20POOL!5e0!3m2!1sid!2sid!4v1770690352574!5m2!1sid!2sid'
            width='100%'
            height='100%'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            title='Lokasi Koperasi RAJA'
            className='grayscale'></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
