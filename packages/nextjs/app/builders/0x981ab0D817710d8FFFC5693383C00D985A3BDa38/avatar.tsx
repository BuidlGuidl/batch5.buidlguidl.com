"use client";

import { useEnsAddress, useEnsAvatar } from "wagmi";
import { BlockieAvatar } from "~~/components/scaffold-eth";

const Avatar = ({ name }: { name: string }) => {
  const { data: ensAddress, error: errorAddress } = useEnsAddress({ name, chainId: 1 });
  if (errorAddress) console.error("ENS Address Error:", errorAddress);

  const { data: ensAvatar, error: errorAvatar } = useEnsAvatar({ name, chainId: 1 });
  if (errorAvatar) console.error("ENS Avatar Error:", errorAvatar);

  return (
    <>
      {ensAddress ? (
        <BlockieAvatar address={ensAddress} ensImage={ensAvatar} size={100} />
      ) : (
        <span className="loading loading-spinner loading-lg"></span>
      )}
    </>
  );
};

export default Avatar;
