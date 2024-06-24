import { UtmMediums } from "@/types/links"
import { CtaBusiness } from "@/components/cta-business"

export function Business() {
  return (
    <>
      <section
        id='business'
        className='sm:py-18 container relative mx-auto mb-0 px-6 py-16 pb-8 md:py-24 lg:px-16 lg:py-24 xl:px-20'>
        <div className='mx-auto max-w-7xl pb-8 lg:px-8'>
          <div className='max-w-2xl lg:mx-auto lg:text-center'>
            <h2 className='text-base font-semibold leading-7 text-sky-400'>Services for businesses</h2>
            <p className='tracking-tigh mt-2 text-3xl font-bold sm:text-4xl'>
              I help businesses and brilliant entrepreneurs unlock their{" "}
              <strong className='underline decoration-sky-400 underline-offset-4'>potential</strong> with{" "}
              <strong className='underline decoration-sky-400 underline-offset-4'>technology</strong>
            </p>
            <p className='mt-6 text-lg leading-8 text-muted-foreground dark:text-gray-300'>
              I have been fortunate to meet great people with great ideas. However, they all lacked one thing: the
              technological knowledge needed to unlock their full potential. I aim to provide the direction necessary to
              help an entrepreneur achieve any type of success.
            </p>
          </div>
        </div>
      </section>

      <CtaBusiness medium={UtmMediums.Homepage} />
    </>
  )
}
