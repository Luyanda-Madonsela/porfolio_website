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

          <div className='flex flex-col w-full 2xl:mt-5 md:h-140 lg:h-112 xl:h-117 2xl:h-117 md:pt-7 lg:pt-10 xl:pt-10 2xl:pt-10 text-gray-500 font-normal lg:text-md  xl:text-lg  2xl:text-lg overflow-auto'>
              <p className="whitespace-normal">
                  Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio. Morbi. Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio. Morbi.
                  Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio. Morbi. Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio. Morbi.
              </p>
              <br></br>
              <p>Employment History</p>
              <br></br>
              <ul>

                  <li className='overflow-auto whitespace-normal pb-1'>Mar 2020 - Current : Mathematics & Science tutor</li>
                  <li className='overflow-auto whitespace-normal pb-1'>Mar 2020 - Current : Mathematics & Science tutor</li>
                  <li className='overflow-auto whitespace-normal pb-1'>Mar 2020 - Current : Mathematics & Science tutor</li>
                  <li className='overflow-auto whitespace-normal pb-1'>Mar 2020 - Current : Mathematics & Science tutor</li>
            
                </ul>
            </div>


          <div className='flex md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-1 h-20 flex-row justify-start items-start content-start '>
                <Link className='text-blue-900 underline' href="/">Download CV</Link> 
          </div>

        </div>

        <div className="flex flex-row justify-center items-center content-center min-h-140 w-1/3 mt-0 relative md:w-72 md:h-120 lg:w-96 lg:h-160 xl:w-140 xl:h-224">
        <Image
            src={about_selfie}
            layout="fill" 
            objectFit="contain"
            alt="Luyanda Madonsela's Photo"
          />
        </div>

      </div>

      <div className="flex flex-col min-h-20 w-full pl-16">
        <Header text="certifications" />
      </div>

      <div className="flex flex-col justify-center items-center content-center gap-20 min-h-288 w-full mb-20">
      
        <div className='flex flex-row  justify-center items-center content-center mt-5 relative md:w-128 md:h-96 lg:w-192 lg:h-160 xl:w-256 xl:h-200'>
        <Image
            src={certificate1}
            layout="fill" 
            objectFit="contain"
            alt="Luyanda Madonsela's Photo"
          />
            
        </div>

        <div className='flex flex-row justify-center items-center content-center mt-1 relative md:w-128 md:h-96 lg:w-192 lg:h-160 xl:w-256 xl:h-200'>
        <Image
            src={certificate2}
            layout="fill" 
            objectFit="contain"
            alt="Luyanda Madonsela's Photo"
          />
          
        </div>

      </div>


    </main>
  )
}
