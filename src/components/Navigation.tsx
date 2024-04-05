
import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/images/logo.png'
import Button from '../components/Button'

const Navigation = () => {
  return (
    <div className="flex h-32 w-full pl-14 pt-6 font-poppins-500 text-xl relative z-50 ">
      <div className='mr-10'>
        <Link href="/">
          <Image src={logo} width={180} height={100} alt="Personal Logo" />
        </Link>
      </div>

      <div className="flex justify-center items-center content-center ml-80 gap-10">
        <ul className="flex gap-14 text-blue-900">
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
        <Button text="Contact" href="/contact" target='' height='3rem' width='8rem' />

      </div>
    </div>
  )
}

export default Navigation
