import Link from "next/link"
import { UtmUrl } from "@/utils/urls"
import { IconArrowRight } from "@tabler/icons-react"

import { UtmMediums } from "@/types/links"
import { Routes } from "@/config/routes"
import { services } from "@/config/services"

import { LinkCard } from "../link-card"
import { Button } from "../ui/button"

export function Services() {
  return (
    <section
      id='services'
      className='sm:py-18 container relative mx-auto mb-0 px-6 py-16 pb-8 md:py-24 lg:px-16 lg:py-24 xl:px-20'>
      <div className='flex flex-col items-start justify-between gap-4 md:flex-row md:items-end'>
        <div className='flex-auto'>
          <h2 className='text-3xl font-bold'>
            How I help <strong className='underline decoration-sky-400 underline-offset-4'>businesses</strong> and{" "}
            <strong className='underline decoration-sky-400 underline-offset-4'>entrepreneurs</strong>
          </h2>
          <p className='mt-2 text-balance text-muted-foreground'>
            Unlocking the potential of businesses and entrepreneurs. here's how:
          </p>
        </div>

        <Button variant='ghost' className='group -mx-3 text-muted-foreground md:mx-0' size='sm' asChild>
          <Link
            href={UtmUrl(Routes.Services, {
              medium: UtmMediums.Homepage,
              content: "services",
            })}>
            all services
            <IconArrowRight className='ml-2 inline-block size-5 transition-transform duration-200 group-hover:translate-x-1 ' />
          </Link>
        </Button>
      </div>

      <div className='mt-6 grid gap-4 sm:grid-cols-2'>
        {services.map((service) => (
          <LinkCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
            href={UtmUrl(service.url, {
              medium: UtmMediums.Homepage,
              content: "services",
            })}
          />
        ))}
      </div>
    </section>
  )
}
