import { Link, useLocation } from 'react-router-dom'
import { bottombarLinks } from '@/contants';
const Bottombar = () => {
  const { pathname } = useLocation();

  return (
    <section className='hidden lg:block bottom-bar bg-primary text-light-5 px-4 md:px-5 md:py-10 lg:px-28 lg:py-12 mt-20 '>
      <div className="grid grid-cols-4">
        <div className='flex flex-col gap-4 justify-center'>
          <h1>Telepone : +970568441184</h1>
          <span>Email : abdalnaser.atrash98@outlook.com</span>
          <span>Location : abdalnaser.atrash98@outlook.com</span>

        </div>
        <div className='flex flex-col gap-4  place-content-center'>
          <strong>Information</strong>
          <span>My Account</span>
          <span>My Account</span>
          <span>My Account</span>
          <span>My Account</span>
          <span>My Account</span>


        </div>
        <div className='flex flex-col gap-4 place-content-center'>
          <strong>Service</strong>
          <span>My Account</span>
          <span>My Account</span>
          <span>My Account</span>
          <span>My Account</span>
          <span>My Account</span>

        </div>
        <div className='flex flex-col gap-4 place-content-center'>
          <strong>Service</strong>
          <span>My Account</span>
          <span>My Account</span>
          <span>My Account</span>
          <span>My Account</span>
          <span>My Account</span>

        </div>
      </div>

    </section>
  )
}

export default Bottombar
