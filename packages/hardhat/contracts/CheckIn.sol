//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./BatchRegistry.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

contract CheckIn {
    BatchRegistry private immutable registry;

    constructor(address payable _registryAddress) payable {
        registry = BatchRegistry(_registryAddress);
    }

    function checkMeIn() public {
        registry.checkIn();
    }
}