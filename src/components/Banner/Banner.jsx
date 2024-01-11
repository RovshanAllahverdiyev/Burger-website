import BurgerImg from '../../assets/burger/burger5.png'

import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'

const Banner = () => {
  return (
    <section className='margin-b min-h-[550px] py-12 sm:py-0 flex justify-center items-center' id='about'>
      <div className='container'>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>

          {/* Image Section */}
          <div>
            <img data-aos='flip-up' src={BurgerImg} alt="banner img" className='max-w-[430px] w-full mx-auto object-contain drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] ' />
          </div>

          {/* Text content section */}
          <div className='flex flex-col gap-6 justify-center sm:pt-0'>
            <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'>Buy 2 burger get 1 free</h1>
            <p data-aos="fade-up" className='text-sm text-gray-500 tracking-wide leading-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati optio 

            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore incidunt magnam molestiae id rerum porro, harum vel suscipit. Quidem, hic!
            </p>

            <div className='flex gap-6'>

              <div data-aos="fade-up">
                <GrSecure className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100' />
              </div>

              <div data-aos="fade-up">
                <IoFastFood className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100'  />
              </div>

              <div data-aos="fade-up">
                <GiFoodTruck className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 ' />
              </div>

            </div>

              <div>
                <button data-aos='fade-up' data-aos-delay='500' className='bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md'>Order Now</button>
              </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Banner