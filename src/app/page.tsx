import React from "react";
import Image from 'next/image'
import Button from '../components/Button'
import Header from '../components/Header'
import welcome_selfie from '/public/images/welcome-selfie.png'
import ExpertisePlaque from '../components/ExpertisePlaque';
import tech_stack from '/public/images/tech_stack_badges.png'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-screen whitespace-nowrap overflow-auto scrollbar-hide">

{/* ------------------------------------------------Hero Section--------------------------------------------------- */}
      <div className=" flex flex-col md:flex-row min-h-0 w-fit items-center content-center justify-center mb-16 md:mb-0" >

        <div className="flex items-center content-center justify-start md:mb-28 lg:mb-28 xl:mb-10 2xl:mb-10 xl:mr-2 2xl:mr-2 relative w-72 h-64 md:w-0 md:h-0">
          <Image
            src={welcome_selfie}
            layout="fill" 
            objectFit="contain"
            alt="Luyanda Madonsela's Photo"
          />
        </div>

        <div className="flex flex-col gap-1 md:gap-2 lg:gap-1 xl:gap-3 2xl:gap-3 min-h-112 w-4/5 md:w-1/2 md:pt-2 lg:pt-10 m-0">
            <Header text="I'm Luyanda Madonsela, a" />
            <div className='text-butt-color font-semibold text-2xl lg:text-3xl xl:text-5xl pl-14 md:pl-0'>Full Stack Web &</div>
            <div className='text-butt-color font-semibold text-2xl lg:text-3xl xl:text-5xl pl-9 md:pl-0'>Software Developer</div>

            {/* -----------------Short Intro------------- */}

            <div className='w-full min-h-96 pt-3 pb-5 flex text-gray-500 font-normal lg:text-md xl:text-lg 2xl:text-lg overflow-auto'>
                <p className="whitespace-normal">
                    Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio.                 
                </p>
            </div>

            {/* -----------------Browse Projects Button------------- */}
            <div className='flex text-lg font-semibold text-gray-800 items-center content-center justify-center md:justify-start'>
              <Button text="View portfolio" href="/portfolio" target='' height="h-12 md:h-12 lg:h-12 xl:h-16 2xl:h-16" width="w-44 md:w-44 lg:w-44 xl:w-44 2xl:w-44"/>
            </div>
        </div>
        {/* -----------------Hero Image------------- */}
        <div className="flex items-center content-center justify-start min-h-160 md:mb-28 lg:mb-28 xl:mb-10 2xl:mb-10 xl:mr-6 2xl:mr-32 relative md:w-64 md:h-72 lg:w-96 lg:h-96 xl:w-140 xl:h-140">
          <Image
            src={welcome_selfie}
            layout="fill" 
            objectFit="contain"
            alt="Luyanda Madonsela's Photo"
          />
        </div>
      </div>

{/* ------------------------------------------------Expertise Section--------------------------------------------------- */}
      <div className="flex flex-col md:h-24 w-full pl-28 md:pl-16 md:pt-10">
        <Header text="my expertise" />
      </div>

      <div className="flex ml-8 md:ml-0 w-4/5 md:w-full pt-10 md:pt-16 2xl:pt-16 justify-center items-center content-center">
          
          <div className='grid grid-flow-row justify-center items-center content-center md:grid-cols-2 md:gap-x-20 lg:grid-cols-4 lg:gap-x-10 xl:gap-x-20'>
      
            <ExpertisePlaque 
              imageUrl="/images/web-design.png" 
              headingText="UI/UX Design" 
              paragraphText="Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio. Morbi."
            />

            <ExpertisePlaque 
              imageUrl="/images/responsive-design.png" 
              headingText="Web App Development" 
              paragraphText="Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio. Morbi."
            />

            <ExpertisePlaque 
              imageUrl="/images/app_development.png" 
              headingText="Software Development" 
              paragraphText="Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio. Morbi."
            />

            <ExpertisePlaque 
              imageUrl="/images/storage.png" 
              headingText="Database Development" 
              paragraphText="Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio. Morbi."
            />
          </div>
      </div> 

{/* ------------------------------------------------Tech Stack Section--------------------------------------------------- */}

      <div className="flex flex-col md:h-128 lg:h-192 w-full">

        <div className='flex flex-col h-20 w-full pl-28 md:pl-16'>
          <Header text="my tech stack" />
        </div>

        {/* -----------------Tech Stack Badges------------- */}
        <div className='flex  ml-8 md:flex-col md:h-128 w-4/5 md:w-full items-center content-center justify-center'>
            <Image src={tech_stack} width={1300} height={1400} alt="Personal Logo" />
        </div>

        {/* -----------------Browse Projects Button------------- */}
        <div className='flex flex-col h-24 w-full p-16 text-lg font-semibold text-gray-800 justify-center items-center content-center'>
              <Button text="View projects" href="/portfolio" target='' height="h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12" width="w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40"/>
        </div>

      </div>
    </main>
  )
}
