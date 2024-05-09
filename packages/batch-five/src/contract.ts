import {
  CheckedIn as CheckedInEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/Contract/Contract"
import { CheckedIn, OwnershipTransferred } from "../generated/schema"

export function handleCheckedIn(event: CheckedInEvent): void {
  let entity = new CheckedIn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.first = event.params.first
  entity.builder = event.params.builder
  entity.checkInContract = event.params.checkInContract

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
