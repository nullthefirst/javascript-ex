// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let time;

  switch (name) {
    case 'Pure Strawberry Joy':
      time = 0.5;
      break;
    case 'Energizer':
      time = 1.5;
      break;
    case 'Green Garden':
      time = 1.5;
      break;
    case 'Tropical Island':
      time = 3;
      break;
    case 'All or Nothing':
      time = 5;
      break;
    default:
      time = 2.5;
  }

  return time;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedgesCut = 0;
  let limesCut = 0;
  let limesStored = limes.length;

  if (wedgesNeeded === 0 || limesStored === 0) {
    return limesCut; // default value is zero
  }

  for (let lime in limes) {
    let wedges;

    switch (limes[lime]) {
      case 'small':
        wedges = 6;
        break;
      case 'medium':
        wedges = 8;
        break;
      case 'large':
        wedges = 10;
        break;
      default:
        wedges = 0;
    }

    wedgesCut += wedges;
    limesCut++;
    limesStored--;

    if (wedgesCut > wedgesNeeded || limesStored === 0) {
      return limesCut;
    }
  }
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let timer = 0;
  let orderList = [...orders];
  let orderTime = timeLeft;

  for (let i = 0; i < orderList.length; i++) {
    while (orderTime > 0) {
      let mixingTime = timeToMixJuice(orderList[i]);
      timer += mixingTime;
      orderTime -= mixingTime;
      orderList.shift();
    }
  }

  return orderList;
}
