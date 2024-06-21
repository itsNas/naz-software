"use client"

import { useState } from "react"
import Link from "next/link"
import { UtmUrl } from "@/utils/urls"

import { UtmMediums } from "@/types/links"
import { PlRoutes } from "@/config/routes"
import { cn, shineAnimation } from "@/lib/utils"

import { Button } from "./ui/button"
import { Card, CardDescription, CardFooter, CardHeader } from "./ui/card"

export function NotificationPopup() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    isVisible && (
      <div className='fixed bottom-4 right-4'>
        <Card className={cn("w-[350px]", shineAnimation)}>
          <CardHeader>
            <div className='font-bold'>✨ I have reopened registrations for the legendary programmer course ✨</div>
            <CardDescription className='mt-4'>
              Yes, you read that right. After months and countless requests, I have finally decided to reopen
              registrations for the legendary programmer course.
            </CardDescription>
          </CardHeader>
          <CardFooter className='flex justify-end gap-4'>
            <Button variant='outline' size='sm' onClick={() => setIsVisible(false)}>
              not now
            </Button>
            <Button size='sm' asChild>
              <Link
                href={UtmUrl(PlRoutes.Home, {
                  medium: UtmMediums.NotificationPopup,
                  content: "notification_popup",
                })}>
                tell me more
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  )
}
