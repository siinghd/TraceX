import Header from './components/Header';
import './globals.css'
import Head from 'next/head';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const metadata = {
  title: 'TraceX',
  description: 'Record, protect, and trace text on the blockchain.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/iwm0vai.css" />
      </Head>
      <body className='text-black dark:text-white bg-white dark:bg-black regular'>
        <Header />
        {children}
      </body>
    </html>
  )
}
