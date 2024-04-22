import { Header } from '@/components/layouts/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Footer } from '@/components/layouts/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nexterias.dev'),
  title: { default: 'Home', template: '%s | The NEXTERIAS' },
  description: '学生によるオープンソースソフトウェア開発集団',
  icons: [{ rel: 'icon', type: 'image/svg+xml', url: '/logo.svg' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen dark:bg-black dark:text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
