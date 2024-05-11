"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function PersonalPage() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r  from-blue-200 to-cyan-200 dark:from-blue-800  dark:to-indigo-900 ">
      <div className="container px-4 md:px-6 text-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQEywq2rS21wgA/profile-displayphoto-shrink_400_400/0/1693664446083?e=1720656000&v=beta&t=Trm5Uk2CKasWaMefApGk_kKjzIw6DB6Eq0ovqJo4qGo"
              alt="Ishaan Shah"
              className="rounded-full pt-2 w-60 h-60 object-cover md:w-80 md:h-80"
            />
          </div>
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Ishaan Shah
            </h1>
            <p className="mx-auto font-bold max-w-[700px] mb-10">📍Mumbai, India</p>
            <p className="mx-auto text-xl max-w-[700px] md:text-xl">
              <span className="text-xl font-bold dark:font-normal dark:hidden">Backend Software Engineer by Day.</span>
              <span className="text-xl hidden dark:font-bold dark:block">Web3 Aficionado by Night.</span>
            </p>
          </div>
          <p className="flex justify-center md:justify-start">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-500 px-4 py-2 text-sm font-medium text-gray-100 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              href="https://www.github.com/ishaan812"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
            <span className="mx-4">|</span>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-gray-300 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              href="https://www.linkedin.com/in/ishaan812/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Link>
            <span className="mx-4">|</span>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-purple-500 px-4 py-2 text-sm font-medium text-gray-300 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              href="https://warpcast.com/ishaan812"
              target="_blank"
              rel="noreferrer"
            >
              Warpcast
            </Link>
          </p>
          <p>Hint: Flip your color setting</p>
        </div>
      </div>
    </section>
  );
}
