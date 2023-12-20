import React from 'react'
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
        <Link href={''} className="text-primary font-semibold text-2xl">HK Burger</Link>
        <nav className="flex gap-8 text-stone-500 font-semibold items-center">
          <Link href={''}>Home</Link>
          <Link href={''}>Menu</Link>
          <Link href={''}>About</Link>
          <Link href={''}>Contact</Link>
          <Link href={''} className="bg-primary rounded-full text-white px-8 py-2">Login</Link>
        </nav>
      </header>
  )
}

export default Header