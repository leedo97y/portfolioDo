import Top from '@images/top.png';

const topButton: React.FC = () => {
  const onClickTopBtn = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='sticky bottom-0 bg-transparent float-right'>
      <div
        onClick={onClickTopBtn}
        className='flex justify-center items-center w-[3.5rem] h-[3.5rem] bg-blue-700 mb-5 mr-5 rounded-full sm:w-[2.5rem] sm:h-[2.5rem] md:w-[3rem] md:h-[3rem] xs:w-[2.5rem] xs:h-[2.5rem] xxs:w-10 xxs:h-10 shadow-md'
      >
        <img
          className='bg-transparent w-8 h-8 sm:w-5 sm:h-5 md:w-6 md:h-6 xs:w-5 xs:h-5 xxs:w-5 xxs:h-5'
          src={Top}
          alt='Top button'
        />
      </div>
    </div>
  );
};

export default topButton;
