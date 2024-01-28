import Image from 'next/image'
import Link from 'next/link'
import Button from '../components/Button'
import Header from '../components/Header'
import welcome_selfie from '/public/images/welcome-selfie.png'
import Balancer from 'react-wrap-balancer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <div className=" flex flex-row min-h-0 w-full items-center content-center justify-center pl-16">
        <div className="flex flex-col gap-3 h-112 w-1/2 pt-10 m-0">
            <Header text="I'm Luyanda Madonsela, a" />
            <div className='text-butt-color font-semibold text-5xl'>Full Stack Web &</div>
            <div className='text-butt-color font-semibold text-5xl'>Software Developer</div>

            <div className='text-butt-color w-3/4 h-24 text-gray-500 font-normal text-lg text-wrap'>
                <Balancer>
                  Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio. Morbi.
                </Balancer>
            </div>

            <div className='text-lg font-semibold text-gray-800'>
              <Button text="browse projects" href="/portfolio" height='4rem' width='12rem'/>
            </div>
  
        </div>

        <div className="flex items-center content-center justify-start min-h-160 w-1/2 mb-10">
          <Image
            src={welcome_selfie}
            width={600}
            height={600}
            alt="Luyanda Madonsela's Photo"
          />
        </div>
      </div>

      <div className="flex h-192 w-full pl-16">
        <Header text="my expertise" />
        
      </div>

      <div className="flex h-192 w-full pl-16">
        <Header text="tech stack" />

      </div>
    </main>
  )
}
