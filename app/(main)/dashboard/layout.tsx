import { SignedIn, UserButton } from "@clerk/nextjs"

import { ModeToggle } from "@/components/mode-toggle"

export default function DashboardLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <header className='flex h-20 items-center gap-4 border-b border-solid border-black/20 px-4 sm:px-8'>
        <div className='grow' />
        <ModeToggle />
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      {props.children}
    </>
  )
}
