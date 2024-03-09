import {
  getCompletionPercentage,
  removeSpaces,
  sumArrayElements,
} from '../utils';

test('Remove spaces from string', () => {
  expect(removeSpaces('Lorem Ipsum ')).toBe('LoremIpsum');
});

test('Sum array values', () => {
  expect(sumArrayElements([2, 3])).toBe(5);
});

test('Return completion percentage from two arrays', () => {
  expect(getCompletionPercentage([1, 2, 3, 4], [1, 2])).toBe(30);
});
