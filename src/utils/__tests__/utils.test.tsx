import { removeSpaces } from '../utils';

test('Remove spaces from string', () => {
  expect(removeSpaces('Lorem Ipsum ')).toBe('LoremIpsum');
});
