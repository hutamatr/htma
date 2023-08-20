'use client';

import clsx from 'clsx';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { useStore } from '@store/useStore';

import NextImage from './next-image';
import CloseSVG from './svg/CloseSVG';

interface IModalCardProps extends IPortfolio {
  outerClassName?: string;
  innerClassName?: string;
}

type IModalProps = IModalCardProps;

export default function Modal({
  innerClassName,
  outerClassName,
  ...props
}: IModalProps) {
  const { isClient, clientHandler } = useStore((state) => ({
    isClient: state.isClient,
    clientHandler: state.clientHandler,
  }));

  useEffect(() => {
    clientHandler();
  }, [clientHandler]);

  return (
    <div className='relative'>
      {isClient && (
        <>
          {createPortal(
            <ModalBackdrop />,
            document.getElementById('modal-backdrop')!
          )}
          {createPortal(
            <ModalClose />,
            document.getElementById('modal-close')!
          )}
          {createPortal(
            <ModalCard
              innerClassName={innerClassName}
              outerClassName={outerClassName}
              {...props}
            />,
            document.getElementById('modal-card')!
          )}
        </>
      )}
    </div>
  );
}

function ModalCard({
  innerClassName,
  outerClassName,
  title,
  image,
}: IModalCardProps) {
  const { isModalShow } = useStore((state) => state);
  return (
    <section
      className={clsx(
        outerClassName,
        isModalShow ? '' : 'translate-y-[999px]',
        'fixed bottom-0 left-0 z-[1300] h-[90vh] w-full overflow-scroll rounded-t-3xl bg-custom-white-2 p-6 text-center font-semibold uppercase shadow-custom-shadow duration-700',
        'dark:bg-custom-black',
        'lg:h-[80vh]'
      )}
    >
      <div
        className={clsx(
          innerClassName,
          'layout flex flex-col gap-y-2 rounded-xl border-2 border-custom-black/70 p-4'
        )}
      >
        <div
          className={clsx(
            'flex flex-col-reverse items-start gap-y-2',
            'md:grid md:grid-cols-6 md:grid-rows-none md:justify-items-start'
          )}
        >
          <h1
            className={clsx(
              'text-start text-5xl font-bold uppercase text-custom-black',
              'md:col-start-1 md:col-end-5 md:text-8xl'
            )}
          >
            {title}
          </h1>
          <span
            className={clsx(
              'h-16 w-full rounded-full bg-custom-green',
              'md:col-start-5 md:col-end-7 md:h-24'
            )}
          ></span>
        </div>
        <NextImage
          src={image?.src}
          alt={title}
          width={600}
          height={600}
          className='h-full w-full'
          imgClassName='w-full shadow-custom-shadow h-[27rem] object-top object-cover object-center rounded-xl'
        />
      </div>
    </section>
  );
}

function ModalClose() {
  const { isModalShow, showModalHandler } = useStore((state) => state);

  return (
    <div
      className={clsx(
        isModalShow ? '' : '-translate-y-[999px]',
        'fixed right-0 top-0 z-[1300] flex h-[10vh] w-full items-center justify-center duration-700',
        'lg:h-[19vh]'
      )}
    >
      <div className='layout flex flex-row-reverse items-center justify-between'>
        <button onClick={showModalHandler}>
          <CloseSVG
            className={clsx('mx-4 w-8 text-custom-green')}
            fill='currentColor'
          />
        </button>
        {/* <div
          className={clsx(
            'm-2 flex h-[12vh] items-center rounded-[2rem] bg-custom-black text-custom-green',
            'dark:bg-custom-white-2 dark:text-custom-black'
          )}
        >
          <h1 className='p-4'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            aut!
          </h1>
        </div> */}
      </div>
    </div>
  );
}

function ModalBackdrop() {
  const { isModalShow } = useStore((state) => state);

  return (
    <>
      {isModalShow && (
        <div
          className='fixed left-0 top-0 z-[1250] min-h-full w-full bg-slate-800/70'
          // onClick={showModalHandler}
        />
      )}
    </>
  );
}
