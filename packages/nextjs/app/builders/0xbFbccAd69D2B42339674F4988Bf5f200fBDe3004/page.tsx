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
                  alt="chris"
                  width={200}
                  height={200}
                />
              </div>
              <div className="">
                <h1 className="text-3xl">Ezekiel Christian Emmanuelaudu</h1>
                <div className="flex gap-2">
                  <AcademicCapIcon className="h-5" />
                  <h1>Full Stack Developer</h1>
                </div>
                <div className="flex gap-2">
                <a href="https://www.instagram.com/ex3cofficial">
                        <Image src="/assets/instagram.png" alt="Instagram" width={25} height={25} /> </a>
                <a href="https://x.com/ekondu_e">
                    <Image src="/assets/x.png" alt="X" width={25} height={25} /></a>
                <a href="https://t.me/i_ex3c">
                    <Image src="/assets/telegram.png" alt="Telegram" width={25} height={25} /></a>
                  <div className=""></div>
                </a>
              </div>
              <a href="mailto:ekonduemmanuel@gmail.com?subject=A%20mail%20from%20your%20buidlguidl%profile%page">
                Say hello</a>
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