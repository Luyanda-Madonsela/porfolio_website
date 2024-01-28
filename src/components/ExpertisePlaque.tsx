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
        <div className='flex flex-col w-64 bg-custom-gray rounded-b-lg'>
            <div className='flex h-3 bg-butt-color'></div>
            <div className='flex h-64 p-6'><Image src={imageUrl} alt={headingText} width={imageWidth} height={imageHeight} /></div>
            <Balancer>
                        <p className='flex flex-col h-28 justify-center items-center content-center justify-items-center text-purple font-semibold text-xl'>{headingText}</p>
                        <p className='flex flex-col h-40 pl-4 justify-start items-center content-center text-sm font-semibold text-gray-700 '>{paragraphText}</p>
            </Balancer>
        </div>
    </div>
 );
}

export default ExpertisePlaque;
