/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
  if (remainingTime === 0) {
    return 'Lasagna is done.';
  } else {
    if (remainingTime === null || remainingTime === undefined) {
      return 'You forgot to set the timer.';
    } else {
      return 'Not done, please wait.';
    }
  }
}

export function preparationTime(layers, averageTime = 2) {
  return layers.length * averageTime;
}

export function quantities(layers) {
  const noodles = layers.filter((item) => item === 'noodles').length * 50;
  const sauce = layers.filter((item) => item === 'sauce').length * 0.2;

  return { noodles: noodles, sauce: sauce };
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, servings) {
  let output = {};

  for (const [key, value] of Object.entries(recipe)) {
    output[key] = (value / 2) * servings;
  }

  return output;
}
