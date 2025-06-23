
import { render, screen } from '@testing-library/react';
import OfferingsSection from '../components/OfferingsSection';

const offerings = [
  { title: 'Harvest Improvement' },
  { title: 'Business Growth' },
];

test('renders offering titles correctly', () => {
  render(<OfferingsSection offerings={offerings} />);
  
  offerings.forEach(offering => {
    expect(screen.getByText(offering.title)).toBeInTheDocument();
  });
});