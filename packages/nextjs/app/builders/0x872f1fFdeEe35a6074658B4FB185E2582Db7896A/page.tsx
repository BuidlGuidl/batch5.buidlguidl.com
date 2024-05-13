import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next";
import {
  AcademicCapIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  StarIcon,
  TrophyIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
import { Address } from "~~/components/scaffold-eth";

const CleanerPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cleaner - Web3 Enthusiast and Developer</title>
        <meta
          name="description"
          content="Official page of Cleaner, a full-stack and smart contract developer passionate about Web3, hackathons, and innovative technology like ZK and AI."
        />
        <meta property="og:title" content="Cleaner - Web3 Enthusiast and Developer" />
        <meta
          property="og:description"
          content="Discover the projects and passions of Cleaner, including development in Web3 and participation in global hackathons."
        />
        <meta property="og:image" content="/thumbnail.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cleaner - Web3 Enthusiast and Developer" />
        <meta
          name="twitter:description"
          content="Learn more about Cleaner's work in blockchain technology and his contributions to decentralized applications."
        />
        <meta name="twitter:image" content="/thumbnail.jpg" />
      </Head>
      <div className="w-full max-w-6xl mx-auto rounded-3xl shadow-2xl flex flex-row my-10 animate-gradient-x">
        {/* image column */}
        <div className="w-1/2 rounded-l-3xl bg-secondary">
          <div className="flex justify-center items-center h-full">
            <div className="w-80 h-80 overflow-hidden rounded-full shadow-lg">
              <Image
                src="/thumbnail.jpg"
                alt="Cleaner Avatar"
                className="object-cover w-full h-full"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        {/* content column */}
        <div className="w-1/2 bg-gradient-to-r from-secondary to-base-100 dark:from-secondary dark:to-base-300 rounded-r-3xl flex flex-col justify-center p-8">
          <div className="flex justify-between items-center">
            <h1 className="text-5xl font-semibold">
              <span className="bg-clip-text text-black dark:text-white bg-gradient-to-r from-base-400 to-base-100 via-base-150 dark:from-secondary dark:via-secondary dark:to-secondary">
                Cleaner
              </span>
              <span className="space-y-1">
                <Address address="0x872f1fFdeEe35a6074658B4FB185E2582Db7896A" />
              </span>
            </h1>
            <div className="flex gap-3">
              <a href="https://github.com/cleanerzkp" target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="GitHub"
                  className="h-8 w-8"
                />
              </a>
              <a
                href="https://app.buidlguidl.com/builders/0x872f1fFdeEe35a6074658B4FB185E2582Db7896A"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BuidlGuidlLogo className="h-8 w-8" />
              </a>
              <a href="https://t.me/cleanerzk" target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                  alt="Telegram"
                  className="h-8 w-8"
                />
              </a>
              <a
                href="https://twitter.com/0xcleaner"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-white"
              >
                <XMarkIcon className="h-8 w-8 text-black dark:text-white" />
              </a>
            </div>
          </div>
          <div className="mt-4">
            <p className="flex items-start gap-3 text-gray-900 dark:text-gray-200">
              <RocketLaunchIcon className="h-8 w-8 text-blue-500 dark:text-blue-400 hover:scale-125 transition-transform duration-300" />
              <span>Web3 Enthusiast</span>
            </p>
            <p className="flex items-start gap-3 text-gray-900 dark:text-gray-200">
              <CodeBracketIcon className="h-8 w-8 text-green-500 dark:text-green-400 hover:scale-125 transition-transform duration-300" />
              <span>Full-stack + Smart Contract Developer</span>
            </p>
            <p className="flex items-start gap-3 text-gray-900 dark:text-gray-200">
              <StarIcon className="h-8 w-8 text-yellow-500 dark:text-yellow-400 hover:scale-125 transition-transform duration-300" />
              <span>Working on Dark Pool</span>
            </p>
            <p className="flex items-start gap-3 text-gray-900 dark:text-gray-200">
              <TrophyIcon className="h-8 w-8 text-red-600 dark:text-red-500 hover:scale-125 transition-transform duration-300" />
              <span>Like to attend hackathons</span>
            </p>
            <p className="flex items-start gap-3 text-gray-900 dark:text-gray-200">
              <AcademicCapIcon className="h-8 w-8 text-purple-500 dark:text-purple-400 hover:scale-125 transition-transform duration-300" />
              <span>Learning ZK and AI</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CleanerPage;
