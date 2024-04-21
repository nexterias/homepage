import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-[calc(100vh-56px*2)]">
      <div className="container mx-auto h-full w-full px-8">
        <div className="flex h-full flex-col items-center justify-center">
          <h1 className="text-center font-mono text-[max(4rem,min(8vw,8rem))] font-extrabold tracking-tighter">
            We are{' '}
            <span className="bg-gradient-to-r from-yellow-600 to-pink-600 bg-clip-text text-transparent">
              Happy Coders
            </span>
          </h1>
        </div>
      </div>
    </main>
  )
}
