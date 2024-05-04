import Link from 'next/link';

type ButtonProps = {
  text: string;
  href: string;
  target: string;
  height?: string;
  width?: string;
};

const Button: React.FC<ButtonProps> = ({ text, href, target, height, width }) => {
  
  return (
    <Link href={href} target={target}>
      <div className={`flex items-center justify-center rounded-md bg-butt-color font-poppins text-blue-900 hover:scale-125 ${height} ${width}`}>
        {text}
      </div>
    </Link>
  );
};

export default Button;
