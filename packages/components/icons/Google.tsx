import type { SVGProps } from 'react'
const SvgGoogle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="m6.472 4.023 9.164 5.048-2.165 2.07-7.183-6.87c-.13-.123.02-.337.178-.251zM5 19.017V4.982a.155.155 0 0 1 .263-.11L12.571 12l-7.308 7.127a.154.154 0 0 1-.263-.11M6.289 19.728c-.13.124.02.338.178.252l.006-.003 9.163-5.049-2.165-2.07zM16.776 9.698l2.559 1.41c.696.384.696 1.4 0 1.785l-2.56 1.408L14.37 12z"
    />
  </svg>
)
export default SvgGoogle
