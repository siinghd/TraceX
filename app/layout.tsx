import Header from './components/Header';
import './globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
    <>
      <head>
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="stylesheet" href="https://use.typekit.net/iwm0vai.css" />
      </head>
      <html lang="en" className="scroll-smooth">
        <body className="text-black dark:text-white bg-white dark:bg-black regular">
          <Header />
          {children}
        </body>
      </html>
    </>
  )
}
