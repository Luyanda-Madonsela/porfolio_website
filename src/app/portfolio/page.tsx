import Header from '../../components/Header'

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex flex-col h-192 w-full">
        <div className="flex h-20 w-full p-16">
          
        <Header text="my projects" />
          
          </div>
        <div className="flex h-160 w-full mt-10 p-16">
          project plaques
        </div>
      </div>
    </main>
  )
}
