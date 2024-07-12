import { DashboardHeader } from "@/components/dashboard/dashboard-header"

export async function generateMetadata() {
  return {
    title: "Dashboard Title", // Replace with your static title
    description: "This is the description of the dashboard.", // Replace with your static description
  }
}

export default function DashboardLayout(props: { children: React.ReactNode }) {
  const menuItems = [
    {
      href: "/dashboard",
      label: "Home", // Replace with your static label
    },
    {
      href: "/dashboard/organization-profile/organization-members",
      label: "Members", // Replace with your static label
    },
    {
      href: "/dashboard/organization-profile",
      label: "Settings", // Replace with your static label
    },
  ]

  return (
    <>
      <div className='shadow-md'>
        <div className='mx-auto flex max-w-screen-xl items-center justify-between px-3 py-4'>
          <DashboardHeader menu={menuItems} />
        </div>
      </div>

      <div className='min-h-[calc(100vh-72px)] bg-muted'>
        <div className='mx-auto max-w-screen-xl px-3 pb-16 pt-6'>{props.children}</div>
      </div>
    </>
  )
}
