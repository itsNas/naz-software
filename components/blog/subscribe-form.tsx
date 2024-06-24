"use client"

import React from "react"
import Script from "next/script"

export function SubscribeForm({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div id='custom-substack-embed' />

      <Script id='substack-signup' strategy='afterInteractive'>
        {`
                     window.CustomSubstackWidget = {
                        substackUrl: "matteogiardino.substack.com",
                        placeholder: "your email",
                        buttonText: "subscribe",
                        theme: "custom",
                        colors: {
                            primary: "#FFFFFF",
                            input: "#000000",
                            email: "#FFFFFF",
                            text: "#000000",
                        },
                    }
                `}
      </Script>

      <Script src='https://substackapi.com/widget.js' async />
    </div>
  )
}
