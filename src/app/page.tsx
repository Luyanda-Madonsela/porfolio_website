import Image from 'next/image'
import Link from 'next/link'
import Button from '../components/Button';
import welcome_selfie from '/public/images/welcome-selfie.png'

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col ">
      <div className=" flex flex-row min-h-0 w-full items-center content-center justify-center pl-16">
          <div className="flex h-112 w-1/2 border border-red-500">

          </div>
          
          <div className="flex items-center content-center justify-center min-h-160 w-1/2">
          <Image
              src={welcome_selfie}
              width={650}
              height={650}
              alt="Luyanda Madonsela"
            />
          </div>

      </div>

      <div className="flex border border-red-500 h-192 w-full">
          expertise
      </div>

      <div className="flex border border-red-500 h-192 w-full">
          tech stack
      </div>
    </main>
  );
}

