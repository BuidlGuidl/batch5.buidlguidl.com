"use client";

import Image from "next/image";
import type { NextPage } from "next";

const PersonalPage: NextPage = () => {
  return (
    <>
      <div className="flex-grow bg-base-100 w-full mt-16 px-8 py-12">
        <h1 className="text-center">
          <span className="block text-2xl mb-2">My </span>
          <span className="block text-4xl font-bold">Profile</span>
        </h1>
        <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
          <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs ">
            <Image alt="Profile Image" src="/profileimage.jpeg" width={300} height={300} />
          </div>
          <div className="flex flex-col bg-base-100 px-10 py-10 w-full">
            <div>
              <ul>
                <li>
                  <strong>Name</strong>: Temitope O. Hassan
                </li>
                <li>
                  <strong>Bio</strong>:: I am a fullstack developer with a love for learning new programming languages.{" "}
                  <br />I am currently immersing myself in blockchain development, learning Solidity and Rust.
                  <br />I live in Lagos, the heartbeat of Nigeria.
                </li>
                <li>
                  <strong>Social</strong>:{" "}
                  <ul>
                    <li>
                      <Image alt="Twitter" src="/twitter.png" width={50} height={50} />
                      <a href="https://twitter.com/temitopeohassan" target="_blank">
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/temitopeohassan" target="_blank">
                        <Image alt="Github" src="/github.png" width={50} height={50} />
                        Github
                      </a>
                    </li>
                  </ul>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalPage;
