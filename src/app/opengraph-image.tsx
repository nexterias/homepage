import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const contentType = 'image/png'
export const alt = 'We are NEXTERIAS, We are Happy Coders'
export const size = {
  width: 1200,
  height: 630,
}

export default function OpenGraph() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#000',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            height: '100%',
            width: '100%',
            fontWeight: 'bolder',
            fontSize: 96,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <span>We are</span>
          <span
            style={{
              backgroundImage: 'linear-gradient(45deg, #ca8a04, #db2777)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              marginLeft: 16,
            }}
          >
            Happy Coders
          </span>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 32,
            right: 32,
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
          }}
        >
          <svg
            version="1.1"
            height={32}
            viewBox="-0.5 -0.5 281 321"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
          >
            <g>
              <path
                d="M 150,250 470,10 V -30 L 150,210 Z"
                transform="rotate(90,200,50)"
              ></path>
              <path
                d="m 430,210 -20,-40 20,-40 z m 0,30 v -70 h 20 v 70 z m 0,-110 40,80 v 40 L 430,170 Z M 150,250 v -40 h 320 v 40 z"
                transform="rotate(90,200,50)"
              ></path>
              <path
                d="m 190,10 20,40 -20,40 z m -20,40 v -70 h 20 v 70 z m 20,40 -40,-80 v -40 l 40,80 z M 150,10 v -40 h 320 v 40 z"
                transform="rotate(90,200,50)"
              ></path>
            </g>
          </svg>
          <div style={{ fontSize: 32, marginLeft: 16 }}>The NEXTERIAS</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
