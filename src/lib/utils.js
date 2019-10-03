export const ERROR_MSGS = {
  COIN_NOT_FOUND: "Coins not found"
};
export const COINS = {
  us: [25, 10, 5, 1],
  eu: [50, 20, 10, 5, 2, 1]
};
/**
 * Return an object with the fewest number of coins
 * @param {Number} dollar
 * @param {String} coinType
 * @return {Object}
 */
export function returnFewestCoins(dollar, coinType = "us") {
  const coins = COINS[coinType];

  if (coins === undefined) {
    throw ERROR_MSGS.COIN_NOT_FOUND;
  }

  if (isNaN(dollar)) {
    throw "Please enter a number.";
  }

  let remainingDollarVal = dollar;

  return coins.reduce((accum, currentCoin) => {
    const numOfCoins = Math.floor(remainingDollarVal / currentCoin);
    remainingDollarVal = remainingDollarVal - numOfCoins * currentCoin;
    accum[currentCoin] = numOfCoins;
    return accum;
  }, {});
}
