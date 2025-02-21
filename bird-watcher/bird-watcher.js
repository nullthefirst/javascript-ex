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
  let total = 0;

  for (const day of birdsPerDay) {
    total += day;
  }

  return total;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let weeks = [];

  let birds = [...birdsPerDay];

  for (let i = 1; i <= week; i++) {
    let increment = 7;

    weeks.push(birds.splice(0, increment));
  }

  return totalBirdCount(weeks[week - 1]);
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i === 0 || i % 2 === 0) {
      birdsPerDay.splice(i, 1, birdsPerDay[i] + 1);
    }
  }

  return birdsPerDay;
}
