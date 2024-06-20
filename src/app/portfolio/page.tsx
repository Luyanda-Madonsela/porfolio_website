import Header from '../../components/Header'
import ProjectPlaque from '../../components/ProjectPlaque';
import Button from '../../components/Button'
import Image from 'next/image'

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex flex-col min-h-192 w-full">

        <div className="flex h-12 md:h-16 w-full md:p-16 md:pt-24 justify-center items-center content-center md:justify-start md:items-center md:content-center "> 
          <div className="-ml-1 md:-ml-0">
             <Header text="my projects" /> 
          </div>
              
        </div>


        <div className="flex flex-col gap-16 min-h-160 w-full mt-10 mb-10 md:mb-0 md:mt-0 xl:mt-10 pl-5 pr-7 md:p-16">
            <ProjectPlaque               
              mainImage={<div className='h-36 w-36 md:h-0 md:w-0 lg:h-36 lg:w-36 xl:h-48 xl:w-48 2xl:h-48 2xl:w-48 relative'><Image src="/images/blog.png" alt="This Website" layout='fill' objectFit='contain' /></div>}
              stackImage={<div className='md:h-8 md:w-28 lg:h-12 lg:w-36 xl:h-18 xl:w-44 2xl:h-18 2xl:w-48 relative'><Image src="/images/portfolio_website_stack.png" alt="This Website" layout='fill' objectFit='cover' /></div>}
              headingText1="portfolio website" 
              headingText2=" " 
              button1={<Button text="demo" href="/" target='' height="h-8 md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="w-20 md:w-20 lg:w-20 xl:w-20 2xl:w-20" />}
              button2={<Button text="source code" href="https://github.com/Luyanda-Madonsela/porfolio_website" target='_blank'  height="h-8 md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="w-28 md:w-28 lg:w-28 xl:w-28 2xl:w-28"/>}
            />

            <ProjectPlaque               
            mainImage={<div className='h-36 w-36 md:h-0 md:w-0 lg:h-36 lg:w-36 xl:h-48 xl:w-48 2xl:h-40 2xl:w-40 relative'><Image src="/images/tic-tac-toe.png" alt="Tic Tac Toe" layout='fill' objectFit='contain' /></div>}
            stackImage={<div className='md:h-8 md:w-28 lg:h-12 lg:w-36 xl:h-18 xl:w-44 2xl:h-18 2xl:w-48 relative'><Image src="/images/tic_tac_toe_stack.png" alt="Tic Tac Toe Stack" layout='fill' objectFit='cover' /></div>}
            headingText1="tic tac toe" 
            headingText2="" 
            button1={<Button text="demo" href="/portfolio" target='' height="h-8 md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="w-20 md:w-20 lg:w-20 xl:w-20 2xl:w-20" />}
            button2={<Button text="source code" href="https://github.com/Luyanda-Madonsela/tic_tac_toe" target='_blank' height="h-8 md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="w-28 md:w-28 lg:w-28 xl:w-28 2xl:w-28"/>}
            />

          <ProjectPlaque               
            mainImage={<div className='h-36 w-36 md:h-0 md:w-0 lg:h-36 lg:w-36 xl:h-48 xl:w-48 2xl:h-48 2xl:w-48 relative'><Image src="/images/blog.png" alt="This Website" layout='fill' objectFit='contain' /></div>}
            stackImage={<div className='md:h-8 md:w-28 lg:h-12 lg:w-36 xl:h-18 xl:w-44 2xl:h-18 2xl:w-48 relative'><Image src="" alt="This Website" layout='fill' objectFit='cover' /></div>}
            headingText1="car blog" 
            headingText2="" 
            button1={<Button text="demo" href="/" target='' height="h-8 md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="w-20 md:w-20 lg:w-20 xl:w-20 2xl:w-20" />}
            button2={<Button text="source code" href="https://github.com/Luyanda-Madonsela/porfolio_website" target='_blank'  height="h-8 md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="w-28 md:w-28 lg:w-28 xl:w-28 2xl:w-28"/>}
          />

            <ProjectPlaque               
            mainImage={<div className='h-36 w-36 md:h-0 md:w-0 lg:h-36 lg:w-36 xl:h-48 xl:w-48 2xl:h-48 2xl:w-48 relative'><Image src="/images/command-line.png" alt="Command Line Interface" layout='fill' objectFit='contain' /></div>}
            stackImage={<div className='pl- xl:pl-0'><div className='md:h-12 md:w-20 lg:h-14 lg:w-24 xl:h-16 xl:w-28 2xl:h-16 2xl:w-28 relative'><Image src="/images/cli_stack.png" alt="CLI Stack" layout='fill' objectFit='cover' /></div></div>}
            headingText1="command line " 
            headingText2="interface apps" 
            button1={<Button text="java" href="https://github.com/Luyanda-Madonsela/SOPR1_Summative_Assessment_1_Practical" target='_blank' height="h-8 md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="w-20 md:w-20 lg:w-20 xl:w-20 2xl:w-20"/>}
            button2={<Button text="javascript" href="https://github.com/Luyanda-Madonsela/WEPR1_Summative-_Assessment_1_Practical" target='_blank' height="h-8 md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="w-28 md:w-28 lg:w-28 xl:w-28 2xl:w-28"/>}
            />

            <ProjectPlaque               
            mainImage={<div className='h-36 w-36 md:h-0 md:w-0 lg:h-36 lg:w-36 xl:h-48 xl:w-48 2xl:h-48 2xl:w-48 relative'><Image src="/images/work-in-progress.png" alt="Work in Progress" layout='fill' objectFit='contain' /></div>}
            stackImage={<div className='md:h-8 md:w-28 lg:h-12 lg:w-36 xl:h-18 xl:w-44 2xl:h-18 2xl:w-48 relative'><Image src="/images/portfolio_website_stack.png" alt="Portfolio Website Stack" layout='fill' objectFit='cover' /></div>}
            headingText1="bookings" 
            headingText2="web app"
            button1={<Button text="n/a" href="/portfolio" target='' height="h-8 md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="w-20 md:w-20 lg:w-20 xl:w-20 2xl:w-20"/>}
            button2={<Button text="n/a" href="/portfolio" target='' height="h-8 md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="w-28 md:w-28 lg:w-28 xl:w-28 2xl:w-28"/>}
            />


            <ProjectPlaque               
            mainImage={<div className='h-36 w-36 md:h-0 md:w-0 lg:h-36 lg:w-36 xl:h-48 xl:w-48 2xl:h-48 2xl:w-48 relative'><Image src="/images/work-in-progress.png" alt="Work in Progress" layout='fill' objectFit='contain' /></div>}
            stackImage={<div className='md:h-8 md:w-28 lg:h-12 lg:w-36 xl:h-18 xl:w-44 2xl:h-18 2xl:w-48 relative'><Image src="/images/portfolio_website_stack.png" alt="Portfolio Website Stack" layout='fill' objectFit='cover' /></div>}
            headingText1="video chat" 
            headingText2="web app" 
            button1={<Button text="n/a" href="/portfolio" target='' height="h-8 md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="w-20 md:w-20 lg:w-20 xl:w-20 2xl:w-20"/>}
            button2={<Button text="n/a" href="/portfolio" target='' height="h-8 md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="w-28 md:w-28 lg:w-28 xl:w-28 2xl:w-28"/>}
            />

          <ProjectPlaque               
          mainImage={<div className='h-36 w-36 md:h-0 md:w-0 lg:h-36 lg:w-36 xl:h-48 xl:w-48 2xl:h-48 2xl:w-48 relative'><Image src="/images/work-in-progress.png" alt="Work in Progress" layout='fill' objectFit='contain' /></div>}
          stackImage={<div className='md:h-12 md:w-48 lg:h-20 lg:w-64 xl:h-24 xl:w-72 2xl:h-24 2xl:w-72 relative'><Image src="/images/pph_stack.png" alt="Past Paper Revision Stack" layout='fill' objectFit='cover' /></div>}
          headingText1="past paper" 
          headingText2="web app" 
          button1={<Button text="n/a" href="/portfolio" target='' height="h-8 md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="w-20 md:w-20 lg:w-20 xl:w-20 2xl:w-20"/>}
          button2={<Button text="n/a" href="/portfolio" target='' height="h-8 md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="w-28 md:w-28 lg:w-28 xl:w-28 2xl:w-28"/>}
          />


        </div>
      </div>
    </main>
  )
}
