import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl">Welcome to homepage</h1>
      <Link href='/properties'>show properties</Link>
    </div>
  )
}

export default HomePage