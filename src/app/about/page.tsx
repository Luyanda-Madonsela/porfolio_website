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
        <div className="flex flex-col min-h-160 pl-10 pr-12 md:w-4/5 md:p-16">
              
              <div className='ml-2 md:ml-0'>
                <div className='mb-8 md:mb-0 ml-20 md:ml-0 '>
                    <Header text="about me" />
                </div>
              </div>
            
            
            <div className='flex flex-col w-full 2xl:mt-5 md:h-140 lg:h-112 xl:h-117 2xl:h-117 md:pt-5 lg:pt-10 xl:pt-10 2xl:pt-10 text-gray-500 font-normal lg:text-md  xl:text-lg  2xl:text-lg overflow-auto'>
              <p className="whitespace-normal">
                  Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio. Morbi. Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio. Morbi.
                  Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio. Morbi. Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio. Morbi.
              </p>
              <br></br>
              <div className=' ml-2 md:ml-0'>
                <div className='mb-2 md:mb-0 ml-16 md:ml-0 '>
                <p className="font-bold">Employment History:</p>
                </div>
              </div>
              
              <br></br>
              <ul>

                  <li className='overflow-auto whitespace-normal pb-1'>Mar 2020 - Current : Mathematics & Science tutor</li>
                  <li className='overflow-auto whitespace-normal pb-1'>Mar 2020 - Current : Mathematics & Science tutor</li>
                  <li className='overflow-auto whitespace-normal pb-1'>Mar 2020 - Current : Mathematics & Science tutor</li>
                  <li className='overflow-auto whitespace-normal pb-1'>Mar 2020 - Current : Mathematics & Science tutor</li>
            
                </ul>
            </div>

          <div className='ml-5 md:ml-0'>
              <div className='flex ml-20 md:ml-0 mt-10 md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-1 h-20 flex-row justify-start items-start content-start '>
                    <Link className='text-blue-900 underline' href="/">Download CV</Link> 
              </div>
          </div>


        </div>

        <div className="flex flex-row justify-center items-center content-center mt-0 relative md:w-72 md:h-120 lg:w-96 lg:h-160 xl:w-140 xl:h-224">
        <Image
            src={about_selfie}
            layout="fill" 
            objectFit="contain"
            alt="Luyanda Madonsela's Photo"
          />
        </div>

      </div>

      <div className=' ml-3 md:ml-0'></div>

          <div className="flex flex-col min-h-20 w-full pl-24 md:pl-16">
            <div className='ml-1 md:ml-0'>
                <Header text="certifications" />
            </div>
            
          </div>
   


      <div className="flex flex-col justify-center items-center content-center md:gap-20 min-h-288 w-full mb-20">
      
        <div className='flex flex-row  justify-center items-center content-center md:mt-5 relative w-80 h-72 md:w-128 md:h-96 lg:w-192 lg:h-160 xl:w-256 xl:h-200'>
        <Image
            src={certificate1}
            layout="fill" 
            objectFit="contain"
            alt="Luyanda Madonsela's Photo"
          />
            
        </div>

        <div className='flex flex-row justify-center items-center content-center md:mt-1 relative w-80 h-72 md:w-128 md:h-96 lg:w-192 lg:h-160 xl:w-256 xl:h-200'>
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
