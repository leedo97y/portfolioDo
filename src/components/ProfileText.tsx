import { useEffect, useState } from 'react';
import { PortfolioDataType } from '@/types/dataType';

const ProfileText: React.FC = () => {
  const [data, setData] = useState<PortfolioDataType>();

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchData = await fetch('./data.json').then((res) => res.json());

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
    <div className='flex flex-col gap-5 w-fit h-fit text-xl font-bold box-border sm:w-fit sm:h-fit sm:text-sm sm:gap-2 sm:pt-2 md:w-fit md:h-fit md:text-lg md:gap-4 xs:w-fit xs:text-sm xs:gap-3 xxs:w-fit xxs:text-xs xxs:gap-0 xxs:-ml-8'>
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
        <p className='xs:mr-28 xxs:mr-20'>Address.</p>
        <span className='ml-5 text-base font-medium sm:text-xs md:text-sm xs:text-xs xxs:text-[10px]'>
          {data?.information.address}
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
      <div className='flex flex-row mt-5 justify-between'>
        <p className='xs:mr-28 xxs:mr-20'>Github.</p>
        <a
          href={data?.information.contact[1].href}
          className='ml-5 text-base font-medium sm:text-xs md:text-sm xs:text-xs xxs:text-[10px] text-blue-500 transition duration-150 ease-in-out hover:text-blue-600 focus:text-blue-600 active:text-blue-700 '
        >
          {data?.information.contact[1].href}
        </a>
      </div>
      <div className='flex flex-row justify-between'>
        <p className='xs:mr-28 xxs:mr-20'>Velog.</p>
        <a
          href={data?.information.contact[2].href}
          className='ml-5 text-base font-medium sm:text-xs md:text-sm xs:text-xs xxs:text-[10px] text-blue-500 transition duration-150 ease-in-out hover:text-blue-600 focus:text-blue-600 active:text-blue-700 '
        >
          {data?.information.contact[2].href}
        </a>
      </div>
    </div>
  );
};

export default ProfileText;
