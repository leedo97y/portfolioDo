const IntroComponents: React.FC = () => {
  return (
    <div className='flex flex-col gap-5 border p-8 w-fit h-fit justify-center sm:w-fit sm:h-fit sm:pt-2 sm:-pl-2 sm:border-none md:w-fit md:h-fit md:p-7 xs:w-fit xs:p-5 xxs:w-fit xxs:p-0 xxs:-ml-5 xxs:border-none'>
      <p className='font-semibold text-l sm:text-sm md:text-base xs:text-xs xxs:text-[11px]'>
        소통을 잘하는 프론트엔드 개발자 이도연 입니다.
      </p>
      <div className='ml-5 sm:ml-0 md:ml-4 sm:text-xs md:text-sm xs:text-[10px] xs:ml-0 xxs:text-[10px] xxs:ml-0'>
        <p className='mb-2'>📍 뚜렷한 목표 의식을 가지고 있습니다.</p>
        <p>
          UI / UX등 사용자의 사용성을 높일 수 있는 웹 페이지를 만드는 것,
          <br />
          사용자와의 원활한 소통이 가능한 웹 / 앱 서비스를 개발하는 것이
          목표입니다.
        </p>
      </div>
      <div className='ml-5 sm:ml-0 md:ml-4 sm:text-xs md:text-sm xs:text-[10px] xs:ml-0 xxs:text-[10px] xxs:ml-0'>
        <p className='mb-2'>📍 효율적인 소통을 추구합니다.</p>
        <p>
          협업을 진행할 때 제일 중요한 것은 소통이라고 생각합니다.
          <br />
          동료들과의 원활한 협업을 위해 부드럽지만 효율적이고 직관적인 소통을
          하고 <br className='xs:hidden sm:hidden md:hidden' />
          싶습니다.
        </p>
      </div>
    </div>
  );
};

export default IntroComponents;
