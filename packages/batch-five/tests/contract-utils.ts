import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { CheckedIn, OwnershipTransferred } from "../generated/Contract/Contract"

export function createCheckedInEvent(
  first: boolean,
  builder: Address,
  checkInContract: Address
): CheckedIn {
  let checkedInEvent = changetype<CheckedIn>(newMockEvent())

  checkedInEvent.parameters = new Array()

  checkedInEvent.parameters.push(
    new ethereum.EventParam("first", ethereum.Value.fromBoolean(first))
  )
  checkedInEvent.parameters.push(
    new ethereum.EventParam("builder", ethereum.Value.fromAddress(builder))
  )
  checkedInEvent.parameters.push(
    new ethereum.EventParam(
      "checkInContract",
      ethereum.Value.fromAddress(checkInContract)
    )
  )

  return checkedInEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
