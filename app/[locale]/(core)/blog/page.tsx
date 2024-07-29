import type { Metadata, ResolvingMetadata } from "next"
import { absoluteUrl } from "@/utils/urls"

import { Routes } from "@/config/routes"
import { getAllBlogPosts } from "@/lib/blog"
import { FilteredPosts } from "@/components/blog/filtered-posts"
import { SubscribeForm } from "@/components/blog/subscribe-form"
import { PageTitle } from "@/components/page-title"

const title = "articles"
const description =
  "a remote corner of the web where I can fill with articles, stories, and guides. Who reads blogs in 2024 anyway?"

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
      canonical: absoluteUrl(Routes.Blog),
    },
    openGraph: {
      ...previousOpenGraph,
      url: absoluteUrl(Routes.Blog),
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

export default async function Page() {
  const posts = await getAllBlogPosts()

  return (
    <section className='sm:py-18 container relative mx-auto mb-0 px-6 py-16 pb-8 md:py-24 lg:px-16 lg:py-24 xl:px-20'>
      <PageTitle
        title='Articles. Stories. Guides.'
        description="I'll be honest, writing is not my strong suit. It's not that I don't like it, but often I find it daunting to face a blank page to fill with words. That's exactly why I decided to challenge myself by creating this little corner of the web, a place where I can practice writing. Who reads blogs in 2024 anyway?"
        fromColor='from-purple-400'
        toColor='to-pink-600'
      />

      <SubscribeForm className='mb-8' />

      <FilteredPosts posts={posts} />
    </section>
  )
}
