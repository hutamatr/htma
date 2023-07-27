import clsx from 'clsx';

export default function ContactPage() {
  return (
    <section
      className={clsx(
        'z-[1000] col-start-3 col-end-12 h-full overflow-y-visible px-4',
        'md:px-0',
        'lg:col-start-5'
      )}
    >
      <div className='flex flex-wrap pt-[clamp(5.875rem,_0.0294rem_+_7.7941vw,_12.5rem)]'>
        <div className='w-full'>
          <h1 className='text-4xl'>Contact</h1>
        </div>
      </div>
    </section>
  );
}
