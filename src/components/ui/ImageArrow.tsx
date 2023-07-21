import clsx from 'clsx';
import { MdArrowDownward } from 'react-icons/md';

interface IImageArrowProps {
  positionOne: string;
  positionTwo: string;
  rotate: string;
}

export default function ImageArrow({
  positionOne,
  positionTwo,
  rotate,
}: IImageArrowProps) {
  return (
    <div
      className={clsx(
        { positionOne },
        { positionTwo },
        'absolute w-fit rounded-sm bg-custom-black p-1 '
      )}
    >
      <MdArrowDownward
        className={clsx({ rotate }, 'text-xl text-custom-green duration-300')}
      />
    </div>
  );
}
