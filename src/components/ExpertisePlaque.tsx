import React from 'react';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

interface ExpertisePlaqueProps {
 imageUrl: string;
 headingText: string;
 paragraphText: string;
 imageWidth: number;
 imageHeight: number;
}

const ExpertisePlaque: React.FC<ExpertisePlaqueProps> = ({ imageUrl, headingText, paragraphText, imageWidth, imageHeight }) => {
 return (
    <div>
<div className='flex flex-col w-64 bg-custom-gray rounded-b-lg mb-32'>
    <div className='flex h-3 bg-butt-color'></div>
    <div className='flex h-64 p-6'>
        <Image src={imageUrl} alt={headingText} width={imageWidth} height={imageHeight} />
    </div>
    <div className='flex flex-col h-24 justify-center items-center content-center justify-items-center text-purple font-semibold text-xl whitespace-normal'>
        {headingText}
    </div>
    <div className='flex flex-col h-32 pl-4 justify-start items-center content-center text-sm font-semibold text-gray-700 whitespace-normal'>
        {paragraphText}
    </div>
</div>

    </div>
 );
}

export default ExpertisePlaque;
