"use client"

import * as React from "react"
import { useSession, useUser } from "@clerk/nextjs"

export function UserDetails() {
  const { isLoaded, user } = useUser()

  return (
    <div
      className='overflow-hidden rounded-lg bg-white shadow'
      style={{ boxShadow: `0px 20px 24px -4px rgba(16, 24, 40, 0.08)` }}>
      <div className='flex items-center justify-between p-8'>
        <h3 className='text-xl font-semibold text-gray-900'>User Info</h3>
      </div>
      {isLoaded && user ? (
        <div className='max-h-96 pb-6'>
          <dl className='px-8'>
            <div className='py-2'>
              <dt className='text-sm font-semibold'>User ID</dt>
              <dd className='mt-1 text-sm text-gray-600'>{user.id}</dd>
            </div>
            {user.firstName && (
              <div className='py-2'>
                <dt className='text-sm font-semibold'>Name</dt>
                <dd className='mt-1 text-sm text-gray-600'>
                  {user.firstName} {user.lastName}
                </dd>
              </div>
            )}
            <div className='py-2'>
              <dt className='text-sm font-semibold'>Email addresses</dt>
              <dd className='mt-1 text-sm text-gray-600'>
                {user.emailAddresses.map((email) => (
                  <div key={email.id} className='mb-1 flex gap-2'>
                    {email.emailAddress}
                    {user.primaryEmailAddressId === email.id && (
                      <span className='bg-primary-50 text-primary-700 rounded-2xl px-2 pt-[2px] text-xs font-medium'>
                        Primary
                      </span>
                    )}
                  </div>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      ) : (
        <div className='px-4 py-5 text-gray-700'>Loading user data...</div>
      )}
    </div>
  )
}

export function SessionDetails() {
  const { isLoaded, session } = useSession()

  return (
    <div
      className='overflow-hidden bg-white shadow sm:rounded-lg'
      style={{ boxShadow: `0px 20px 24px -4px rgba(16, 24, 40, 0.08)` }}>
      <div className='flex p-8'>
        <h3 className='my-auto text-xl font-semibold leading-6 text-gray-900'>Session Info</h3>
      </div>
      {isLoaded && session ? (
        <div className='max-h-96 pb-6'>
          <dl>
            <div className='px-8 py-2'>
              <dt className='text-sm font-semibold'>Session ID</dt>
              <dd className='mt-1 flex gap-2 text-sm text-gray-600 sm:col-span-2 sm:mt-0'>{session.id}</dd>
            </div>
            <div className='px-8 py-2'>
              <dt className='mb-1 text-sm font-semibold'>Last Active</dt>
              <dd className='mt-1 text-sm text-gray-600 sm:col-span-2 sm:mt-0'>
                {session.lastActiveAt.toLocaleString()}
              </dd>
            </div>
            <div className='px-8 py-2'>
              <dt className='mb-1 text-sm font-semibold'>Expiry</dt>
              <dd className='mt-1 text-sm text-gray-600 sm:col-span-2 sm:mt-0'>{session.expireAt.toLocaleString()}</dd>
            </div>
          </dl>
        </div>
      ) : (
        <div className='px-4 py-5 text-gray-700 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>Loading session data...</div>
      )}
    </div>
  )
}
