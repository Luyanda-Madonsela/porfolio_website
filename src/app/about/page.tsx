import Header from '../../components/Header'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className=" flex flex-row min-h-0 w-full">
        <div className="flex h-160 w-2/3 p-16">
          <Header text="about me" />
        </div>

        <div className="flex border border-red-500 h-140 w-1/3 mt-10">photo</div>
      </div>

      <div className="flex h-192 w-full pl-16">
        <Header text="certifications" />
      </div>

      <div className="flex h-192 w-full pl-16">
        
        <Header text="employment history" />
      </div>
    </main>
  )
}
