import IntroduceComponents from '@components/IntroduceComponents';

const Introduction: React.FC = () => {
  return (
    <div className='grid grid-cols-2 mt-8'>
      <div className='m-2  pb-2'>
        <p className='text-2xl font-bold pl-2 bg-blue-900 p-[0.5px]'>
          Introduce.
        </p>
      </div>
      <div className='flex flex-col gap-5 justify-center box-border h-fit m-5'>
        <div className='flex flex-col items-center'>
          <IntroduceComponents />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
