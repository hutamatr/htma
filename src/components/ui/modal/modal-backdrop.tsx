import { useStore } from '@store/useStore';

export default function ModalBackdrop() {
  const { isModalShow, showModalHandler } = useStore((state) => state);

  return (
    <>
      {isModalShow && (
        <div
          className='fixed left-0 top-0 z-[1250] min-h-full w-full bg-slate-800/70'
          onClick={showModalHandler}
        />
      )}
    </>
  );
}
