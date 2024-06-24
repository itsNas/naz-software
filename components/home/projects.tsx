import Image from "next/image"
import Link from "next/link"
import { UtmUrl } from "@/utils/urls"
import { IconArrowRight } from "@tabler/icons-react"
import { allProjects } from "contentlayer/generated"

import { UtmMediums } from "@/types/links"
import { Routes } from "@/config/routes"

import { ProjectCollabCard } from "../project-collab-card"
import { Button } from "../ui/button"

export function Projects() {
  return (
    <section
      id='projects'
      className='sm:py-18 container relative mx-auto mb-0 px-6 py-16 pb-8 md:py-24 lg:px-16 lg:py-24 xl:px-20'>
      {/* Title My Projects */}
      <div className='flex flex-col items-start justify-between gap-4 md:flex-row md:items-end'>
        <div className='flex-auto'>
          <h2 className='text-balance text-3xl font-bold'>
            Some of my <strong className='underline decoration-sky-400 underline-offset-4'>highlight</strong> projects
          </h2>
          <p className='mt-2 text-balance text-muted-foreground'>
            Some of the most important projects I have conceived and developed over the years
          </p>
        </div>

        <Button variant='ghost' className='group -mx-3 text-muted-foreground md:mx-0' size='sm' asChild>
          <Link
            href={UtmUrl(Routes.Projects, {
              medium: UtmMediums.Homepage,
              content: "projects",
            })}>
            all projects
            <IconArrowRight className='ml-2 inline-block size-5 transition-transform duration-200 group-hover:translate-x-1' />
          </Link>
        </Button>
      </div>

      {/* My Projects */}
      <div className='-mx-4 mt-4 grid sm:grid-cols-2'>
        {allProjects
          .filter((p) => !p.collab && p.featured)
          .slice(0, 4)
          .map(({ _id, name, image, description, slug }) => {
            return (
              <Link
                key={_id}
                href={UtmUrl(Routes.Project(slug), {
                  medium: UtmMediums.Homepage,
                  content: "projects",
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
      <div className='mt-24 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end'>
        <div className='flex-auto'>
          <h2 className='text-3xl font-bold'>
            Projects I have <strong className='underline decoration-sky-400 underline-offset-4'>collaborated</strong> on
          </h2>
          <p className='mt-2 text-muted-foreground'>The most exciting digital products I have contributed to</p>
        </div>

        <Button variant='ghost' className='group -mx-3 text-muted-foreground md:mx-0' size='sm' asChild>
          <Link href={Routes.Projects}>
            all projects
            <IconArrowRight className='ml-2 inline-block size-5 transition-transform duration-200 group-hover:translate-x-1' />
          </Link>
        </Button>
      </div>

      {/* Collab Projects */}
      <div className='mt-6 grid gap-4 sm:grid-cols-2'>
        {allProjects
          .filter((p) => p.collab)
          .slice(0, 4)
          .map((project) => (
            <ProjectCollabCard key={project._id} project={project} />
          ))}
      </div>
    </section>
  )
}
