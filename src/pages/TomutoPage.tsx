import { useEffect, useState } from 'react';
import { PortfolioDataType } from '../types/dataType';
import tomatoMain from '@images/tomatoMain.png';
import tomuto from '@images/tomuto.png';

const TomatoMusicPage: React.FC = () => {
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
    <>
      <div className='flex flex-col items-center w-full'>
        <div className='flex flex-col gap-5 m-10 w-2/3'>
          <div className='flex flex-row items-center gap-4 mb-8'>
            <img
              src={tomuto}
              alt='tomuto logo'
              className='w-20 xxs:w-14 xxs:mr-2 sm:w-14 sm:mr-2 xs:w-14 xs:mr-2'
            />
            <div>
              <h1 className='font-bold text-4xl mb-1.5 xxs:text-xl sm:text-2xl xs:text-xl'>
                {data?.project[4].name}
              </h1>
              <p className='text-sm text-slate-400 xxs:text-xs xxs:-mt-1 sm:text-sm sm:-mt-1 xs:text-xs xs:-mt-1'>
                {data?.project[4].period[0]} - {data?.project[4].period[1]}
              </p>
            </div>
          </div>
          <div className='flex flex-col w-full'>
            <p className='font-bold text-2xl mb-5 border-b-[0.5px] pb-2 xxs:text-lg sm:text-xl xs:text-lg'>
              프로젝트 메인 이미지
            </p>
            <img src={tomatoMain} alt='project image' className='w-full' />
          </div>
          <div className='flex flex-col gap-5 border-[0.5px] p-5'>
            <p className='font-bold text-xl xxs:text-sm sm:text-lg xs:text-sm'>
              프로젝트 링크
            </p>
            <div>
              <p className='font-bold text-base mb-1 xxs:text-sm sm:text-base xs:text-sm'>
                Github.
              </p>
              <a className='text-sky-600 xxs:text-xs sm:text-sm xs:text-xs'>
                {data?.project[4].repoUrl}
              </a>
            </div>
            <div>
              <p className=' font-bold text-base mb-1 xxs:text-sm sm:text-base xs:text-sm'>
                WebSite.
              </p>
              <a className='text-sky-600 xxs:text-xs sm:text-sm xs:text-xs'>
                {data?.project[4].webUrl}
              </a>
            </div>
          </div>
          <div className='flex flex-col justify-center gap-5 border-[0.5px] p-5 mb-7'>
            <p className='font-bold text-xl xxs:text-sm sm:text-lg xs:text-sm'>
              기술 스택
            </p>
            <div className='xxs:text-xs sm:text-sm xs:text-xs'>
              {data?.project[4].stack.join(', ')}
            </div>
          </div>
          <div className='flex flex-col justify-center gap-5'>
            <p className='font-bold text-2xl border-b-[0.5px] pb-2 xxs:text-lg sm:text-xl xs:text-lg'>
              프로젝트 설명
            </p>
            <div className='flex flex-col w-full gap-2 leading-7 whitespace-pre-wrap xxs:text-xs sm:text-sm xs:text-xs'>
              {data?.project[4].description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TomatoMusicPage;
