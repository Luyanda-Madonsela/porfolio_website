import Link from 'next/link'

type ButtonProps = {
  text: string;
  href: string;
  width: string;
  height: string;
 };
 
 const Button: React.FC<ButtonProps> = ({ text, href, width, height }) => {
  return (
      <Link href={href}>
        <div 
          className="flex items-center content-center justify-center rounded-md bg-butt-color font-poppins"
          style={{ width, height }}
        >
          {text}
        </div>
     </Link>
  );
 };
 
 export default Button;
 
