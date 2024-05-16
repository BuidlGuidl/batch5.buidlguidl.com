import Link from "next/link";
import Avatar from "./avatar";
import type { NextPage } from "next";

const Zapaz: NextPage = () => {
  const ensName = "zapaz.eth";

  return (
    <>
      <div className="m-10 mb-20">
        <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 mb-6 space-y-1  py-4 overflow-x-auto">
          <Avatar name={ensName} />
          <div>{ensName}</div>
          <div>
            Web3 Architect @
            <Link
              href="https://www.kredeum.com"
              className="link"
              title="Kredeum: The easiest way to Mint and Exchange NFTs"
            >
              Kredeum
            </Link>
          </div>
          <div>
            GitHub repos:
            <Link
              href="https://github.com/kredeum/Kredeum"
              className="link p-2"
              title="Kredeum NFTs Factory: Mint it right! The easiest way to Mint and Exchange NFTs"
            >
              Kredeum NFTs Factory
            </Link>
            -
            <Link
              href="https://github.com/kredeum/opennfts"
              className="link p-2"
              title="OpenNFTs: a NFT library to write your NFT collections"
            >
              OpenNFTs Library
            </Link>
            -
            <Link
              href="https://github.com/Kredeum/TheRelay"
              className="link p-2"
              title="TheRelay: to enrich TheGraph NFT queries with metadata"
            >
              TheRelay
            </Link>
            -
            <Link
              href="https://github.com/zapaz/forge-deploy-lite"
              className="link p-2"
              title="Forge Deploy Lite: multi-networks deployments generating addresses.json for your frontend UI"
            >
              Forge Deploy Lite
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Zapaz;
