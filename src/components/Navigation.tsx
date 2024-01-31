
import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/images/logo.png'
import Button from '../components/Button'

const Navigation = () => {
  return (
    <div className="flex h-32 w-full pl-14 pt-6 font-poppins-500 text-xl ">
      <div>
        <Link href="/">
          <Image src={logo} width={180} height={100} alt="Personal Logo" />
        </Link>
      </div>

      <div className="flex justify-center items-center content-center ml-80 gap-10">
        <ul className="flex gap-14 text-gray-700">
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/portfolio">projects</Link>
          </li>
        </ul>
        <Button text="contact" href="/contact" target='' height='3rem' width='8rem' />

      </div>
    </div>
  )
}

export default Navigation
