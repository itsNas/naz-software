import React from "react"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

export default function Dashboard() {
  return (
    <div>
      <h1>My App</h1>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </div>
  )
}
