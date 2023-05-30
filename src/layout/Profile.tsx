import IntroduceComponents from '@components/IntroduceComponents';
import ProfileText from '@components/ProfileText';

const Profile: React.FC = () => {
  return (
    <div className='flex flex-col w-fit h-full sm:w-fit md:w-fit xs:w-full xs:-mt-5 xxs:w-fit xxs:-mt-5'>
      <div className='m-2 pb-2 w-auto sm:w-auto md:w-auto xs:w-auto xxs:w-[101%]'>
        <p
          id='profile'
          className='text-2xl font-bold pl-2 bg-blue-900 p-[0.5px] mt-1 sm:text-sm md:text-base xs:text-sm xxs:text-sm'
        >
          Profile.
        </p>
      </div>
      <div className='flex flex-row justify-start gap-20 box-border w-auto h-full m-5 sm:w-auto sm:gap-10 md:w-auto md:gap-10 xs:flex-col xs:w-full xs:gap-10 xs:items-center xs:-ml-5 xxs:flex-col xxs:w-full xxs:gap-10 xxs:items-center'>
        <ProfileText />
        <IntroduceComponents />
      </div>
    </div>
  );
};

export default Profile;
