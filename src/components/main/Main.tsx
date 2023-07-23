import clsx from 'clsx';
import Image from 'next/image';

import patternOne from '@public/assets/images/pattern-1.webp';

export default function Main() {
  return (
    <section
      className={clsx(
        'z-[1000] col-start-3 col-end-12 h-full overflow-y-visible px-4',
        'md:px-0',
        'lg:col-start-5'
      )}
    >
      <div className='flex flex-wrap pt-[clamp(5.875rem,_0.0294rem_+_7.7941vw,_12.5rem)]'>
        <div className='w-full bg-custom-black'>
          <Image src={patternOne.src} alt='images' width={300} height={300} />
          <Image src={patternOne.src} alt='images' width={300} height={300} />
          <Image src={patternOne.src} alt='images' width={300} height={300} />
          <Image src={patternOne.src} alt='images' width={300} height={300} />
          <Image src={patternOne.src} alt='images' width={300} height={300} />
          <Image src={patternOne.src} alt='images' width={300} height={300} />
          <Image src={patternOne.src} alt='images' width={300} height={300} />
          <Image src={patternOne.src} alt='images' width={300} height={300} />
          <Image src={patternOne.src} alt='images' width={300} height={300} />
        </div>
      </div>
    </section>
  );
}
