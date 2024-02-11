import Link from 'next/link'

type ButtonProps = {
  text: string;
  href: string;
  width: string;
  height: string;
  target: string;
 };
 
 const Button: React.FC<ButtonProps> = ({ text, href, width, height, target }) => {
  return (
      <Link href={href} target={target}>
        <div 
          className="flex items-center content-center justify-center rounded-md bg-butt-color font-poppins text-blue-900"
          style={{ width, height }}
        >
          {text}
        </div>
     </Link>
  );
 };
 
 export default Button;
 
