// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalCount = 0;

  for (let bird = 0; bird < birdsPerDay.length; bird++) {
    totalCount += birdsPerDay[bird];
  }

  return totalCount;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let weeksHolder = [];

  console.log(birdsPerDay);

  let weekHolder = [];

  for (let birds = 0; birds < birdsPerDay.length; birds++) {
    weekHolder.push(birdsPerDay[birds]);

    if (weekHolder.length === 7) {
      weeksHolder.push(weekHolder);
      weekHolder = [];
    }
  }

  const selectedWeek = weeksHolder[week - 1];

  return totalBirdCount(selectedWeek);
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let bird = 0; bird < birdsPerDay.length; bird = bird + 2) {
    if (bird + (1 % 2) !== 0) {
      birdsPerDay[bird] += 1;
    }
  }
}
