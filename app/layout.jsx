import React from 'react'
import '@/assets/styles/globals.css'

export const metadata = {
  title: 'property',
  discription: 'find your dream rental property',
  keywords: 'rental, find rental'
}

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div>{children}</div>
      </body>
    </html>
  )
}

export default MainLayout