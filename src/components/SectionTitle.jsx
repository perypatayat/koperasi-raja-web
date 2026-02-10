const SectionTitle = ({ title, subtitle, centered = true, className = "" }) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      {subtitle && <p className='text-primary-600 font-medium mb-2 uppercase tracking-wider'>{subtitle}</p>}
      <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>{title}</h2>
      {centered && <div className='w-20 h-1 bg-primary-600 mx-auto rounded-full'></div>}
    </div>
  );
};

export default SectionTitle;
