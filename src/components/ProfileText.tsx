const ProfileText: React.FC = () => {
  return (
    <div className='flex flex-col gap-5 w-fit h-fit text-xl font-bold box-border sm:w-fit sm:h-fit sm:text-sm sm:gap-2 sm:pt-2 md:w-fit md:h-fit md:text-lg md:gap-4 xs:w-fit xs:text-sm xs:gap-3 xxs:w-fit xxs:text-xs xxs:gap-0 xxs:-ml-8'>
      <div className='flex flex-row justify-between'>
        <p className='xs:mr-28 xxs:mr-20'>Name.</p>
        <span className='ml-5 text-base font-medium sm:text-xs md:text-sm xs:text-xs xxs:text-[10px]'>
          이도연 (LEE DO YEON)
        </span>
      </div>
      <div className='flex flex-row justify-between'>
        <p className='xs:mr-28 xxs:mr-20'>Birth.</p>
        <span className='ml-5 text-base font-medium sm:text-xs md:text-sm xs:text-xs xxs:text-[10px]'>
          1997. 10. 24
        </span>
      </div>
      <div className='flex flex-row justify-between'>
        <p className='xs:mr-28 xxs:mr-20'>Address.</p>
        <span className='ml-5 text-base font-medium sm:text-xs md:text-sm xs:text-xs xxs:text-[10px]'>
          서울시 노원구
        </span>
      </div>

      <div className='flex flex-row justify-between'>
        <p className='xs:mr-28 xxs:mr-20'>Email.</p>
        <a
          href='mailto:dlehdus1433@gmail.com'
          className='ml-5 text-base font-medium sm:text-xs md:text-sm xs:text-xs xxs:text-[10px] text-blue-500 transition duration-150 ease-in-out hover:text-blue-600 focus:text-blue-600 active:text-blue-700 '
        >
          dlehdus1433@gmail.com
        </a>
      </div>
      <div className='flex flex-row mt-5 justify-between'>
        <p className='xs:mr-28 xxs:mr-20'>Github.</p>
        <a
          href='https://github.com/leedo97y'
          className='ml-5 text-base font-medium sm:text-xs md:text-sm xs:text-xs xxs:text-[10px] text-blue-500 transition duration-150 ease-in-out hover:text-blue-600 focus:text-blue-600 active:text-blue-700 '
        >
          https://github.com/leedo97y
        </a>
      </div>
      <div className='flex flex-row justify-between'>
        <p className='xs:mr-28 xxs:mr-20'>Velog.</p>
        <a
          href='https://velog.io/@dlehdus97'
          className='ml-5 text-base font-medium sm:text-xs md:text-sm xs:text-xs xxs:text-[10px] text-blue-500 transition duration-150 ease-in-out hover:text-blue-600 focus:text-blue-600 active:text-blue-700 '
        >
          https://velog.io/@dlehdus97
        </a>
      </div>
    </div>
  );
};

export default ProfileText;
