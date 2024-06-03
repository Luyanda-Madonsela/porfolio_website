import React from 'react';

interface ProjectPlaqueProps {
    mainImage: React.ReactNode;
    stackImage: React.ReactNode;
    headingText1: string;
    headingText2: string;
    button1: React.ReactNode;
    button2: React.ReactNode;
}

const ProjectPlaque: React.FC<ProjectPlaqueProps> = ({ mainImage, stackImage, headingText1, headingText2, button1, button2 }) => {
 return (
    <div>
        <div className='flex flex-row w-full md:h-40 lg:h-40 xl:h-48  bg-custom-gray rounded-r-lg'>

                <div className='flex w-3 bg-butt-color'></div>

                <div className='flex flex-row justify-center items-center content-center ml-5 gap-5'>
                    <div className='flex lg:h-32 lg:w-32 xl:h-40 xl:w-48 xl:p-6 justify-center items-center content-center'>
                        {mainImage}
                    </div>

                    <div className='flex flex-col md:w-40 md:h-32 lg:w-40 lg:h-32 xl:w-64 xl:h-40 justify-center items-start content-center'>
                        <div className='text-purple font-semibold text-lg xl:text-2xl'>{headingText1}</div>
                        <div className='text-purple font-semibold text-lg xl:text-2xl'>{headingText2}</div>
                    </div>

                    <div className='flex flex-row md:h-32 md:w-36 lg:h-32 lg:w-56 custom:h-40 custom:w-96  xl:h-40 xl:w-112 2xl:h-40 2xl:w-140 md:pl-4 lg:pl-4 xl:pl-5 2xl:pl-24 justify-start items-center content-start'>
                        {stackImage}
                    </div>

                    <div className='flex xl:h-40 custom:w-64 custom:h-40  xl:w-72 2xl:h-40 2xl:w-96 sm:gap-5 lg:gap-10 custom:gap-5  justify-center items-center content-center'>
                        {button1}
                        {button2}
                    </div>

                </div>
        </div>
    </div>
 );
}

export default ProjectPlaque;
