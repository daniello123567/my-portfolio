import './globals.css'
export const metadata = {
  title: 'Frontend Developer | Daniel Eniola',
  description: "Hi i'm daniel, A frontend developer proefficient in React,Javacript..etc",
  icons:'https://exicdyotqvcyfyetovtv.supabase.co/storage/v1/object/public/images/WhatsApp%20Image%202024-11-12%20at%201.28.39%20PM.jpeg?t=2024-11-12T12%3A36%3A37.336Z'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#eff3eb69]'>{children}</body>
    </html>
  )
}
// bg-[#eff3eb] former background color inc
