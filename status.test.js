
import { render, screen } from '@testing-library/react';
import StatsCard from '../components/StatsCard';

test('renders value and label correctly', () => {
  const label = 'Farmers';
  const value = '225+';
  render(<StatsCard label={label} value={value} />);
  
  expect(screen.getByText(value)).toBeInTheDocument();
  expect(screen.getByText(label)).toBeInTheDocument();
});

test('uses fallback values when props are missing', () => {
  render(<StatsCard />);
  expect(screen.getByText('N/A')).toBeInTheDocument();
  expect(screen.getByText('Unknown Statistic')).toBeInTheDocument();
});