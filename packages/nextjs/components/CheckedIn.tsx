import Link from "next/link";
import { type Address } from "viem";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth/useScaffoldReadContract";
import { ZERO_ADDRESS } from "~~/utils/scaffold-eth/common";

export const CheckedIn = ({ address }: { address: Address }) => {
  const { data: allowed, isFetched: allowedFetched } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "allowList",
    args: [address],
  });

  const { data: contractAddress, isFetched: checkedInFetched } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "yourContractAddress",
    args: [address],
  });

  return (
    <>
      {allowedFetched && checkedInFetched ? (
        allowed ? (
          contractAddress === ZERO_ADDRESS ? (
            <Link href="https://github.com/BuidlGuidl/batch5.buidlguidl.com/issues/9">Check In Now! 🚀</Link>
          ) : (
            <span>Checked In ✅ Congrats! </span>
          )
        ) : (
          <span>Not Allowed 😔 Sorry...</span>
        )
      ) : (
        <span className="loading loading-spinner loading-m"></span>
      )}
    </>
  );
};
