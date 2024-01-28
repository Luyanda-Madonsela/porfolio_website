import React from 'react';
import Image from 'next/image'
import header_strip from '/public/images/headerStrip.png'

type TextDisplayProps = {
 text: string;
};

const TextDisplay: React.FC<TextDisplayProps> = ({ text }) => {
 return <div className='flex flex-col gap-3 text-purple font-semibold text-5xl'>
     <Image
            src={header_strip}
            width={180}
            alt="Luyanda Madonsela"
          />
    <p>{text}</p>
    
    </div>;
};

export default TextDisplay;
