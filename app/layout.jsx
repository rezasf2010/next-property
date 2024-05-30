
import Navbar from '@/components/Navbar'
import '@/assets/styles/globals.css'

export const metadata = {
  title: 'property',
  discription: 'find your dream rental property',
  keywords: 'rental, find rental, find property'
}

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}

export default MainLayout