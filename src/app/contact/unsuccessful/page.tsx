
'use client'

import Header from '../../../components/Header';
import Image from 'next/image'
import unsuccessful from '/public/images/failed-message.png'
import Button from '../../../components/Button'

export default function Unsuccessful() {

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex flex-col min-h-192 w-full items-center content-center justify-center">

        <div className="flex h-20 w-full items-center content-center justify-center md:justify-start md:p-16 md:pt-24">
          <Header text="message not sent" />
        </div>
        
        <div className='flex flex-col h-28 items-center content-center justify-start'>
            <Image
                src={unsuccessful}
                width={80}
                height={80}
                alt="unsuccessful"
              />
        </div>

        <div className='flex flex-col w-full p-16 text-lg font-semibold text-gray-800 justify-start items-center content-center'>
              <Button text="Home" href="/" target='' height="h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12" width="w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40"/>
        </div>

      </div>
    </main>
  )
}