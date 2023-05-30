import Header from '@layout/Header';
import Profile from '@layout/Profile';
import Projects from '@layout/Projects';
import chat from '@images/chat.png';
import TopButton from '@layout/TopButton';

const Portfolio: React.FC = () => {
  return (
    <>
      <Header />
      <div className='grid justify-center m-5 w-full box-border mt-10 xs:w-full xxs:w-fit'>
        <div className='flex flex-row items-center w-full xs:flex-col xs:items-start xxs:flex-col xxs:items-start'>
          <img
            src={chat}
            alt='chat bubble image'
            className='w-[5rem] h-[5rem] mr-5 ml-5 sm:w-[3rem] sm:h-[3rem] sm:mr-3 sm:ml-3 md:w-[4rem] md:h-[4rem] md:mr-4 md:ml-4 xs:w-[3rem] xs:h-[3rem] xs:ml-3 xxs:w-[3rem] xxs:h-[3rem] xxs:ml-3'
          />
          <p className='text-4xl font-bold mt-8 mb-10 pt-4 sm:text-2xl md:text-3xl xs:text-xl xs:mt-0 xxs:text-base xxs:mt-0'>
            &nbsp; 소통을 중요시하는 프론트엔드 개발자 이도연입니다.
          </p>
        </div>
        <Profile />
        <Projects />
      </div>
      <TopButton />
    </>
  );
};

export default Portfolio;
