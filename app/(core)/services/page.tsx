import { Metadata, ResolvingMetadata } from "next"
import Link from "next/link"
import { absoluteUrl, UtmUrl } from "@/utils/urls"

import { UtmMediums } from "@/types/links"
import { Routes } from "@/config/routes"
import { services } from "@/config/services"
import { Button } from "@/components/ui/button"
import { CtaBusiness } from "@/components/cta-business"
import { Testimonials } from "@/components/home/testimonials"
import { Icon } from "@/components/icon"
import { PageTitle } from "@/components/page-title"

const title = "services"
const description =
  "Explore the services I offer for businesses and entrepreneurs. I aim to provide the direction needed to help an entrepreneur achieve any type of success."

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
      canonical: absoluteUrl(Routes.Services),
    },
    openGraph: {
      ...previousOpenGraph,
      url: absoluteUrl(Routes.Services),
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
        title='services for businesses and entrepreneurs'
        description='I have been fortunate to meet brilliant entrepreneurs with great ideas. However, they all lacked one thing: the technological knowledge needed to unlock their full potential. I aim to provide the direction necessary to help an entrepreneur achieve any type of success.'
        fromColor='from-green-400'
        toColor='to-blue-500'
      />

      <section className='mt-8 flex flex-col'>
        {services.map((service) => (
          <div key={service.id} id={service.id} className='scroll-m-12 pt-10'>
            <div className='flex flex-col gap-8 rounded-lg border bg-muted p-8 md:flex-row'>
              <div className='flex size-10 flex-none items-center justify-center rounded-xl bg-sky-400'>
                <Icon
                  name={service.icon}
                  className='size-6 stroke-sky-900'
                  size={48}
                  strokeWidth={2}
                  aria-hidden='true'
                />
              </div>
              <div className='flex flex-auto flex-col'>
                <div className='max-w-lg'>
                  <h3 className='text-xl font-semibold'>{service.title}</h3>
                  <dd className='mt-2 text-base leading-normal text-muted-foreground'>{service.description}</dd>
                </div>
              </div>
              <div className='flex flex-none flex-col'>
                <div className='flex items-center justify-end gap-2 md:flex-col md:items-end md:gap-1'>
                  <p className='text-right text-xs text-muted-foreground'>starting from</p>
                  <p className='text-right font-semibold leading-tight'> {service.min_price}</p>
                </div>
                <Button asChild size={"sm"} className='mt-2 md:mt-4'>
                  <Link
                    href={UtmUrl(Routes.Contact, {
                      medium: UtmMediums.Services,
                      content: "service_card",
                    })}>
                    contact me
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Testimonials />

      <CtaBusiness medium={UtmMediums.Services} />
    </section>
  )
}
