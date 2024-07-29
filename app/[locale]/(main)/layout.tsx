import { ClerkProvider } from "@clerk/nextjs"

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
      {props.children}
    </ClerkProvider>
  )
}
