import { ClerkProvider, SignedIn, UserButton } from "@clerk/nextjs"

export default function AuthLayout(props: { children: React.ReactNode }) {
  const signInUrl = "/sign-in"
  const signUpUrl = "/sign-up"
  const dashboardUrl = "/dashboard"

  return (
    <ClerkProvider
      signInUrl={signInUrl}
      signUpUrl={signUpUrl}
      signInFallbackRedirectUrl={dashboardUrl}
      signUpFallbackRedirectUrl={dashboardUrl}>
      <header className='flex h-20 items-center gap-4 border-b border-solid border-black/20 px-4 sm:px-8'>
        <div className='grow' />
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      {props.children}
    </ClerkProvider>
  )
}
