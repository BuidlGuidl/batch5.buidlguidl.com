"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useEnsAddress, useEnsAvatar } from "wagmi";
import { BlockieAvatar } from "~~/components/scaffold-eth";

const ensName = "zapaz.eth";

const Zapaz: NextPage = () => {
  const { data: ensAddress, error: errorAddress } = useEnsAddress({ name: ensName, chainId: 1 });
  if (errorAddress) console.error("ENS Address Error:", errorAddress);

  const { data: ensAvatar, error: errorAvatar } = useEnsAvatar({ name: ensName, chainId: 1 });
  if (errorAvatar) console.error("ENS Avator Error:", errorAvatar);

  return (
    <>
      <div className="m-10 mb-20">
        <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 mb-6 space-y-1  py-4 overflow-x-auto">
          {ensAddress && ensAvatar ? (
            <BlockieAvatar address={ensAddress} ensImage={ensAvatar} size={100} />
          ) : (
            <span className="loading loading-spinner loading-lg"></span>
          )}
          <div>{ensName}</div>
          <div>
            Web3 Architect @
            <Link href="https://www.kredeum.com" className="link">
              Kredeum
            </Link>
          </div>
          <div>
            GitHub repos:
            <Link href="https://github.com/kredeum/Kredeum" className="link p-2">
              Kredeum NFTs Factory
            </Link>
            -
            <Link href="https://github.com/kredeum/opennfts" className="link p-2">
              OpenNFTs Library
            </Link>
            -
            <Link href="https://github.com/zapaz/forge-deploy-lite" className="link p-2">
              Forge Deploy Lite
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Zapaz;
