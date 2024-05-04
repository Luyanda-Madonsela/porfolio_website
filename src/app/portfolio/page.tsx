import Header from '../../components/Header'
import ProjectPlaque from '../../components/ProjectPlaque';
import Button from '../../components/Button'
import Image from 'next/image'

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex flex-col min-h-192 w-full">
        <div className="flex h-20 w-full p-16">
          
        <Header text="my projects" />
          
        </div>

        <div className="flex flex-col gap-10 min-h-160 w-full xl:mt-10 p-16">
            <ProjectPlaque               
              mainImage={<div className='lg:h-36 lg:w-36 xl:h-48 xl:w-48 2xl:h-48 2xl:w-48 relative'><Image src="/images/blog.png" alt="This Website" layout='fill' objectFit='contain' /></div>}
              stackImage={<div className='md:h-8 md:w-28 lg:h-12 lg:w-36 xl:h-18 xl:w-44 2xl:h-18 2xl:w-48 relative'><Image src="/images/portfolio_website_stack.png" alt="This Website" layout='fill' objectFit='cover' /></div>}
              headingText1="This Website" 
              headingText2="" 
              button1={<Button text="Demo" href="/" target='' height="md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="md:w-20 lg:w-20 xl:w-20 2xl:w-20" />}
              button2={<Button text="Source Code" href="https://github.com/Luyanda-Madonsela/porfolio_website" target='_blank'  height="md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="md:w-28 lg:w-28 xl:w-28 2xl:w-28"/>}
            />

            <ProjectPlaque               
            mainImage={<div className='lg:h-36 lg:w-36 xl:h-48 xl:w-48 2xl:h-40 2xl:w-40 relative'><Image src="/images/tic-tac-toe.png" alt="Tic Tac Toe" layout='fill' objectFit='contain' /></div>}
            stackImage={<div className='md:h-8 md:w-28 lg:h-12 lg:w-36 xl:h-18 xl:w-44 2xl:h-18 2xl:w-48 relative'><Image src="/images/tic_tac_toe_stack.png" alt="Tic Tac Toe Stack" layout='fill' objectFit='cover' /></div>}
            headingText1="Tic Tac Toe" 
            headingText2="Game" 
            button1={<Button text="Demo" href="/portfolio" target='' height="md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="md:w-20 lg:w-20 xl:w-20 2xl:w-20" />}
            button2={<Button text="Source Code" href="https://github.com/Luyanda-Madonsela/tic_tac_toe" target='_blank' height="md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="md:w-28 lg:w-28 xl:w-28 2xl:w-28"/>}
            />


            <ProjectPlaque               
            mainImage={<div className='lg:h-36 lg:w-36 xl:h-48 xl:w-48 2xl:h-48 2xl:w-48 relative'><Image src="/images/command-line.png" alt="Command Line Interface" layout='fill' objectFit='contain' /></div>}
            stackImage={<div className='pl- xl:pl-0'><div className='md:h-12 md:w-20 lg:h-14 lg:w-24 xl:h-16 xl:w-28 2xl:h-16 2xl:w-28 relative'><Image src="/images/cli_stack.png" alt="CLI Stack" layout='fill' objectFit='cover' /></div></div>}
            headingText1="Command Line " 
            headingText2="Interface Applications" 
            button1={<Button text="Java" href="https://github.com/Luyanda-Madonsela/SOPR1_Summative_Assessment_1_Practical" target='_blank' height="md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="md:w-20 lg:w-20 xl:w-20 2xl:w-20"/>}
            button2={<Button text="JavaScript" href="https://github.com/Luyanda-Madonsela/WEPR1_Summative-_Assessment_1_Practical" target='_blank' height="md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="md:w-28 lg:w-28 xl:w-28 2xl:w-28"/>}
            />


            <ProjectPlaque               
            mainImage={<div className='lg:h-36 lg:w-36 xl:h-48 xl:w-48 2xl:h-48 2xl:w-48 relative'><Image src="/images/work-in-progress.png" alt="Work in Progress" layout='fill' objectFit='contain' /></div>}
            stackImage={<div className='md:h-12 md:w-48 lg:h-20 lg:w-64 xl:h-24 xl:w-72 2xl:h-24 2xl:w-72 relative'><Image src="/images/pph_stack.png" alt="Past Paper Revision Stack" layout='fill' objectFit='cover' /></div>}
            headingText1="Past Paper Revision" 
            headingText2="Web Application" 
            button1={<Button text="N/A" href="/portfolio" target='' height="md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="md:w-20 lg:w-20 xl:w-20 2xl:w-20"/>}
            button2={<Button text="N/A" href="/portfolio" target='' height="md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="md:w-28 lg:w-28 xl:w-28 2xl:w-28"/>}
            />


            <ProjectPlaque               
            mainImage={<div className='lg:h-36 lg:w-36 xl:h-48 xl:w-48 2xl:h-48 2xl:w-48 relative'><Image src="/images/work-in-progress.png" alt="Work in Progress" layout='fill' objectFit='contain' /></div>}
            stackImage={<div className='md:h-8 md:w-28 lg:h-12 lg:w-36 xl:h-18 xl:w-44 2xl:h-18 2xl:w-48 relative'><Image src="/images/portfolio_website_stack.png" alt="Portfolio Website Stack" layout='fill' objectFit='cover' /></div>}
            headingText1="Weather" 
            headingText2="Web Application"
            button1={<Button text="N/A" href="/portfolio" target='' height="md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="md:w-20 lg:w-20 xl:w-20 2xl:w-20"/>}
            button2={<Button text="N/A" href="/portfolio" target='' height="md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="md:w-28 lg:w-28 xl:w-28 2xl:w-28"/>}
            />


            <ProjectPlaque               
            mainImage={<div className='lg:h-36 lg:w-36 xl:h-48 xl:w-48 2xl:h-48 2xl:w-48 relative'><Image src="/images/work-in-progress.png" alt="Work in Progress" layout='fill' objectFit='contain' /></div>}
            stackImage={<div className='md:h-8 md:w-28 lg:h-12 lg:w-36 xl:h-18 xl:w-44 2xl:h-18 2xl:w-48 relative'><Image src="/images/portfolio_website_stack.png" alt="Portfolio Website Stack" layout='fill' objectFit='cover' /></div>}
            headingText1="Video Chat" 
            headingText2="Web Application" 
            button1={<Button text="N/A" href="/portfolio" target='' height="md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="md:w-20 lg:w-20 xl:w-20 2xl:w-20"/>}
            button2={<Button text="N/A" href="/portfolio" target='' height="md:h-8 lg:h-10 xl:h-10 2xl:h-10" width="md:w-28 lg:w-28 xl:w-28 2xl:w-28"/>}
            />


        </div>
      </div>
    </main>
  )
}
