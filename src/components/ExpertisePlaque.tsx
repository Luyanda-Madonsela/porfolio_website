import React from 'react';
import Image from 'next/image';

interface ExpertisePlaqueProps {
    imageUrl: string;
    headingText: string;
    paragraphText: string;
}

const ExpertisePlaque: React.FC<ExpertisePlaqueProps> = ({ imageUrl, headingText, paragraphText }) => {
    return (
        <div>
            <div className='flex flex-col md:w-48 lg:w-48 xl:w-56 bg-white rounded-b-lg mb-10 md:mb-28'>
                <div className='flex h-3 bg-butt-color'></div>

                <div className='flex flex-col mt-8 p-2 md:m-2 lg:m-2 xl:m-4 relative h-36 md:h-44 md:w-44 lg:h-40 lg:w-44 xl:h-56 xl:w-48 justify-center items-center content-center justify-items-center'>
                    <Image src={imageUrl} alt={headingText} layout="fill" objectFit="contain" />
                </div>

                <div className='flex flex-col h-16 p-4 justify-center items-center content-center justify-items-center text-purple font-semibold text-center lg:text-md xl:text-lg whitespace-normal'>
                    {headingText}
                </div>

                <div className='flex flex-col lg:h-44 xl:h-36 p-3 justify-start items-center content-center text-center text-sm font-semibold text-gray-700 whitespace-normal'>
                    {paragraphText}
                </div>
            </div>

        </div>
    );
    }

export default ExpertisePlaque;
