import clsx from 'clsx';

interface ILoadingSkeletonProps {
  className?: string;
}

export default function LoadingSkeleton({ className }: ILoadingSkeletonProps) {
  return (
    <div
      className={clsx(
        className,
        'animate-pulse rounded bg-slate-300',
        'dark:bg-custom-green/40'
      )}
    ></div>
  );
}
