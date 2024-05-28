/* eslint-disable react/no-unescaped-entities */

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";

export default function PersonalPage() {
  return (
    <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
      <div className="flex bg-base-100 px-10 py-10 items-center rounded-3xl  mb-4 md:mb-0">
        <div className="flex flex-col md:w-1/2">
          <Image src="/assets/Sahil.png " alt="Sahil Kharya" width={181} height={181} className="rounded-full" />
          <div className="">
            <h1 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl/none">
              Sahil Kharya
            </h1>
          </div>
          <div className="flex gap-3">
            <a href="https://github.com/Sahilkharya" target="_blank" rel="noopener noreferrer">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub"
                className="h-8 w-8"
              />
            </a>
            <a
              href="https://app.buidlguidl.com/builders/0x97DB651f21639C4F6b0997184373b9d21179C157"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BuidlGuidlLogo className="h-8 w-8" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:w-1/2">
          <p>
            I'm a passionate Full-Stack Developer with a strong focus on software development and blockchain technology.
            Armed with an M.S. in Software Engineering from Arizona State University, I bring a diverse skill set and
            solid academic foundation to the table.{" "}
          </p>
          <p>Currently working on a Personal Web3 Project, and learning more on the ZK privacy.</p>
        </div>
      </div>
    </div>
  );
}
