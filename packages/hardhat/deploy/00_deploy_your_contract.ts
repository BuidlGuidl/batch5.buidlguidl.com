import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

interface DeployedContracts {
  BatchRegistry: Contract;
  CheckIn: Contract;
}

const deployCheckIn: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Deploy the BatchRegistry contract
  const batchRegistryDeployment = await deploy("BatchRegistry", {
    from: deployer,
    log: true,
    // Optional: specify constructor arguments if needed
    args: [],
  });
  const BatchRegistry = (await hre.ethers.getContract("BatchRegistry", deployer)) as Contract;
  console.log("BatchRegistry contract deployed at:", batchRegistryDeployment.address);

  // Deploy the CheckIn contract with the address of BatchRegistry contract
  const checkInDeployment = await deploy("CheckIn", {
    from: deployer,
    log: true,
    // pass the address of BatchRegistry contract as an argument
    args: [batchRegistryDeployment.address],
  });
  const CheckIn = (await hre.ethers.getContract("CheckIn", deployer)) as Contract;
  console.log("CheckIn contract deployed at:", checkInDeployment.address);

  // store the deployed contracts in an object for further use
  const deployedContracts: DeployedContracts = {
    BatchRegistry,
    CheckIn,
  };

  //access the addresses using the contracts object
  console.log("BatchRegistry address:", deployedContracts.BatchRegistry.address);
  console.log("CheckIn address:", deployedContracts.CheckIn.address);
};

export default deployCheckIn;

deployCheckIn.tags = ["CheckIn"];
