import * as React from "react"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { NotificationPopup } from "@/components/notification-popup"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <NotificationPopup />
    </>
  )
}
