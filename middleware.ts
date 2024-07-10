import { NextResponse } from "next/server"
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/onboarding(.*)"])

export default clerkMiddleware((auth, req) => {
  const { userId, sessionClaims } = auth()

  // For user visiting /onboarding, don't try and redirect
  if (userId && req.nextUrl.pathname === "/onboarding") {
    return NextResponse.next()
  }

  // Catch users who doesn't have `onboardingComplete: true` in PublicMetadata
  // Redirect them to the /onboarding out to complete onboarding
  if (userId && !sessionClaims?.metadata?.onboardingComplete) {
    const onboardingUrl = new URL("/onboarding", req.url)
    return NextResponse.redirect(onboardingUrl)
  }

  if (isProtectedRoute(req)) auth().protect()
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
