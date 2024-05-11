"use client";

import Image from "next/image";
import type { NextPage } from "next";

const PersonalPage: NextPage = () => {
  return (
    <>
      <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
        <h1 className="text-center">
          <span className="block text-2xl mb-2">My </span>
          <span className="block text-4xl font-bold">Profile</span>
        </h1>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src="/profileimage.jpeg" alt="Avatar" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Temitope O. Hassan</h2>
            <p>
              I am a fullstack developer with a love for learning new programming languages. <br />I am currently
              immersing myself in blockchain development, learning Solidity and Rust.
              <br />I live in Lagos, the heartbeat of Nigeria.
            </p>
            <div className="card-actions">
              <Image alt="Twitter" src="/twitter.png" width={25} height={25} />
              <a href="https://twitter.com/temitopeohassan" target="_blank">
                Twitter
              </a>

              <Image alt="Github" src="/github.png" width={25} height={25} />
              <a href="https://github.com/temitopeohassan" target="_blank">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalPage;
