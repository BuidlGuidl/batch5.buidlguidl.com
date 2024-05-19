"use client";

import type { NextPage } from "next";
import type { Address as AddressType } from "viem";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

const Builder = ({ address }: { address: AddressType }) => {
  return (
    <>
      <li>
        <hr />
        <div className="timeline-start timeline-box">
          <Address address={address} />
        </div>
        <div className="timeline-middle">
          <a href={`/builders/${address}`}>
            <span style={{ fontSize: "22px" }}>👀</span>
          </a>
        </div>
        <hr />
      </li>
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
      <ul className="timeline timeline-vertical">
        <li>
          <div className="timeline-middle timeline-box">List of Batch #5 Builders</div>
          <hr />
        </li>
        {data && data.length > 0 ? (
          data.map((log, index) => <Builder key={index} address={log.args.builder || ""} />)
        ) : (
          <li>
            <div className="timeline-middle timeline-box">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          </li>
        )}
      </ul>
    </>
  );
};

export default Builders;
