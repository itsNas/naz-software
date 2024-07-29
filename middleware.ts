// import { NextResponse } from "next/server"
// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

// const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/onboarding(.*)"])

// export default clerkMiddleware((auth, req) => {
//   const { userId, sessionClaims } = auth()

//   // For user visiting /onboarding, don't try and redirect
//   if (userId && req.nextUrl.pathname === "/onboarding") {
//     return NextResponse.next()
//   }

//   // Catch users who doesn't have `onboardingComplete: true` in PublicMetadata
//   // Redirect them to the /onboarding out to complete onboarding
//   if (userId && !sessionClaims?.metadata?.onboardingComplete) {
//     const onboardingUrl = new URL("/onboarding", req.url)
//     return NextResponse.redirect(onboardingUrl)
//   }

//   if (isProtectedRoute(req)) auth().protect()
// })

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// }

import { NextResponse, type NextFetchEvent, type NextRequest } from "next/server"
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import createMiddleware from "next-intl/middleware"

import { AllLocales, AppConfig } from "./utils/app-config"

const intlMiddleware = createMiddleware({
  locales: AllLocales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale,
})

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/:locale/dashboard(.*)",
  "/onboarding(.*)",
  "/:locale/onboarding(.*)",
])

export default function middleware(request: NextRequest, event: NextFetchEvent) {
  if (
    request.nextUrl.pathname.includes("/sign-in") ||
    request.nextUrl.pathname.includes("/sign-up") ||
    isProtectedRoute(request)
  ) {
    return clerkMiddleware((auth, req) => {
      const authObj = auth()

      if (isProtectedRoute(req)) {
        const locale = req.nextUrl.pathname.match(/(\/.*)\/dashboard/)?.at(1) ?? ""

        const signInUrl = new URL(`${locale}/sign-in`, req.url)

        authObj.protect({
          // `unauthenticatedUrl` is needed to avoid error: "Unable to find `next-intl` locale because the middleware didn't run on this request"
          unauthenticatedUrl: signInUrl.toString(),
        })
      }

      if (
        authObj.userId &&
        !authObj.orgId &&
        req.nextUrl.pathname.includes("/dashboard") &&
        !req.nextUrl.pathname.endsWith("/organization-selection")
      ) {
        const orgSelection = new URL("/onboarding/organization-selection", req.url)

        return NextResponse.redirect(orgSelection)
      }

      return intlMiddleware(req)
    })(request, event)
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
