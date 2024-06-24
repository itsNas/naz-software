import React from "react"
import Image from "next/image"

import { testimonials } from "@/config/testimonials"
import { cn } from "@/lib/utils"

const TestimonialCard = ({ testimonial }: { testimonial: (typeof testimonials)[0] }) => {
  return (
    <li className='text-sm leading-6'>
      <figure className='relative flex flex-col rounded-lg border bg-muted p-6'>
        <figcaption className='flex items-center space-x-4'>
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={60}
            height={60}
            className='size-14 flex-none rounded-xl object-cover'
            loading='lazy'
            decoding='async'
          />
          <div className='flex-auto'>
            <div className='text-base font-semibold'>
              <span className='absolute inset-0' />
              {testimonial.name}
            </div>
            <div className='mt-0.5 leading-tight dark:text-muted-foreground'>{testimonial.title}</div>
          </div>
        </figcaption>
        <blockquote className='mt-6 text-muted-foreground'>
          <p>{testimonial.testimonial}</p>
        </blockquote>
      </figure>
    </li>
  )
}

type Props = {
  className?: string
}

export function Testimonials({ className }: Props) {
  return (
    <section
      id='testimonials'
      className={cn(
        "sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 mb-0 pb-8",
        className,
      )}>
      {/* Testimonial expanded */}
      <div className='relative isolate overflow-hidden px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:max-w-4xl'>
          <Image
            className='mx-auto'
            src='/images/testimonials/revenue-farm-blue.webp'
            alt='revenue farm logo'
            width={200}
            height={40}
          />
          <figure className='mt-10'>
            <blockquote className='text-accent-7 text-center text-xl font-semibold leading-8 sm:text-2xl sm:leading-9'>
              <p>
                “I have met people{" "}
                <strong className='underline decoration-sky-400 underline-offset-4'>
                  competent in technical aspects{" "}
                </strong>
                and people competent in business and growth. Few people deeply understand both areas and know how to
                bring value practically and strategically,{" "}
                <strong className='underline decoration-sky-400 underline-offset-4'>
                  Matteo is one of these unicorns{" "}
                </strong>
                ”
              </p>
            </blockquote>
            <figcaption className='mt-10'>
              <Image
                className='mx-auto size-10 rounded-full'
                src='/images/testimonials/pietro-campanella.webp'
                width={40}
                height={40}
                alt='Pietro Campanella'
              />
              <div className='mt-4 flex flex-col items-center justify-center text-base md:flex-row md:gap-3'>
                <div className='font-semibold'>Pietro Campanella</div>
                <svg
                  viewBox='0 0 2 2'
                  width={3}
                  height={3}
                  aria-hidden='true'
                  className='hidden fill-gray-300 md:block'>
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className='text-gray-300'>CEO @ Revenue Farm</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Testimonial card */}
      <div className='grid grid-cols-1 gap-4 pt-16 sm:grid-cols-2 lg:grid-cols-3'>
        <ul className='space-y-4'>
          {testimonials.slice(0, 2).map((e) => (
            <TestimonialCard key={e.name} testimonial={e} />
          ))}
        </ul>
        <ul className='space-y-4'>
          {testimonials.slice(2, 4).map((e) => (
            <TestimonialCard key={e.name} testimonial={e} />
          ))}
        </ul>
        <ul className='space-y-4'>
          {testimonials.slice(4, 6).map((e) => (
            <TestimonialCard key={e.name} testimonial={e} />
          ))}
        </ul>
      </div>
    </section>
  )
}
