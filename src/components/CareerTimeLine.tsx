import { useEffect, useState } from 'react';
import { PortfolioDataType } from '@/types/dataType';
import Github from '@/images/github.svg';
import { Link } from 'react-router-dom';

const CareerTimeLine = () => {
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
    <div className='flex flex-row gap-5 justify-center box-border w-min h-fit m-5 sm:m-2 sm:w-min sm:gap-2 md:w-min md:m-4 md:gap-4 xs:w-min xs:gap-2 xs:flex-col xs:items-start xxs:w-[100%] xxs:gap-2 xxs:flex-col xxs:items-start'>
      <ol className=' w-full mr-20 sm:w-full sm:-mr-10 md:w-full md:mr-12 xs:w-full xxs:w-full'>
        {/* <!--First item--> */}
        <li>
          <div className='grid grid-flow-col gap-2 xs:gap-0 xxs:gap-0'>
            <div className='flex flex-col gap-1 w-[30vw] border-r border-neutral-300 dark:border-neutral-500 pr-5 xs:w-[25vw] xs:pr-1 xxs:w-[25vw] xxs:pr-1'>
              <span className='text-2xl font-bold md:text-xl sm:text-sm xs:text-xs xxs:text-xs'>
                {data?.workExperience[0].name}
              </span>
              <span className='text-m md:text-sm sm:text-xs xs:text-xs xxs:text-[10px]'>
                {data?.workExperience[0].position}
              </span>
              <span className='text-m md:text-sm sm:text-xs xs:text-xs xxs:text-[10px]'>
                {data?.workExperience[0].period[0]} -{' '}
                {data?.workExperience[0].period[1]}
              </span>
              <div className='flex flex-row gap-3 mt-3'>
                <Link
                  className='w-[7%]'
                  to={'https://github.com/ShinwooDev/Shinwoo_FE'}
                >
                  <img src={Github} width={'100%'} height={'100%'} />
                </Link>
              </div>
            </div>
            <div className='flex flex-col gap-3 w-[55vw] xs:w-[55vw] xxs:w-[55vw]'>
              <span className='text-xl font-semibold pl-3 md:text-m sm:text-sm xs:text-[10px] xs:pl-0 xxs:text-xs xxs:pl-0'>
                {data?.workExperience[0].project[0].name}
              </span>
              <div className=' flex flex-col w-auto p-3 md:text-sm sm:text-xs xs:text-[8px] xs:pl-0 xxs:text-[8px] xxs:pl-0'>
                {data?.workExperience[0].description.map((item, index) => (
                  <p className='' key={index}>
                    {item}
                  </p>
                ))}
              </div>
              <ul className='flex flex-col pl-8 gap-2 list-disc xs:pl-3 xxs:pl-3'>
                {data?.workExperience[0].project[0].description.map(
                  (item, index) => (
                    <li
                      className=' marker:xs:text-[9px] marker:xxs:text-[9px]'
                      key={index}
                    >
                      <div className='md:text-sm sm:text-xs xs:text-[9px] xxs:text-[9px]'>
                        <p>{item.mainText}</p>
                        {item.subText.map((subItem, index) => (
                          <p
                            className='indent-3 md:text-sm sm:text-xs xs:text-[8px] xxs:text-[8px]'
                            key={index * 10}
                          >
                            {subItem}
                          </p>
                        ))}
                      </div>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default CareerTimeLine;
