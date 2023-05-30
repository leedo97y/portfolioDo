const Header: React.FC = () => {
  return (
    <div className='grid grid-cols-2 gap-4 justify-between w-full h-20 xs:w-full xxs:hidden'>
      <h3 className='w-full h-28 m-8 text-3xl font-bold italic sm:text-lg md:text-xl xs:text-lg'>
        @leedo97y
      </h3>
      <div className='grid grid-cols-3 gap-4 text-right m-8 pr-5 text-xl font-bold italic sm:text-base sm:gap-2 md:text-lg md:gap-3 xs:text-sm xs:grid-cols-1 xs:pr-0'>
        <a href='#profile' className='cursor-pointer xs:hidden xxs:hidden'>
          <p className='transition ease-in-out duration-200 hover:text-blue-500 active:text-blue-500 focus:text-blue-500'>
            Profile.
          </p>
        </a>
        <a href='#project' className='cursor-pointer xs:hidden xxs:hidden '>
          <p className='transition ease-in-out duration-200 hover:text-blue-500 active:text-blue-500 focus:text-blue-500'>
            Project.
          </p>
        </a>
        <p>
          <a
            href='https://velog.io/@dlehdus97'
            className='transition ease-in-out duration-200 hover:text-blue-500 active:text-blue-500 focus:text-blue-500 xxs:hidden'
          >
            My Blog.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Header;
