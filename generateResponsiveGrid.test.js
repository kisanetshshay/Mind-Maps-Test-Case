
import generateResponsiveGrid from '../utils/generateResponsiveGrid';

test('splits items into rows of maxPerRow', () => {
  const items = [1, 2, 3, 4, 5];
  const result = generateResponsiveGrid(items, 2); // 2 per row
  
  expect(result).toEqual([[1, 2], [3, 4], [5]]);
});

test('handles empty input gracefully', () => {
  const result = generateResponsiveGrid([], 3);
  expect(result).toEqual([]);
});