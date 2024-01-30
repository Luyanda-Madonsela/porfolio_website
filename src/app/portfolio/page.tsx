import Header from '../../components/Header'
import ProjectPlaque from '../../components/ProjectPlaque';

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
            />

            <ProjectPlaque               
              imageUrl="/images/tic-tac-toe.png" 
              headingText1="Tic Tac Toe" 
              headingText2="" 
              imageWidth={150}
              imageHeight={150} 
            />

            <ProjectPlaque               
              imageUrl="/images/command-line.png" 
              headingText1="Command Line Interface" 
              headingText2="Applications" 
              imageWidth={150}
              imageHeight={150} 
            />
            <ProjectPlaque               
              imageUrl="/images/work-in-progress.png" 
              headingText1="Weather" 
              headingText2="Web Application" 
              imageWidth={150}
              imageHeight={150} 
            />

            <ProjectPlaque               
              imageUrl="/images/work-in-progress.png" 
              headingText1="Video Chat" 
              headingText2="Web Application" 
              imageWidth={150}
              imageHeight={150} 
            />

            <ProjectPlaque               
              imageUrl="/images/work-in-progress.png" 
              headingText1="Past Paper Repository" 
              headingText2="Web Application" 
              imageWidth={150}
              imageHeight={150} 
            />




        </div>
      </div>
    </main>
  )
}
