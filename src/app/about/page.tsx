import Balancer from 'react-wrap-balancer';
import Header from '../../components/Header'
import Image from 'next/image';
import about_selfie from '/public/images/aboutImage.png'
import certificate1 from '/public/images/js_certificate.png'
import certificate2 from '/public/images/php_certificate.png'
import Link from 'next/link'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className=" flex flex-row min-h-0 w-full">
        <div className="flex flex-col min-h-160 w-2/3 p-16">
          <Header text="about me" />

          <div className='w-full mt-5 h-96 pt-10 flex text-gray-500 font-normal text-lg overflow-auto'>
              <p className="whitespace-normal">
                  Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio. Morbi. Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio. Morbi.
                  Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio. Morbi. Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio. Morbi.
                  Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio. Morbi. Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio. Morbi.
                  Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio. Morbi. Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio. Morbi.
              </p>
            </div>


          <div className='flex mt-1 h-20 flex-row justify-start items-start content-start '>
                <Link className='text-blue-900 underline' href="/">Download CV</Link> 
          </div>

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

      <div className="flex flex-col min-h-20 w-full pl-16">
        <Header text="certifications" />
      </div>

      <div className="flex flex-col gap-20 min-h-220 w-full mt-5 mb-20">
      
        <div className='flex justify-center items-center content-center mt-5 h-160 '>
        <Image
            src={certificate1}
            width={900}
            height={800}
            alt="Luyanda Madonsela's Photo"
          />
            
        </div>

        <div className='flex justify-center items-center content-center mt-1 h-160'>
        <Image
            src={certificate2}
            width={850}
            height={800}
            alt="Luyanda Madonsela's Photo"
          />
          
        </div>

      </div>


    </main>
  )
}
