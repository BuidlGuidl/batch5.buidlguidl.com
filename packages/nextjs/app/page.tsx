"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory, useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { data: checkedInCount, isFetched: checkedInCountFetched } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  const {
    data: eventData,
    isLoading,
    error,
  } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: 114830037n,
  });

  const firstTimeCheckInEvents = eventData?.filter(({ args: { first } }) => first);
  const builders = firstTimeCheckInEvents?.map(({ args: { builder } }) => builder);

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
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

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center  gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contracts
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center justify-center max-w-xs rounded-3xl">
              {error && <h3>Had a problem fetching builder data</h3>}
              {isLoading
                ? new Array(5).fill(null).map((_, idx) => (
                    <div key={idx} className="flex gap-2 items-center mb-2">
                      <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
                      <div className="flex flex-col gap-4">
                        <div className="skeleton h-4 w-28"></div>
                      </div>
                    </div>
                  ))
                : builders?.map(builderAddress => (
                    <Link
                      key={builderAddress}
                      href={`/builders/${builderAddress}`}
                      className="hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-sm rounded gap-2 grid grid-flow-col"
                    >
                      <Address disableAddressLink address={builderAddress} size="xl" />
                    </Link>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
