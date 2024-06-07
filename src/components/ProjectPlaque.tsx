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
        <div className='flex flex-row w-full h-72 md:h-40 lg:h-40 xl:h-48  bg-white rounded-r-lg'>

                <div className='flex w-3 bg-butt-color'></div>

                <div className='flex w-full md:w-auto flex-col md:flex-row justify-center items-center content-center md:ml-5 gap-2 md:gap-5 mr-1'>
                    <div className='flex lg:h-32 lg:w-32 xl:h-40 xl:w-48 xl:p-6 justify-center items-center content-center'>
                        {mainImage}
                    </div>

                    <div className='flex flex-col w-full md:w-40 md:h-32 lg:w-40 lg:h-32 xl:w-64 xl:h-40 justify-center items-start content-center'>
                        <div className='flex w-full justify-center md:justify-start items-start content-center text-purple font-semibold text-2xl xl:text-2xl md:pl-0'>{headingText1}</div>
                        <div className='flex w-full justify-center md:justify-start items-start content-center text-purple font-semibold text-2xl xl:text-2xl'>{headingText2}</div>
                    </div>

                    <div className='flex flex-row md:h-32 md:w-36 lg:h-32 lg:w-56 custom:h-40 custom:w-96 xl:h-40 xl:w-112 2xl:h-40 2xl:w-140 md:pl-4 lg:pl-4 xl:pl-5 2xl:pl-24 justify-start items-center content-start'>
                        {stackImage}
                    </div>

                    <div className='flex ml-1 xl:h-40 custom:w-64 custom:h-40  xl:w-72 2xl:h-40 2xl:w-96 gap-4 md:gap-5 lg:gap-10 custom:gap-5  justify-center items-center content-center'>
                        {button1}
                        {button2}
                    </div>

                </div>
        </div>
    </div>
 );
}

export default ProjectPlaque;
