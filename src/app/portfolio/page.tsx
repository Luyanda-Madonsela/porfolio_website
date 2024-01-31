import Header from '../../components/Header'
import ProjectPlaque from '../../components/ProjectPlaque';
import Button from '../../components/Button'

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex flex-col min-h-192 w-full">
        <div className="flex h-20 w-full p-16">
          
        <Header text="my projects" />
          
        </div>

        <div className="flex flex-col gap-10 min-h-160 w-full mt-10 p-16">
            <ProjectPlaque               
              imageUrl="/images/blog.png" 
              headingText1="This Website" 
              headingText2="" 
              imageWidth={150}
              imageHeight={150}
              button1={<Button text="demo" href="/" target=''  height='2rem' width='8rem'/>}
              button2={<Button text="codebase" href="https://github.com/Luyanda-Madonsela/porfolio_website" target='_blank' height='2rem' width='8rem'/>}
              
            />

            <ProjectPlaque               
              imageUrl="/images/tic-tac-toe.png" 
              headingText1="Tic Tac Toe" 
              headingText2="" 
              imageWidth={150}
              imageHeight={150} 
              button1={<Button text="demo" href="/portfolio" target='' height='2rem' width='8rem'/>}
              button2={<Button text="codebase" href="https://github.com/Luyanda-Madonsela/tic_tac_toe" target='_blank' height='2rem' width='8rem'/>}
            />

            <ProjectPlaque               
              imageUrl="/images/command-line.png" 
              headingText1="Command Line Interface" 
              headingText2="Applications" 
              imageWidth={150}
              imageHeight={150} 
              button1={<Button text="Java" href="https://github.com/Luyanda-Madonsela/SOPR1_Summative_Assessment_1_Practical" target='_blank' height='2rem' width='8rem'/>}
              button2={<Button text="JavaScript" href="https://github.com/Luyanda-Madonsela/WEPR1_Summative-_Assessment_1_Practical" target='_blank' height='2rem' width='8rem'/>}
            />
            <ProjectPlaque               
              imageUrl="/images/work-in-progress.png" 
              headingText1="Weather" 
              headingText2="Web Application" 
              imageWidth={150}
              imageHeight={150} 
              button1={<Button text="N/A" href="/portfolio" target='' height='2rem' width='8rem'/>}
              button2={<Button text="N/A" href="/portfolio" target='' height='2rem' width='8rem'/>}
            />

            <ProjectPlaque               
              imageUrl="/images/work-in-progress.png" 
              headingText1="Video Chat" 
              headingText2="Web Application" 
              imageWidth={150}
              imageHeight={150} 
              button1={<Button text="N/A" href="/portfolio" target='' height='2rem' width='8rem'/>}
              button2={<Button text="N/A" href="/portfolio" target='' height='2rem' width='8rem'/>}
            />

            <ProjectPlaque               
              imageUrl="/images/work-in-progress.png" 
              headingText1="Past Paper Repository" 
              headingText2="Web Application" 
              imageWidth={150}
              imageHeight={150} 
              button1={<Button text="N/A" href="/portfolio" target='' height='2rem' width='8rem'/>}
              button2={<Button text="N/A" href="/portfolio" target='' height='2rem' width='8rem'/>}
            />

        </div>
      </div>
    </main>
  )
}
