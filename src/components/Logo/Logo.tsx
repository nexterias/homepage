import React from 'react'

export const Logo = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => (
  <svg
    version="1.1"
    width="281px"
    height="321px"
    viewBox="-0.5 -0.5 281 321"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <defs />
    <g>
      <path
        d="M 150,250 470,10 V -30 L 150,210 Z"
        transform="rotate(90,200,50)"
      />
      <path
        d="m 430,210 -20,-40 20,-40 z m 0,30 v -70 h 20 v 70 z m 0,-110 40,80 v 40 L 430,170 Z M 150,250 v -40 h 320 v 40 z"
        transform="rotate(90,200,50)"
      />
      <path
        d="m 190,10 20,40 -20,40 z m -20,40 v -70 h 20 v 70 z m 20,40 -40,-80 v -40 l 40,80 z M 150,10 v -40 h 320 v 40 z"
        transform="rotate(90,200,50)"
      />
    </g>
  </svg>
))

Logo.displayName = 'Logo'
