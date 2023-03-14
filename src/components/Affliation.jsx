import { affiliatedInstitutions } from '../constants';

const Affliation = () => {
  return (
    <div className='py-10 select-none'>
        <h2 className="font-poppins mb-4 sm:text-4xl text-2xl tracking-tight font-bold text-center text-white">Collaboration Partners</h2>
        <hr className='w-[280px] mx-auto h-1 bg-[#0087E0] mb-10 rounded' />
        <div className='sm:flex grid flex-1 sm:flex-row grid-cols-2 text-center'>
            {affiliatedInstitutions.map(ai => (
              <div className='flex flex-col text-white space-between mx-auto cursor-pointer mb-2' key={ai.id}>
                  <a href={ai.link} target='_blank' className='flex flex-col items-center justify-center'>
                    <img src={ai.logo} loading="lazy" href={ai.link} className='object-cover bg-gray-800 rounded-full sm:h-[100px] h-[70px] sm:w-[100px] w-[70px] p-1 mb-2' />
                    <span className='font-bold sm:w-[200px] w-[150px] sm:text-[14px] text-[11px]'>{ai.name}</span>
                  </a>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Affliation;
