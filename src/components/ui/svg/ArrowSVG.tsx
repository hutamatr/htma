import { SVGProps } from 'react';
export default function ArrowSVG({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={props.width}
      height={props.height}
      viewBox='0 0 512 512'
      {...props}
    >
      <path d='M149 149.5V171h160.5L218 262.5 126.5 354l15.8 15.7 15.7 15.8 91.5-91.5 91.5-91.5V363h44V128H149v21.5z' />
    </svg>
  );
}
