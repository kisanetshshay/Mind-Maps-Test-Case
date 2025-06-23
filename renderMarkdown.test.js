
import renderMarkdown from '../utils/renderMarkdown';

test('converts markdown headers into HTML', () => {
  const input = '# Header 1\n## Header 2\n### Header 3';
  const output = renderMarkdown(input);
  
  expect(output).toContain('<h1>Header 1</h1>');
  expect(output).toContain('<h2>Header 2</h2>');
  expect(output).toContain('<h3>Header 3</h3>');
});

test('converts bold and italic text', () => {
  const input = '**Bold Text** and _Italic Text_';
  const output = renderMarkdown(input);
  
  expect(output).toContain('<strong>Bold Text</strong>');
  expect(output).toContain('<em>Italic Text</em>');
});

test('returns empty string for null input', () => {
  const output = renderMarkdown(null);
  expect(output).toBe('');
});