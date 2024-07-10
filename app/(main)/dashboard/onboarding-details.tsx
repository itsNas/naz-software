import * as React from "react"
import { auth } from "@clerk/nextjs/server"

export function OnboardingDetails() {
  const { sessionClaims } = auth()

  return (
    <div
      className='overflow-hidden bg-white shadow sm:rounded-lg'
      style={{ boxShadow: `0px 20px 24px -4px rgba(16, 24, 40, 0.08)` }}>
      <div className='flex p-8'>
        <h3 className='my-auto text-xl font-semibold leading-6 text-gray-900'>Public Metadata</h3>
      </div>
      <div className='max-h-96 pb-6'>
        <dl>
          <div className='px-8 py-2'>
            <dt className='text-sm font-semibold'>Onboarding Completed?</dt>
            <dd className='mt-1 flex gap-2 text-sm text-gray-600 sm:col-span-2 sm:mt-0'>
              {sessionClaims?.metadata.onboardingComplete ? "Yes" : "No"}
            </dd>
          </div>
          <div className='px-8 py-2'>
            <dt className='text-sm font-semibold'>Application Name</dt>
            <dd className='mt-1 flex gap-2 text-sm text-gray-600 sm:col-span-2 sm:mt-0'>
              {sessionClaims?.metadata.applicationName}
            </dd>
          </div>
          <div className='px-8 py-2'>
            <dt className='text-sm font-semibold'>Application Type</dt>
            <dd className='mt-1 flex gap-2 text-sm text-gray-600 sm:col-span-2 sm:mt-0'>
              {sessionClaims?.metadata.applicationType}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
