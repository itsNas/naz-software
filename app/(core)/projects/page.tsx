import { Metadata, ResolvingMetadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { absoluteUrl, UtmUrl } from "@/utils/urls"
import { allProjects } from "contentlayer/generated"

import { UtmMediums } from "@/types/links"
import { Routes } from "@/config/routes"
import { PageTitle } from "@/components/page-title"
import { ProjectCollabCard } from "@/components/project-collab-card"

const title = "projects"
const description =
  "Explore the projects I have completed in the past. Some projects were born from my personal needs, while others are the result of collaborations with brilliant entrepreneurs motivated to turn ideas into reality."

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
      canonical: absoluteUrl(Routes.Projects),
    },
    openGraph: {
      ...previousOpenGraph,
      url: absoluteUrl(Routes.Projects),
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

export default function Page() {
  return (
    <section className='sm:py-18 container relative mx-auto mb-0 px-6 py-16 pb-8 md:py-24 lg:px-16 lg:py-24 xl:px-20'>
      <PageTitle
        title='my projects'
        description='Explore the projects I have completed in the past. Some projects were born from my personal needs, while others are the result of collaborations with brilliant entrepreneurs motivated to turn ideas into reality. Every work, however, was driven by the same desire to overcome challenges and achieve extraordinary results.'
        fromColor='from-sky-400'
        toColor='to-purple-600'
      />

      <div className='-mx-4 mt-8 grid sm:grid-cols-2'>
        {allProjects
          .filter((p) => !p.collab)
          .map(({ _id, name, image, description, slug }) => {
            return (
              <Link
                key={_id}
                href={UtmUrl(Routes.Project(slug), {
                  medium: UtmMediums.Projects,
                  content: "product_card",
                })}
                className='flex flex-col rounded-lg p-4 transition-colors duration-300 hover:bg-muted'>
                <Image src={image as string} width={1200} height={630} alt={name} className='rounded-lg' />
                <div className='flex-1 py-4'>
                  <div>
                    <h2 className='text-xl font-bold'>{name}</h2>
                    <div className='mt-1 text-muted-foreground'>{description}</div>
                  </div>
                </div>
              </Link>
            )
          })}
      </div>

      {/* Title Collab Projects */}
      <div className='mt-24 flex flex-col items-start justify-between md:flex-row md:items-end'>
        <div className='flex-auto'>
          <h2 className='text-3xl font-bold'>
            rojects I have <strong className='underline decoration-sky-400 underline-offset-4'>collaborated</strong> on
          </h2>
          <p className='mt-2 text-muted-foreground'>the most exciting digital products I have contributed to</p>
        </div>
      </div>

      {/* Collab Projects */}
      <div className='mt-6 grid gap-4 sm:grid-cols-2'>
        {allProjects
          .filter((p) => p.collab)
          .map((project) => (
            <ProjectCollabCard key={project._id} project={project} />
          ))}
      </div>
    </section>
  )
}
