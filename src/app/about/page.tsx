import Header from '../../components/Header'
import Image from 'next/image';
import about_selfie from '/public/images/aboutImage.png'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className=" flex flex-row min-h-0 w-full">
        <div className="flex h-160 w-2/3 p-16">
          <Header text="about me" />
        </div>

        <div className="flex flex-row justify-end items-end content-end min-h-140 w-1/3 mt-0">
        <Image
            src={about_selfie}
            width={500}
            height={800}
            alt="Luyanda Madonsela's Photo"
          />
        </div>

      </div>

      <div className="flex h-192 w-full pl-16">
        <Header text="certifications" />
      </div>

    </main>
  )
}
