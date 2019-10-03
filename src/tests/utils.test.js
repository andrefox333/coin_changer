/*
Construct a program that will make change for a 
given dollar amount in cents using the fewest number of coins. 
*/

import * as utils from "../lib/utils";

it("should return the fewest number of coins", () => {
  const assert = utils.returnFewestCoins(142);
  const expected = {
    25: 5,
    10: 1,
    5: 1,
    1: 2
  };

  expect(assert).toEqual(expected);
});

it("should return an error if coin type doesn't exist", () => {
  expect(() => {
    utils.returnFewestCoins(150, "mx");
  }).toThrowError(utils.ERROR_MSGS.COIN_NOT_FOUND);
});

it("should throw an error if dollar is not an integer", () => {
  expect(() => {
    utils.returnFewestCoins("andre");
  }).toThrow();
});
