import Image from "next/image";
import type { NextPage } from "next";
import { AcademicCapIcon, BriefcaseIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";

const Profile: NextPage = () => {
    return (
      <>
        <div className="flex items-center flex-col flex-grow pt-10 justify-center">
          <div className="h-1/2 w-2/4 flex flex-col justify-center items-center bg-secondary p-6 rounded-2xl">
            <div className="flex gap-10">
              <div className="">
                <Image
                  src="/assets/sachinverma.jpeg"
                  className="rounded-full"
                  alt="Sachin Varma"
                  width={200}
                  height={200}
                />
              </div>
              <div className="my-auto flex flex-col gap-1">
                <h1 className="text-3xl">Sachin Verma</h1>
                <div className="flex gap-2">
                  <AcademicCapIcon className="h-5" />
                  <h1>Full Stack Developer</h1>
                </div>
                <div className="flex gap-2">
                  <MapPinIcon className="h-5" />
                  <div className="">Thane, Maharastra</div>
                </div>
                <a href="https://twitter.com/Sac1in" target="_blank" className="flex gap-2">
                  <XMarkIcon className="h-5" />
                  <div className="">X.com</div>
                </a>
                <a href="https://www.linkedin.com/in/sac1hin/" target="_blank" className="flex gap-2 mb-2">
                  <BriefcaseIcon className="h-5" />
                  <div className="">LinkedIn</div>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <h2 className="text-center text-xl mt-4 max-w-screen-lg leading-6">
                Software engineer with a passion for leveraging technology to create innovative solutions. With two years
                of hands-on experience in the MERN stack (MongoDB, Express.js, React, Node.js), I&apos;ve honed my skills
                in building robust and scalable software solutions.
              </h2>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Profile;