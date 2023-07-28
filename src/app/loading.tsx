import LoadingSpin from '@components/ui/LoadingSpin';

export default function Loading() {
  return (
    <div className='col-start-7 flex h-screen w-full items-center justify-center lg:col-start-8'>
      <LoadingSpin />
    </div>
  );
}
