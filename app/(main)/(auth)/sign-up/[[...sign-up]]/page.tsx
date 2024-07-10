import type { Metadata, ResolvingMetadata } from "next"
import { absoluteUrl } from "@/utils/urls"
import { SignUp } from "@clerk/nextjs"

import { Routes } from "@/config/routes"

const title = "Sign Up"
const description = "Sign up to access exclusive features and personalized content."

type Props = {
  params: Record<string, never>
  searchParams: Record<string, never>
}

export async function generateMetadata(_: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const previousOpenGraph = (await parent)?.openGraph ?? {}
  const previousTwitter = (await parent)?.twitter ?? {}

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(Routes.SignUp),
    },
    openGraph: {
      ...previousOpenGraph,
      url: absoluteUrl(Routes.SignUp),
      title,
      description,
    },
    twitter: {
      ...previousTwitter,
      title,
      description,
    },
  }
}

export default function SignInPage() {
  return (
    <section className='sm:py-18 container relative mx-auto mb-0 px-6 py-16 pb-8 md:py-24 lg:px-16 lg:py-24 xl:px-20'>
      <h1 className='text-3xl font-bold'>Sign Up</h1>
      <p className='mt-4'>Sign up to access exclusive features and personalized content.</p>
      <SignUp path='/sign-up' />
    </section>
  )
}
