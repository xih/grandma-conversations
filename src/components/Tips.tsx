/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/9dFRLv2xXv0
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Chivo } from 'next/font/google'
import { Rubik } from 'next/font/google'

chivo({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
export function Tips() {
  return (
    <main className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32">
      <div className="space-y-8 sm:space-y-12">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">5 Steps to Protect Against Phone Scams</h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Safeguard your personal information and avoid falling victim to fraudulent calls.
          </p>
        </div>
        <div className="grid gap-8 sm:gap-12">
          <div className="grid gap-4 sm:grid-cols-[auto_1fr] items-center">
            <ShieldIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            <div>
              <h2 className="text-xl font-semibold">Be Cautious of Unsolicited Calls</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Scammers often use high-pressure tactics to get you to share personal information. If you didn't
                initiate the call, be extremely wary of providing any details.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-[auto_1fr] items-center">
            <FingerprintIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            <div>
              <h2 className="text-xl font-semibold">Verify the Caller's Identity</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                If the caller claims to be from a legitimate organization, ask for their name and contact information.
                Then, independently verify their identity before sharing any sensitive data.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-[auto_1fr] items-center">
            <LockIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            <div>
              <h2 className="text-xl font-semibold">Never Provide Personal Information</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Legitimate organizations will never ask you to share sensitive details like your Social Security number,
                bank account information, or passwords over the phone.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-[auto_1fr] items-center">
            <PhoneIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            <div>
              <h2 className="text-xl font-semibold">Hang Up and Call Back</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                If you're unsure about the caller's legitimacy, politely end the conversation. Then, look up the
                organization's official contact information and call them back to verify the request.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-[auto_1fr] items-center">
            <ViewIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
            <div>
              <h2 className="text-xl font-semibold">Report Suspicious Activity</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                If you believe you've been the target of a phone scam, report it to the appropriate authorities, such as
                the Federal Trade Commission or your local law enforcement agency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function FingerprintIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
      <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
      <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
      <path d="M2 12a10 10 0 0 1 18-6" />
      <path d="M2 16h.01" />
      <path d="M21.8 16c.2-2 .131-5.354 0-6" />
      <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
      <path d="M8.65 22c.21-.66.45-1.32.57-2" />
      <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
    </svg>
  )
}


function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}


function ViewIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  )
}
