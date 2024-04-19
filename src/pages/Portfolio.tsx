import { useEffect, useState } from 'react';
import { PortfolioDataType } from '@/types/dataType';
import Header from '@layout/Header';
import Profile from '@layout/Profile';
import Projects from '@layout/Projects';
import TopButton from '@layout/TopButton';
import Career from '@/layout/Career';

const Portfolio: React.FC = () => {
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
    <>
      <Header />
      <div className='grid justify-center m-5 w-full box-border mt-10 xs:w-full xxs:w-fit'>
        <div className='flex flex-row items-center w-full xs:flex-col xs:items-start xxs:flex-col xxs:items-start'>
          <p className='text-4xl font-bold mt-8 mb-5 pt-4 pl-2 sm:text-2xl md:text-3xl xs:text-xl xs:mt-0 xxs:text-base xxs:mt-0'>
            {data?.resumeTitle.title}
          </p>
        </div>
        <Profile />
        <Career />
        <Projects />
      </div>
      <TopButton />
    </>
  );
};

export default Portfolio;
