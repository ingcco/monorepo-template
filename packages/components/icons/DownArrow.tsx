import type { SVGProps } from 'react'
const SvgDownArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={6}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M7.421 0H.579C.094 0-.175.62.128 1.037l3.42 4.723c.232.32.672.32.903 0l3.421-4.723C8.175.62 7.906 0 7.421 0"
    />
  </svg>
)
export default SvgDownArrow
