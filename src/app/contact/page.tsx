import Header from '../../components/Header'

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex flex-col h-192 w-full items-center">
        <div className="flex h-20 w-full p-16">
          <Header text="get in touch" />
        </div>
        <div className="flex border border-red-500 h-160 w-1/3 mt-20">
          contact form
        </div>
      </div>
    </main>
  )
}
