
import { render, screen } from '@testing-library/react';
import ContentSection from '../components/ContentSection';

test('renders title and description correctly', () => {
  const title = 'About Us';
  const description = '# Welcome to CoopConnect\nWe help farmers grow sustainably.';
  render(<ContentSection title={title} description={description} />);
  
  expect(screen.getByText(title)).toBeInTheDocument();
  expect(screen.getByText('Welcome to CoopConnect')).toBeInTheDocument();
});

test('renders bullet points from features array', () => {
  const features = ['Feature 1', 'Feature 2'];
  render(<ContentSection title="Features" features={features} />);
  
  features.forEach(feature => {
    expect(screen.getByText(`• ${feature}`)).toBeInTheDocument();
  });
});