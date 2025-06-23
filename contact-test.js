import { testSubject } from './contact.js';

const {
  testNavLinks,
  testActiveNav,
  testKeyboardNavReports,
  testEmailCorrect,
  testEmailMailto,
  testPhoneTel,
  testInstagramLink,
  testSubject
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

test('should allow clicking on the placeholder form of the subject', () => {
  render(<SubjectForm />);
  const placeholder = screen.getByText(/enter subject/i); // adjust selector as needed

  // This will fail if the placeholder is not a button or not clickable
  fireEvent.click(placeholder);

  // Failing assertion: Expect something to change after click (e.g., an input appears)
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});


