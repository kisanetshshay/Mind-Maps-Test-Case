
import { render, screen } from '@testing-library/react';
import HeroSection from '../components/HeroSection';

test('renders headline and subheading', () => {
  const headline = 'Empowering Agriculture';
  const subheading = 'On-demand agricultural solutions.';
  render(<HeroSection headline={headline} subheading={subheading} />);
  
  expect(screen.getByText(headline)).toBeInTheDocument();
  expect(screen.getByText(subheading)).toBeInTheDocument();
});

test('renders CTA button when ctaText is provided', () => {
  const ctaText = 'Discover More';
  render(<HeroSection headline="Test" ctaText={ctaText} />);
  expect(screen.getByText(ctaText)).toBeInTheDocument();
});

test('does not render CTA button when ctaText is missing', () => {
  render(<HeroSection headline="Test" />);
  const buttons = screen.queryAllByRole('button');
  expect(buttons.length).toBe(0);
});