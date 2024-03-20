export const removeSpaces = (text: string): string => text.replace(/\s/g, '');

export const sumArrayElements = (array: Array<number>) =>
  array.reduce((acc, currentValue) => {
    return acc + currentValue;
  }, 0);

export const getCompletionPercentage = (
  allTasksArray: Array<number>,
  checkedTasksArray: Array<number>
) => {
  const sumOfArrayElements = sumArrayElements(allTasksArray);
  const normalisedArray = sumArrayElements(
    checkedTasksArray.map((value) => (value * 100) / sumOfArrayElements)
  );

  return Math.round(normalisedArray);
};
