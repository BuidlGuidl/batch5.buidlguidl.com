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
                src="/assets/chris.png"
                className="rounded-full"
                alt="Ezekiel Christian Emmanuelaudu"
                width={200}
                height={200}
              />
            </div>
            <div className="my-auto flex flex-col gap-1">
              <h1 className="text-3xl">Ezekiel Christian Emmanuelaudu</h1>
              <div className="flex gap-2">
                <AcademicCapIcon className="h-5" />
                <h1>Pure Designer | Growing Developer</h1>
                <h1> Address: 0xbFbccAd69D2B42339674F4988Bf5f200fBDe3004</h1>
              </div>
        
              <a href="https://twitter.com/ekondu_e" target="_blank" className="flex gap-2">
                <XMarkIcon className="h-5" />
                <div className="">X.com</div>
              </a>
        
            </div>
          </div>
          <div className="flex justify-center">
            <h2 className="text-center text-xl mt-4 max-w-screen-lg leading-6">
            My name is Ezekiel Ekondu Christian Emmanuelaudu, &apos;
                I'm a Product Designer, 3d modelling artist, Motion &apos;
                graphics designer and growing Developer.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
