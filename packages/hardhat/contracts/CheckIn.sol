// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./BatchRegistry.sol";

contract CheckIn {
    BatchRegistry private immutable batchRegistry;


    constructor(address payable _batchRegistryAddress) payable {
        batchRegistry = BatchRegistry(_batchRegistryAddress);
    }

    function checkInUser() public {
        
        batchRegistry.checkIn();
    }
}
