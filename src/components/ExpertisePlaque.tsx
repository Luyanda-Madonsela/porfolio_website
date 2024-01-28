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
        <div className='flex flex-col w-64 bg-custom-gray'>
            <div className='flex h-3 bg-butt-color'></div>
            <div className='flex h-52'><Image src={imageUrl} alt={headingText} width={imageWidth} height={imageHeight} /></div>
            <Balancer>
                        <p className='flex flex-col h-28 justify-center items-center content-center justify-items-center text-purple font-semibold text-lg'>{headingText}</p>
                        <p className='flex flex-col h-48 pl-4 justify-start items-center content-center text-sm font-semibold '>{paragraphText}</p>
            </Balancer>
        </div>
    </div>
 );
}

export default ExpertisePlaque;
