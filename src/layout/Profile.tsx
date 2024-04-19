import IntroduceComponents from '@components/IntroduceComponents';
import ProfileText from '@components/ProfileText';

const Profile: React.FC = () => {
  return (
    <div className='flex flex-col mt-10 justify-center w-full h-full sm:w-fit sm:mt-4 md:w-fit md:mt-8 xs:w-fit xs:-mt-2 xxs:w-fit xxs:-mt-2'>
      <div className='m-2 pb-2 w-auto md:w-auto sm:w-[650px] xs:w-[450px] xxs:w-[300px]'>
        <p
          id='profile'
          className='text-2xl font-bold pl-2 bg-blue-900 p-[0.5px] mt-1 sm:text-sm md:text-base xs:text-sm xxs:text-sm'
        >
          Profile.
        </p>
      </div>
      <div className='flex flex-row justify-start gap-10 box-border w-[90vw] h-full m-5 mr-0 sm:w-full sm:gap-10 md:gap-10 xs:flex-col xs:w-full xs:gap-10 xxs:flex-col xxs:w-fit xxs:gap-10 '>
        <ProfileText />
        <IntroduceComponents />
      </div>
    </div>
  );
};

export default Profile;
