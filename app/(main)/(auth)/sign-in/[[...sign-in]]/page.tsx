import type { Metadata, ResolvingMetadata } from "next"
import { absoluteUrl } from "@/utils/urls"
import { SignIn } from "@clerk/nextjs"

import { Routes } from "@/config/routes"

const title = "Sign In"
const description = "Sign in to your account to access exclusive features and personalized content."

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
      canonical: absoluteUrl(Routes.SignIn),
    },
    openGraph: {
      ...previousOpenGraph,
      url: absoluteUrl(Routes.SignIn),
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
      <h1 className='text-3xl font-bold'>Sign In</h1>
      <p className='mt-4'>Sign in to your account to access exclusive features and personalized content.</p>
      <SignIn path='/sign-in' />
    </section>
  )
}
