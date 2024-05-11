import Image from "next/image";
import type { NextPage } from "next";
import { AcademicCapIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";

const Profile: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 justify-center">
        <div className="flex gap-10">
          <div className="">
            <Image src="/builders.jpeg" className="rounded-full" alt="Sachin Varma" width={200} height={40} />
          </div>
          <div className="my-auto flex flex-col gap-1">
            <div className="text-3xl">Sachin Verma</div>
            <div className="flex gap-2">
              <AcademicCapIcon className="h-5" />
              <div>Full Stack Developer</div>
            </div>
            <div className="flex gap-2">
              <MapPinIcon className="h-5" />
              <div className="">Thane, Maharastra</div>
            </div>
            <a href="https://twitter.com/Sac1in" target="_blank" className="flex gap-2 mb-2">
              <XMarkIcon className="h-5" />
              <div className="">X.com</div>
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <h1 className="text-center mt-4 max-w-screen-lg leading-">
            Software engineer with a passion for leveraging technology to create innovative solutions. With two years of
            hands-on experience in the MERN stack (MongoDB, Express.js, React, Node.js), I&apos;ve honed my skills in
            building robust and scalable software solutions.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Profile;
