import clsx from 'clsx';

interface ILoadingSpinProps {
  className?: string;
}

export default function LoadingSpin({
  className,
}: Readonly<ILoadingSpinProps>) {
  return <div className={clsx(className, 'loader')}></div>;
}
