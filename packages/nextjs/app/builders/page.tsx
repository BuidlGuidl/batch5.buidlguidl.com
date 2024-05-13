"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import type { Address as AddressType } from "viem";
import { decodeEventLog } from "viem";
import { useEnsAvatar, useEnsName } from "wagmi";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import externalContracts from "~~/contracts/externalContracts";
import { useContractLogs } from "~~/hooks/scaffold-eth";

const batchRegistry = externalContracts[10].BatchRegistry;
const batchRegistryAbi = batchRegistry.abi;
const batchRegistryAddress = batchRegistry.address;

const Builder = ({ address }: { address: AddressType }) => {
  const [ensName, setEns] = useState<string | null>();
  const [ensAvatar, setEnsAvatar] = useState<string | null>();
  const { data: fetchedEns } = useEnsName({ address, chainId: 1 });
  const { data: fetchedEnsAvatar } = useEnsAvatar({ name: String(fetchedEns), chainId: 1 });
  useEffect(() => setEnsAvatar(fetchedEnsAvatar), [fetchedEnsAvatar]);
  useEffect(() => setEns(fetchedEns), [fetchedEns]);

  return (
    <>
      <div className="m-10 ">
        <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 mb-6 space-y-1 py-4 overflow-x-auto">
          <Link href={`/builders/${address}`}>
            <BlockieAvatar address={address} ensImage={ensAvatar} size={100} />
            <div>{ensName}</div>
            <div>{address}</div>
          </Link>
        </div>
      </div>
    </>
  );
};

const Builders: NextPage = () => {
  const [builders, setBuilders] = useState<string[]>([]);
  const contractLogs = useContractLogs(batchRegistryAddress);

  useEffect(() => {
    console.log("useEffect ~ contractLogs:", contractLogs);
    const logBuilders = contractLogs
      .map(log => decodeEventLog({ abi: batchRegistryAbi, data: log.data, topics: log.topics }))
      .filter(log => log.eventName === "CheckedIn")
      .map(log => (log.args as { builder: string }).builder);

    setBuilders(logBuilders);
  }, [contractLogs]);

  return (
    <>
      {builders.map((builder, index) => (
        <Builder key={index} address={builder} />
      ))}
    </>
  );
};

export default Builders;
