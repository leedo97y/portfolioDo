import { useEffect, useState } from 'react';
import { PortfolioDataType } from '@/types/dataType';
import Github from '@/images/github.svg';
import Velog from '@/images/velog.svg';

const ProfileText: React.FC = () => {
  const [data, setData] = useState<PortfolioDataType>();

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchData = await fetch('/data.json').then((res) => res.json());

        if (fetchData) {
          setData(fetchData);
        }
      } catch (err: unknown) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <div className='flex flex-col gap-5 w-[30vw] h-fit pr-10 text-xl font-bold box-border sm:h-fit sm:text-sm sm:gap-2 sm:pt-2 md:h-fit md:text-lg md:gap-4 xs:w-[450px] xs:text-sm xs:gap-3 xxs:w-[300px] xxs:text-xs xxs:gap-2 '>
      <div className='flex flex-row justify-between'>
        <p className='xs:mr-28 xxs:mr-20'>Name.</p>
        <span className='ml-5 text-base font-medium sm:text-xs md:text-sm xs:text-xs xxs:text-[10px]'>
          {data?.information.name}
        </span>
      </div>
      <div className='flex flex-row justify-between'>
        <p className='xs:mr-28 xxs:mr-20'>Birth.</p>
        <span className='ml-5 text-base font-medium sm:text-xs md:text-sm xs:text-xs xxs:text-[10px]'>
          {data?.information.birth}
        </span>
      </div>

      <div className='flex flex-row justify-between'>
        <p className='xs:mr-28 xxs:mr-20'>Email.</p>
        <a
          href={'mailto:' + data?.information.contact[0].href}
          className='ml-5 text-base font-medium sm:text-xs md:text-sm xs:text-xs xxs:text-[10px] text-blue-500 transition duration-150 ease-in-out hover:text-blue-600 focus:text-blue-600 active:text-blue-700 '
        >
          {data?.information.contact[0].href}
        </a>
      </div>
      <div className='flex flex-row gap-4 mt-3 w-full h-fit xxs:gap-3'>
        <a
          href={data?.information.contact[1].href}
          className='w-[7%] xs:w-[5%] xxs:w-[5%] text-blue-500 transition duration-150 ease-in-out hover:text-blue-600 focus:text-blue-600 active:text-blue-700 '
        >
          <img src={Github} alt='github' width={'100%'} height={'20%'} />
        </a>
        <a
          href={data?.information.contact[2].href}
          className='w-[7%] xs:w-[5%] xxs:w-[5%] text-blue-500 transition duration-150 ease-in-out hover:text-blue-600 focus:text-blue-600 active:text-blue-700 '
        >
          <img src={Velog} alt='velog' width={'100%'} height={'20%'} />
        </a>
      </div>
      {/* <div className='flex flex-row justify-between'>
        
      </div> */}
    </div>
  );
};

export default ProfileText;
