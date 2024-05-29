"use client";

import type { NextPage } from "next";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { data: checkedInCount, isFetched: checkedInCountFetched } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  return (
    <>
      <div className="flex items-center flex-col flex-grow">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=1497&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="text-center">
                <span className="block text-2xl mb-2">Welcome to</span>
                <span className="block text-4xl font-bold">Batch 5</span>
              </h1>
              <p className="text-center text-lg">Get started by taking a look at your batch GitHub repository.</p>
              <p className="mb-5 text-5xl font-bold">
                <span className="font-bold">Checked in builders count:</span>
                {checkedInCountFetched ? (
                  <span>{(checkedInCount || 0n).toString()}</span>
                ) : (
                  <span className="loading loading-spinner loading-m"></span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
