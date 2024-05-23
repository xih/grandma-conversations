/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/peTg1nNk2sc
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
export function MainPage() {
  return (
    <main key="1" className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-6 p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Grandma Protection Service</h1>
          <p>Test the AI scam preparedness of your loved ones. Enter their info below and we'll give them a call.</p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="phone">
                Phone Number
              </label>
              <input
                className="block w-full px-3 py-2 border border-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:border-gray-800"
                placeholder="Enter their phone number"
                type="tel"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="name">
                Name
              </label>
              <input
                className="block w-full px-3 py-2 border border-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:border-gray-800"
                placeholder="Enter their name"
                type="text"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="background">
              Background Information
            </label>
            <textarea
              className="block w-full px-3 py-2 border border-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:border-gray-800"
              placeholder="Share some background information that would make the spoofed call more convincing"
              rows={3}
            />
          </div>
          <button
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-200 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:border-gray-800"
            type="submit"
          >
            Call
          </button>
        </div>
      </div>
    </main>
  )
}