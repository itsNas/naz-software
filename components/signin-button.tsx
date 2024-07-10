"use client"

import Link from "next/link"

import { Button, ButtonProps } from "./ui/button"

export function SignInButton(props: ButtonProps) {
  return (
    <Link href='/sign-in'>
      <Button variant='ghost' {...props}>
        Sign In
      </Button>
    </Link>
  )
}
