import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs/server"

export default function AuthLayout(props: { children: React.ReactNode }) {
  const { userId } = auth()

  if (userId) {
    redirect("/dashboard")
  }

  return <div className='flex min-h-screen items-center justify-center'>{props.children}</div>
}
