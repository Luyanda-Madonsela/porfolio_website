import React from 'react';
import Image from 'next/image'
import header_strip from '/public/images/headerStrip.png'

type TextDisplayProps = {
 text: string;
};

const TextDisplay: React.FC<TextDisplayProps> = ({ text }) => {
 return <div className='flex flex-col gap-3 text-purple font-bold md:font-semibold text-2xl md:text-3xl lg:text-3xl xl:text-5xl'>
            <div className='h-0 w-0 h-2 md:h-2 md:w-28 lg:h-2 lg:w-28 xl:h-2 xl:w-40 relative'>
                  <Image
                    src={header_strip}
                    alt="Luyanda Madonsela"
                    objectFit='contain'
                  />
            </div>
            <p>{text}</p>
        </div>;
};

export default TextDisplay;
