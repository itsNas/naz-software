import { SignedIn, UserButton } from "@clerk/nextjs"

export default function DashboardLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <header className='flex h-20 items-center gap-4 border-b border-solid border-black/20 px-4 sm:px-8'>
        <div className='grow' />
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      {props.children}
    </>
  )
}
