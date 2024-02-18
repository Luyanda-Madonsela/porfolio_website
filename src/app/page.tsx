import Balancer from 'react-wrap-balancer';
import Image from 'next/image'
import Button from '../components/Button'
import Header from '../components/Header'
import welcome_selfie from '/public/images/welcome-selfie.png'
import ExpertisePlaque from '../components/ExpertisePlaque';
import tech_stack from '/public/images/tech_stack_badges.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">


{/* ------------------------------------------------Hero Section--------------------------------------------------- */}
      <div className=" flex flex-row min-h-0 w-full items-center content-center justify-center pl-16">
        <div className="flex flex-col gap-3 h-112 w-1/2 pt-10 m-0">
            <Header text="I'm Luyanda Madonsela, a" />
            <div className='text-butt-color font-semibold text-5xl'>Full Stack Web &</div>
            <div className='text-butt-color font-semibold text-5xl'>Software Developer</div>

            {/* -----------------Short Intro------------- */}
            <div className='w-3/4 h-24 text-gray-500 font-normal text-lg text-wrap'>
                <Balancer>
                  Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio. Morbi.
                </Balancer>
            </div>
            {/* -----------------Browse Projects Button------------- */}
            <div className='text-lg font-semibold text-gray-800'>
              <Button text="View portfolio" href="/portfolio" target='' height='4rem' width='12rem'/>
            </div>
        </div>
        {/* -----------------Hero Image------------- */}
        <div className="flex items-center content-center justify-start min-h-160 w-1/2 mb-10">
          <Image
            src={welcome_selfie}
            width={600}
            height={600}
            alt="Luyanda Madonsela's Photo"
          />
        </div>
      </div>

{/* ------------------------------------------------Expertise Section--------------------------------------------------- */}
      <div className="flex flex-col gap-24 h-24 w-full pl-16 pt-18">
        <Header text="my expertise" />
      </div>
      <div className="flex flex-col gap-24 min-h-160 w-full pt-10">
          
          <div className='flex justify-center items-center content-center gap-20 '>
      
            <ExpertisePlaque 
              imageUrl="/images/web-design.png" 
              headingText="UI/UX Design" 
              paragraphText="Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio. Morbi."
              imageWidth={250}
              imageHeight={250}
            />

            <ExpertisePlaque 
              imageUrl="/images/responsive-design.png" 
              headingText="Web App Development" 
              paragraphText="Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio. Morbi."
              imageWidth={195}
              imageHeight={150}
            />

            <ExpertisePlaque 
              imageUrl="/images/app_development.png" 
              headingText="Software Development" 
              paragraphText="Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio. Morbi."
              imageWidth={250}
              imageHeight={250}
            />

            <ExpertisePlaque 
              imageUrl="/images/storage.png" 
              headingText="Database Development" 
              paragraphText="Lorem ipsum dolor sit amet, consectetur adipis elitor. Euismod elementum nunc faucibus enim. Amet velit lectus elementum leo placerat odio. Morbi."
              imageWidth={300}
              imageHeight={500}
            />
          </div>
      </div> 

{/* ------------------------------------------------Tech Stack Section--------------------------------------------------- */}

      <div className="flex flex-col h-192 w-full">
        <div className='flex flex-col h-20 w-full pl-16'>
          <Header text="my tech stack" />
        </div>

        {/* -----------------Tech Stack Badges------------- */}
        <div className='flex flex-col h-128 w-full items-center content-center justify-center'>
            <Image src={tech_stack} width={1300} height={1400} alt="Personal Logo" />
        </div>

        {/* -----------------Browse Projects Button------------- */}
        <div className='flex flex-col h-24 w-full p-16 text-lg font-semibold text-gray-800 justify-center items-center content-center'>
              <Button text="View projects" href="/portfolio" target='' height='4rem' width='12rem'/>
        </div>

      </div>
    </main>
  )
}
