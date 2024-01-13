import Logo from '../../assets/logo.png'

const Menu = [
  {
    id: 1,
    name: 'Home',
    link: '#home'
  },
  {
    id: 2,
    name: 'Services',
    link: '#services'
  },
  {
    id: 3,
    name: 'About',
    link: '#about'
  },
  {
    id: 4,
    name: 'Contact',
    link: '#contact'
  },
]

const Navbar = () => {
  return (
    <div className="shadow-xl ">

      <div className="container py-3">

        <div data-aos='zoom-in' className="flex justify-between items-center">

          {/* Navbar Image */}
          <div>
            <a href="/" className=''>
              <img src={Logo} alt="Logo Navbar" className='w-16' />
            </a>
          </div>

          {/* Navbar Links */}
          <div className='flex justify-between items-center gap-4'>

            <ul className='hidden sm:flex gap-4 '>
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a href={menu.link} className='px-4 hover:text-primary duration-300'>{menu.name}</a>
                </li>
              ))}
            </ul>
              
            <button className='bg-gradient-to-r from-primary to bg-secondary py-1 px-4 rounded-full hover:scale-105 text-white hover:bg-red-400 duration-300'>Order</button>

              
          </div>

        </div>
      </div>

    </div>
  )
}

export default Navbar