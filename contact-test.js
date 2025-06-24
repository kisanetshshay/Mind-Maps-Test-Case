import { testSubject } from './contact.js';
const {
  testNavLinks,
  testActiveNav,
  testKeyboardNavReports,
  testEmailCorrect,
  testEmailMailto,
  testPhoneTel,
  testInstagramLink,
  isNamePlaceholderClickable,
  isPhoneNumberPlaceholderClickable,
  isSubjectPlaceholderClickable,
  isMessagePlaceholderClickable,
  isMapClickable
} = require('./contact.js');
// Navigation Tests
test('Navigation bar links redirect to correct pages', () => {
  expect(testNavLinks()).toBe(true);
});
test('Navigation bar highlights About Us as active', () => {
  expect(testActiveNav()).toBe(true);
});
test('Keyboard navigation: pressing enter on Reports navigates to correct page', () => {
  expect(testKeyboardNavReports()).toBe(true);
});
// Contact Info Tests
test('Email matches the intended contact email', () => {
  expect(testEmailCorrect()).toBe(true);
});
test('Email is a mailto link', () => {
  expect(testEmailMailto()).toBe(true);
});
test('Contact phone number is a clickable tel link', () => {
  expect(testPhoneTel()).toBe(true);
});
// Social Media Links
test('Social icons link to correct Instagram page', () => {
  expect(testInstagramLink()).toBe(true);
});
// Placeholder Click Tests
test('Name placeholder should be clickable', () => {
  const result = isNamePlaceholderClickable('name-placeholder');
  expect(result).toBe(true);
});
test('Phone number placeholder should be clickable', () => {
  const result = isPhoneNumberPlaceholderClickable('phone-placeholder');
  expect(result).toBe(true);
});
test('Subject placeholder should be clickable', () => {
  const result = isSubjectPlaceholderClickable('subject-placeholder');
  expect(result).toBe(true);
});
test('Message placeholder should be clickable', () => {
  const result = isMessagePlaceholderClickable('message-placeholder');
  expect(result).toBe(true);
});
test('Map should be clickable', () => {
  const result = isMapClickable('map');
  expect(result).toBe(true);
});
