const {
  testNavLinks,
  testActiveNav,
  testKeyboardNavReports,
  testEmailCorrect,
  testEmailMailto,
  testPhoneTel,
  testInstagramLink
} = require('./how-it-works.js');

test('1. Navigation bar links redirect to correct pages', () => {
  expect(testNavLinks()).toBe(true);
});

test('2. Navigation bar highlights About Us as active', () => {
  expect(testActiveNav()).toBe(true);
});

test('3. Keyboard navigation: pressing enter on Reports navigates to correct page', () => {
  expect(testKeyboardNavReports()).toBe(true);
});

test('4. Email matches the intended contact email', () => {
  expect(testEmailCorrect()).toBe(true);
});

test('5. Email is a mailto link', () => {
  expect(testEmailMailto()).toBe(true);
});

test('6. Contact phone number is a clickable tel link', () => {
  expect(testPhoneTel()).toBe(true);
});

test('7. Social icons link to correct Instagram page', () => {
  expect(testInstagramLink()).toBe(true);
});