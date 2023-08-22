import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';

type NextImageProps = {
  useSkeleton?: boolean;
  imgClassName?: string;
  blurClassName?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: React.Ref<HTMLImageElement | null>;
  alt: string;
} & (
  | { width: string | number; height: string | number }
  | { layout: 'fill'; width?: string | number; height?: string | number }
) &
  ImageProps;

const NextImage = ({
  src,
  width,
  height,
  alt,
  ref,
  className,
  imgClassName,
  ...rest
}: NextImageProps) => {
  const widthIsSet = className?.includes('w-') ?? false;

  return (
    <figure
      style={!widthIsSet ? { width: `${width}px` } : undefined}
      className={className}
    >
      <Image
        className={clsx(imgClassName)}
        src={src}
        width={width}
        height={height}
        alt={alt}
        ref={ref}
        {...rest}
      />
    </figure>
  );
};

export default NextImage;
