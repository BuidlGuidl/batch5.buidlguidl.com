import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { CheckedIn } from "../generated/schema"
import { CheckedIn as CheckedInEvent } from "../generated/Contract/Contract"
import { handleCheckedIn } from "../src/contract"
import { createCheckedInEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let first = "boolean Not implemented"
    let builder = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let checkInContract = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newCheckedInEvent = createCheckedInEvent(
      first,
      builder,
      checkInContract
    )
    handleCheckedIn(newCheckedInEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CheckedIn created and stored", () => {
    assert.entityCount("CheckedIn", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CheckedIn",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "first",
      "boolean Not implemented"
    )
    assert.fieldEquals(
      "CheckedIn",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "builder",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CheckedIn",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "checkInContract",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
