// import { useEffect, useState } from 'react';
import TimeLine from '@components/TimeLine';

const Projects: React.FC = () => {
  return (
    <div className='flex flex-col mt-10 justify-center w-full h-full sm:w-fit sm:mt-4 md:w-fit md:mt-8 xs:w-fit xs:mt-2 xxs:w-fit xxs:mt-2'>
      <div className='m-2 pb-2 scroll-pb-24 w-auto xxs:w-[63%]'>
        <p
          id='project'
          className='text-2xl font-bold mt-1 pl-2 bg-blue-900 p-[0.5px] sm:w-full md:w-full sm:text-sm md:text-base xs:w-full xs:text-sm xxs:w-full xxs:text-sm'
        >
          Projects.
        </p>
      </div>
      <TimeLine />
    </div>
  );
};

export default Projects;
