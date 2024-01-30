import React from 'react';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

interface ProjectPlaqueProps {
 imageUrl: string;
 headingText1: string;
 headingText2: string;
 imageWidth: number;
 imageHeight: number;
}

const ProjectPlaque: React.FC<ProjectPlaqueProps> = ({ imageUrl, headingText1, headingText2, imageWidth, imageHeight }) => {
 return (
    <div>
        <div className='flex flex-row w-full h-48 bg-custom-gray rounded-r-lg '>
            <div className='flex w-3 bg-butt-color'></div>

                <div className='flex flex-row justify-center items-center content-center ml-5 gap-5'>
                    <div className='flex h-40 w-48 p-6 justify-center items-center content-center'>
                        <Image src={imageUrl} alt={headingText1} width={imageWidth} height={imageHeight} />    
                    </div>

                    <div className='flex flex-col w-64 h-40 justify-center items-center content-center'>
                        <div className='text-purple font-semibold text-2xl'>{headingText1}</div>
                        <div className='text-purple font-semibold text-2xl'>{headingText2}</div>
                    </div>

                    <div className='flex border h-40 w-140'>

                    </div>

                    <div className='flex border h-40 w-96'>

                    </div>

                </div>
        </div>
    </div>
 );
}

export default ProjectPlaque;