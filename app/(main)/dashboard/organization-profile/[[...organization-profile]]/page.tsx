import { OrganizationProfile } from "@clerk/nextjs"

import { TitleBar } from "@/components/dashboard/title-bar"

const OrganizationProfilePage = () => {
  const titleBar = "Organization Profile" // Static title
  const titleBarDescription = "Manage your organization profile here." // Static description

  return (
    <>
      <TitleBar title={titleBar} description={titleBarDescription} />

      <OrganizationProfile
        routing='path'
        path='/dashboard/organization-profile'
        afterLeaveOrganizationUrl='/onboarding/organization-selection'
        appearance={{
          elements: {
            rootBox: "w-full",
            cardBox: "w-full flex",
          },
        }}
      />
    </>
  )
}

export default OrganizationProfilePage
