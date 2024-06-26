import * as React from "react"

import { TclRoutes } from "@/config/routes"

export function Cta1() {
  return (
    <section id='cta-1' className='relative isolate py-16'>
      {/* Grid BG */}
      <div className='absolute inset-0 -z-10'>
        <svg
          className='absolute left-[50%] top-0 h-[48rem] max-h-full w-[128rem] max-w-[100vw] -translate-x-1/2 overflow-hidden stroke-slate-700 [mask-image:radial-gradient(64rem_34rem_at_center,white,transparent)]'
          aria-hidden='true'>
          <defs>
            <pattern
              id='e813992c-7d03-4cc4-a2bd-151760b470a0'
              width={100}
              height={100}
              x='50%'
              y={-1}
              patternUnits='userSpaceOnUse'>
              <path d='M100 200V.5M.5 .5H200' fill='none' />
            </pattern>
          </defs>

          <rect width='100%' height='100%' strokeWidth={0} fill='url(#e813992c-7d03-4cc4-a2bd-151760b470a0)' />
        </svg>
      </div>
      <div className='py-8 md:py-16'>
        <div className='relative isolate overflow-hidden rounded-3xl bg-neutral-900 px-6 shadow-2xl sm:px-16 lg:px-24 lg:pt-0'>
          {/* BG */}
          <svg
            viewBox='0 0 1024 1024'
            className='absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 opacity-25 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
            aria-hidden='true'>
            <circle cx={512} cy={512} r={512} fill='url(#759c1415-0410-454c-8f7c-9a820de03641)' fillOpacity='0.7' />
            <defs>
              <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
                <stop stopColor='#E935C1' />
                <stop offset={1} stopColor='#E935C1' />
              </radialGradient>
            </defs>
          </svg>
          <div className='m-auto py-16 text-center'>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>Il tuo successo professionale inizia ora.</h2>
            <p className='m-auto mt-6 max-w-md text-lg leading-8 text-muted-foreground dark:text-gray-300'>
              Affronta con sicurezza il colloquio e raggiungi ambiziosi obiettivi professionali.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <a
                href={TclRoutes.Pricing}
                className='hover:bg-accent-3 rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100'>
                Inizia oggi stesso
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
