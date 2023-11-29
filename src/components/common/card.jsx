export function Card({ heading, description, icon, className }) {
  return (
    <div
      className={`w-80 py-40 px-10 m-2 group rounded-lg relative overflow-hidden cursor-pointer ${className}`}>
      <div className='bg-gradient-to-b from-[#4D0AA4] to-[#AC76FE] absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 '></div>
      <div className='relative z-10 '>
        <img src={icon} alt='' />
        <p className='cardtxt font-semibold text-black text-xl transition-all duration-500 group-hover:text-white '>
          {heading}
        </p>
        <p className='blueberry font-semibold text-black text-xs transition-all duration-500 group-hover:text-white'>
          {description}
        </p>
      </div>
    </div>
  );
}
