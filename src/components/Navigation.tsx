
import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/images/logo.png'
import Button from '../components/Button'

const Navigation = () => {
  return (
    <div className="flex h-16 md:h-32 w-full pl-10 md:pl-14 md:pt-6 mb-5 md:mb-10 font-poppins-500 md:text-md lg:text-lg xl:text-xl relative z-50 ">

      <div className='md:mr-10 relative md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48'>
        <Link href="/">
            <Image src={logo} layout="fill" objectFit="contain" alt="Personal Logo" />
        </Link>
      </div>

      <div className="flex justify-center items-center content-center lg:ml-20 lg:mt-6 xl:ml-48 2xl:ml-72 xl:mt-10 md:gap-2 lg:gap-5 xl:gap-10">

        <ul className="flex gap-5 md:gap-8 lg:gap-12 xl:gap-16 mr-3 text-blue-900">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/portfolio">Projects</Link>
          </li>
        </ul>

       <Button text="Contact" href="/contact" target='' height="h-10" width="w-28"/>

      </div>
    </div>
  )
}

export default Navigation
