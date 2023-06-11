'use client'

import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import Button from '../Buttons/Button'

export default function Contact() {
  return (
    <div className="relative py-16 overflow-hidden isolate sm:py-24 lg:py-32">
      <div className="mx-auto">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="lg:max-w-[600px]">
            <h2 className="font-bold leading-none text-[48px]">Subscribe to our mailing list</h2>
            <p className="mt-4 text-[18px]">
            Be the first to receive exclusive updates, industry insights, and special offers. Join our mailing list today to stay connected and stay ahead of the curve. Don&apos;t miss out on the latest news and advancements in text recording. Simply enter your email address below and be part of our community.
            </p>
            <div className="flex mt-6 gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="text-black placeholder:text-black/70 min-w-0 flex-auto rounded-md border-0 bg-grey/40 dark:bg-white/70 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-grad-light-1 dark:focus:ring-grad-light-2 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <Button 
                type='button'
                text='Subscribe'
                class='!text-[18px]'
              />
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="p-2 rounded-md bg-grey/40 dark:bg-white/5 ring-1 ring-black/20 dark:ring-white/10">
                <CalendarDaysIcon className="w-6 h-6 text-black dark:text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 bold text-[18px]">Weekly articles</dt>
              <dd className="mt-2 leading-tight text-[15px]">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="p-2 rounded-md bg-grey/40 dark:bg-white/5 ring-1 ring-black/20 dark:ring-white/10">
                <HandRaisedIcon className="w-6 h-6 text-black dark:text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 bold text-[18px]">No spam</dt>
              <dd className="mt-2 leading-tight text-[15px]">
                Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className='flex flex-row mt-16 md:mt-32 center text-[18px]'>
        <p>Or contact us directly at</p>
        <a href='mailto:info@tracex.io' className='ml-1 text-gradient semibold'>info@tracex.io</a>
      </div>
    </div>
  )
}
