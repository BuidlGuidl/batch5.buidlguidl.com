"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import type { Address as AddressType } from "viem";
import { useEnsAvatar, useEnsName } from "wagmi";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

const Builder = ({ address }: { address: AddressType }) => {
  const [ensName, setEns] = useState<string | null>();
  const [ensAvatar, setEnsAvatar] = useState<string | null>();

  const { data: fetchedEns, error: errorName, isFetched: isFetchedEns } = useEnsName({ address, chainId: 1 });
  if (errorName) console.error("ENS Name Error:", errorName, "for", address);

  const {
    data: fetchedEnsAvatar,
    error: errorAvatar,
    isFetched: isFetchedAvatar,
  } = useEnsAvatar({ name: String(fetchedEns), chainId: 1 });
  if (errorAvatar) console.error("ENS Avator Error:", errorAvatar, "for", address);

  useEffect(() => setEnsAvatar(fetchedEnsAvatar), [fetchedEnsAvatar]);
  useEffect(() => setEns(fetchedEns), [fetchedEns]);

  return (
    <>
      <div className="m-10 ">
        <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 mb-6 space-y-1 py-4 overflow-x-auto">
          <Link href={`/builders/${address}`}>
            {isFetchedAvatar ? (
              <BlockieAvatar address={address} ensImage={ensAvatar} size={100} />
            ) : (
              <span className="loading loading-spinner loading-lg"></span>
            )}
            <div>{isFetchedEns ? ensName : "*****"}</div>
            <div>{address}</div>
          </Link>
        </div>
      </div>
    </>
  );
};

const Builders: NextPage = () => {
  const { data } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: 119694950n,
  });

  return (
    <>
      {data ? (
        data.map((log, index) => <Builder key={index} address={log.args.builder || ""} />)
      ) : (
        <span className="loading loading-spinner loading-lg"></span>
      )}
    </>
  );
};

export default Builders;
