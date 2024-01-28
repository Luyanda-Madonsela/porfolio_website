import Link from 'next/link'

type ButtonProps = {
  text: string
  href: string
}

const Button: React.FC<ButtonProps> = ({ text, href }) => {
  return (
    <Link href={href}>
      <div className="flex items-center content-center justify-center ml-10 h-14 w-32 rounded-md bg-butt-color font-poppins">
        {text}
      </div>
    </Link>
  )
}

export default Button
