import clsx from 'clsx';

interface ILoadingSpinProps {
  className?: string;
}

export default function LoadingSpin({ className }: ILoadingSpinProps) {
  return <div className={clsx(className, 'loader')}></div>;
}
