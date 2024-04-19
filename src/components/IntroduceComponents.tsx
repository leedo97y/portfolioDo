import { PortfolioDataType } from '@/types/dataType';
import { useEffect, useState } from 'react';

const IntroComponents: React.FC = () => {
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
    <div className='flex flex-col gap-5 border-l pl-8 pr-8 w-fit h-fit justify-center sm:w-fit sm:h-fit sm:pt-2 sm:-pl-2 sm:border-none md:w-fit md:h-fit md:border-none md:pt-2 md:-pl-2 xs:w-fit xs:p-0 xs:pr-10 xs:border-none xxs:w-fit xxs:p-0 xxs:border-none'>
      <p className='font-semibold text-l sm:text-sm md:text-base xs:text-xs xxs:text-[11px]'>
        {data?.information.introductionText.mainText}
      </p>
      <div className='sm:text-xs md:text-sm xs:text-[10px] xxs:text-[10px]'>
        <p className='mb-2 text-pretty break-words'>
          ∙ {data?.information.introductionText.baseText[0].baseMainText}
        </p>
        {data?.information.introductionText.baseText[0].baseSubText.map(
          (item, index) => (
            <p key={index}>
              {/* UI / UX등 사용자의 사용성을 높일 수 있는 웹 페이지를 만드는 것,
              <br />
              사용자와의 원활한 소통이 가능한 웹 / 앱 서비스를 개발하는 것이
              목표입니다. */}
              {item}
            </p>
          ),
        )}
      </div>
      <div className='sm:text-xs md:text-sm xs:text-[10px] xxs:text-[10px]'>
        <p className='mb-2 text-pretty break-words'>
          ∙ {data?.information.introductionText.baseText[1].baseMainText}
        </p>
        {data?.information.introductionText.baseText[1].baseSubText.map(
          (item, index) => (
            <p key={index}>
              {/* 협업을 진행할 때 제일 중요한 것은 소통이라고 생각합니다.
          <br />
          동료들과의 원활한 협업을 위해 부드럽지만 효율적이고 직관적인 소통을
          하고 <br className='xs:hidden sm:hidden md:hidden' />
          싶습니다. */}
              {item}
            </p>
          ),
        )}
      </div>
    </div>
  );
};

export default IntroComponents;
