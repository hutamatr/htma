'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { useStore } from '@store/useStore';

import ModalBackdrop from './modal-backdrop';
import ModalCard, { IModalCardProps } from './modal-card';
import ModalClose from './modal-close';

type IModalProps = IModalCardProps;

export default function Modal({
  innerClassName,
  outerClassName,
  ...props
}: Readonly<IModalProps>) {
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
