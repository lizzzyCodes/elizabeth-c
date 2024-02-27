import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'lizzzycodes', 
  description: 'Elizabeths Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}
      bg-black background-color: rgb(0 0 0)`}> 
        {children}
      </body>
    </html>
  );
}
