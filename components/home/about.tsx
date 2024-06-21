"use client"

import React, { MutableRefObject, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { UtmUrl } from "@/utils/urls"
import { IconArrowRight } from "@tabler/icons-react"
import { gsap, Linear } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

// import GoogleLogo from "public/images/brands/google.svg"
// import WezardLogo from "public/images/brands/wezard-icon.png"
// import DevvLogo from "public/images/projects/devv/icon.webp"
// import WestudentsLogo from "public/images/projects/westudents/icon.webp"

import { UtmMediums } from "@/types/links"
import { Routes } from "@/config/routes"

import { Button } from "../ui/button"

export function About() {
  gsap.registerPlugin(ScrollTrigger)
  gsap.config({ nullTargetWarn: false })

  const quoteRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null)
  const targetSection: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null)

  const initAboutAnimation = (
    quoteRef: MutableRefObject<HTMLDivElement>,
    targetSection: MutableRefObject<HTMLDivElement>,
  ): ScrollTrigger => {
    const timeline = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: 0.3 },
    })

    timeline
      .fromTo(quoteRef.current.querySelector(".about-1"), { opacity: 0.4 }, { opacity: 1 })
      .fromTo(quoteRef.current.querySelector(".t1"), { opacity: 0.4, delay: 2 }, { opacity: 1 })
      .to(quoteRef.current.querySelector(".about-1"), {
        opacity: 0.4,
        delay: 0.5,
      })

      .fromTo(quoteRef.current.querySelector(".about-2"), { opacity: 0.4 }, { opacity: 1 })
      .to(quoteRef.current.querySelector(".t2"), {
        backgroundPositionX: "100%",
        duration: 1,
      })
      .to(quoteRef.current.querySelector(".about-2"), {
        opacity: 0.4,
        delay: 1,
      })

      .fromTo(quoteRef.current.querySelector(".about-3"), { opacity: 0.4 }, { opacity: 1 })
      .to(quoteRef.current.querySelector(".t3"), {
        backgroundPositionX: "100%",
        duration: 1,
      })
      .to(quoteRef.current.querySelector(".about-3"), {
        opacity: 0.4,
        delay: 1,
      })

      .fromTo(quoteRef.current.querySelector(".about-4"), { opacity: 0.4 }, { opacity: 1 })
      .to(quoteRef.current.querySelector(".about-4"), {
        opacity: 0.4,
        delay: 1,
      })

      .fromTo(quoteRef.current.querySelector(".about-5"), { opacity: 0.4 }, { opacity: 1 })
      .to(quoteRef.current.querySelector(".about-5"), {
        opacity: 0.4,
        delay: 1,
      })

      .fromTo(quoteRef.current.querySelector(".about-6"), { opacity: 0.4 }, { opacity: 1 })
      .to(quoteRef.current.querySelector(".about-6"), {
        opacity: 0.4,
        delay: 1,
      })

      .fromTo(quoteRef.current.querySelector(".about-7"), { opacity: 0.4 }, { opacity: 1 })
      .to(quoteRef.current.querySelector(".about-7"), {
        opacity: 0.4,
        delay: 1,
      })

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: targetSection.current,
      start: "top 80%",
      end: "bottom 40%",
      scrub: 0,
      animation: timeline,
    })

    return scrollTriggerInstance
  }

  useEffect(() => {
    if (quoteRef && targetSection) {
      // @ts-ignore
      const aboutScrollTriggerInstance = initAboutAnimation(quoteRef, targetSection)
      return aboutScrollTriggerInstance.kill
    }
  }, [quoteRef, targetSection])

  return (
    <section id='about' className='about my-32 w-full select-none scroll-m-10 md:pt-24'>
      <div ref={targetSection}>
        <div ref={quoteRef} className='space-y-24 text-2xl sm:text-4xl md:text-5xl'>
          <h2 className='about-1 leading-tight'>
            👶 I was born in <strong className='underline decoration-yellow-400 underline-offset-8'>Alor Setar</strong>{" "}
            in 1995
          </h2>

          <h2 className='about-2 leading-tight'>
            From a young age, I have always sought ways to express myself and provide value to others
          </h2>

          <h2 className='about-3 leading-tight'>
            I pursued a degree in mechanical engineering and began my career in the oil and gas industry
          </h2>

          <h2 className='about-4 leading-tight'>
            In 2022, I discovered 💻 <span className='text-highlight t3 font-bold'>programming</span> and quickly
            developed a passion for it
          </h2>

          <h2 className='about-5 leading-tight'>
            I taught myself to code after work and eventually landed my first software engineering job at a small
            software agency
          </h2>

          <h2 className='about-6 leading-tight'>
            After a year, I decided to embark on my own journey as an indie hacker
          </h2>

          <h2 className='about-7 leading-tight'>
            I founded <strong className='underline decoration-purple-400 underline-offset-8'>Snapshorts.ai</strong>,
            with the goal of revolutionizing content creation, especially short-form videos, using AI technology
          </h2>

          <Button variant={"ghost"} className='group -ml-4 mt-6 text-muted-foreground md:text-xl' asChild>
            <Link
              href={UtmUrl(Routes.Contact, {
                medium: UtmMediums.Homepage,
                content: "about",
              })}>
              💡 Have a project in mind?
              <strong className='mx-2 underline underline-offset-4'>Get in touch</strong>
              <IconArrowRight className='inline-block size-5 transition-transform duration-200 group-hover:translate-x-1' />
            </Link>
          </Button>
        </div>
      </div>

      <div className='relative isolate mt-36'>
        <Background />

        <div className='flex flex-col gap-10 md:grid md:grid-cols-3 md:grid-rows-1'>
          <div className='relative aspect-square md:hidden'>
            <Image
              src='/images/home/1.gif'
              alt=''
              loading='lazy'
              unoptimized
              fill
              className='rounded-lg drop-shadow-2xl'
            />
          </div>

          <div className='relative col-span-2 hidden md:block'>
            <Image
              src='/images/home/13.webp'
              alt=''
              loading='lazy'
              fill
              className='rounded-lg object-cover drop-shadow-2xl'
            />
          </div>

          <div className='relative aspect-square'>
            <Image
              src='/images/home/3.webp'
              alt=''
              loading='lazy'
              fill
              className='m-auto aspect-square rounded-lg object-cover drop-shadow-2xl'
            />
          </div>

          <div className='relative hidden aspect-square md:block'>
            <Image
              src='/images/home/2.webp'
              alt=''
              loading='lazy'
              fill
              className='m-auto rotate-3 rounded-lg drop-shadow-2xl transition-all duration-200 hover:rotate-0'
            />
          </div>

          <div className='relative hidden aspect-square md:block'>
            <Image
              src='/images/home/6.webp'
              alt=''
              loading='lazy'
              fill
              className='m-auto aspect-square rounded-lg object-cover drop-shadow-2xl'
            />
          </div>

          <div className='relative aspect-square'>
            <Image
              src='/images/home/9.webp'
              alt=''
              loading='lazy'
              fill
              className='m-auto -rotate-3 rounded-lg object-cover drop-shadow-2xl md:rotate-0'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
function Background() {
  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <div className='absolute inset-0 -z-10 -m-40 max-w-[100vw] bg-[linear-gradient(to_right,#ffffff30_1px,transparent_1px),linear-gradient(to_bottom,#ffffff30_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_10%,transparent_100%)]'></div>
  )
}
