import { SVGProps } from 'react';

export default function LampSVG({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={props.width}
      height={props.height}
      viewBox='0 0 512 512'
      {...props}
    >
      <path d='m250.3 2.4-2.8 2.4.2 52 .3 52-8.8.4c-7.9.3-9.3.6-12.5 3.1-2.1 1.6-4.8 5-6.2 7.7-2.3 4.5-2.5 6.1-2.5 17.8v12.9l-9.8 2.6c-35.5 9.3-69 28.8-92.8 54C81.7 243 64 284.6 61.4 334l-.7 12.9 3.1 3 3 3.1h107l1.7 7.8c7.3 33.4 32.6 57.9 65.9 63.7 11.2 1.9 18 1.9 29.2 0 33.3-5.8 58.6-30.3 65.9-63.7l1.7-7.8h107.6l2.8-3.2c2.7-3.3 2.7-3.3 2.1-15.3-1.3-27.4-8.5-55.2-20.3-78.6-25.6-51.2-70.5-88.5-121.9-101.7l-10.3-2.6-.4-14.6c-.4-16.7-1.3-19.4-8.9-24.5-3.8-2.6-5.5-3-12.6-3.4l-8.3-.3V60.6c0-26.4-.3-49.8-.6-51.8C266 .5 256.6-3 250.3 2.4zM277 139v9.1l-19.5-.3-19.5-.3V130h39v9zm4.4 31.6c26.9 4.2 50.6 13.2 71.4 27.3 11.9 8 15.3 10.8 26.1 21.4 28.1 27.6 45.8 63.3 50.5 102.4l1.3 10.3H82l.6-5.8c2.8-26.6 11.6-53.2 24.7-74.2 23.5-37.6 62.7-67 103.1-77.2 23.2-5.9 50.2-7.5 71-4.2zm36.2 184.1c-.3 1-.8 3.1-1.2 4.8-1.6 6.9-8 18.1-14.3 24.7-11.7 12.5-25.7 19.3-42 20.4-23.5 1.8-48.4-12.9-58.8-34.6-2.2-4.8-5.3-13.9-5.3-16.3 0-.4 27.5-.7 61.1-.7 57.7 0 61 .1 60.5 1.7z' />
      <path d='M158.5 387.7c-6.4 3.4-39.3 22.7-43.8 25.6-5.8 3.9-7.6 8.6-5.3 14.1 1.7 4.1 4.2 5.6 9.4 5.6 3.2 0 8.2-2.5 28.2-14.3 13.4-7.8 25.2-15.3 26.2-16.7 1-1.4 1.9-4.3 2-6.4.3-7.7-8.9-12.1-16.7-7.9zM340.9 388.9c-3.5 3.6-4 9.5-1 13.3 1.1 1.3 13.1 8.9 26.7 16.8 26.2 15.3 28.5 16.1 34 12.5 4.8-3.1 5.9-10.8 2.2-14.9-1.3-1.4-13.2-8.8-26.5-16.6-20.5-11.9-24.8-14-28.3-14-3.3 0-4.8.6-7.1 2.9zM197.8 426c-2.4 1.8-28.5 45.5-30.7 51.2-3.6 9.5 8.8 18.3 16.3 11.6 1.3-1.3 8.6-12.9 16.1-25.8 16-27.3 17-30.6 11.7-36-3.7-3.7-9.5-4.1-13.4-1zM303.7 425.1c-2.8 1.6-5 6.8-4.4 10.5.7 4.5 26.1 48.1 30.3 52.2 4.5 4.3 9.1 4.4 13.6.3 2.8-2.5 3.3-3.6 3.3-7.3 0-3.7-1.9-7.5-13.4-27.3-14.8-25.6-18-29.5-23.8-29.5-2.1 0-4.6.5-5.6 1.1zM253.2 439.2c-6.3 1.7-6.7 3.2-7 32.8-.2 14.6 0 28.5.3 30.9.9 6.2 4.1 9.1 10 9.1 5.5 0 9-2.9 10-8.1.3-1.9.5-16.1.3-31.6-.3-27.9-.3-28.2-2.6-30.6-2.7-2.8-6.4-3.7-11-2.5z' />
    </svg>
  );
}