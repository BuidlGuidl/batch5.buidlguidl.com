"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { useEnsAvatar, useEnsName } from "wagmi";
import { BlockieAvatar } from "~~/components/scaffold-eth";

const Zapaz: NextPage = () => {
  const address = window.location.pathname.split("/").pop() || "";
  const [ensName, setEns] = useState<string | null>();
  const [ensAvatar, setEnsAvatar] = useState<string | null>();
  const { data: fetchedEns } = useEnsName({ address, chainId: 1 });
  const { data: fetchedEnsAvatar } = useEnsAvatar({ name: String(fetchedEns), chainId: 1 });
  useEffect(() => setEnsAvatar(fetchedEnsAvatar), [fetchedEnsAvatar]);
  useEffect(() => setEns(fetchedEns), [fetchedEns]);

  return (
    <>
      <div className="m-10 mb-20">
        <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 mb-6 space-y-1 py-4 overflow-x-auto">
          <BlockieAvatar address={address} ensImage={ensAvatar} size={100} />

          <div>{ensName}</div>
          <div>
            Web3 Architect @
            <Link href="https://www.kredeum.com" className="link">
              Kredeum
            </Link>
          </div>
          <div>
            GitHub repos: &nbsp;
            <Link href="https://github.com/kredeum/Kredeum" className="link">
              Kredeum NFTs Factory
            </Link>
            &nbsp; - &nbsp;
            <Link href="https://github.com/kredeum/opennfts" className="link">
              OpenNFTs Library
            </Link>
            &nbsp; - &nbsp;
            <Link href="https://github.com/zapaz/forge-deploy-lite" className="link">
              Forge Deploy Lite
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Zapaz;
