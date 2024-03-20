
'use client'

import Header from '../../../components/Header';
import Image from 'next/image'
import unsuccessful from '/public/images/failed-message.png'

export default function Unsuccessful() {

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex flex-col min-h-192 w-full items-center content-center justify-center">

        <div className="flex h-20 w-full p-16">
          <Header text="message not sent" />
        </div>
        
        <div className='flex flex-col h-96 items-center content-center justify-center'>
            <Image
                src={unsuccessful}
                width={150}
                height={150}
                alt="unsuccessful"
              />
        </div>

      </div>
    </main>
  )
}