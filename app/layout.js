import './globals.css'

export const metadata = {
  title: 'agency test task',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
