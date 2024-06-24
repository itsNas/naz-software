import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { Navbar } from "@/components/navbar"
import { NavbarMobile } from "@/components/navbar-mobile"

import { CalendarButton } from "./calendar-button"
import { ModeToggle } from "./mode-toggle"

export function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-40 bg-background/80 shadow-sm saturate-[1.8] backdrop-blur-[10px] dark:saturate-100'>
      <div className='mx-auto flex h-[60px] max-w-7xl items-center justify-between px-6'>
        <Link href='/' className='flex items-center justify-center gap-1' aria-label='Homepage'>
          <div className='hidden dark:block'>
            <Image src={"/images/mg-logo-white.webp"} height={28} width={28} alt='Logo' />
          </div>
          <div className='dark:hidden'>
            <Image className='rounded-lg' src={"/images/mg-logo-black.webp"} height={28} width={28} alt='Logo' />
          </div>
        </Link>
        <div className='flex items-center gap-2'>
          <Navbar />
        </div>
        <div className='flex items-center gap-2'>
          <ModeToggle />
          <CalendarButton className='hidden lg:block' />
          <NavbarMobile />
        </div>
      </div>
    </header>
  )
}
