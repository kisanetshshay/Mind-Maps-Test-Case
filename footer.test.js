
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders contact info correctly', () => {
  const email = 'info@coopconnect.com';
  const phone = '+254-456-7890';
  render(<Footer email={email} phone={phone} />);
  
  expect(screen.getByText(`Email: ${email}`)).toBeInTheDocument();
  expect(screen.getByText(`Phone: ${phone}`)).toBeInTheDocument();
});

test('uses default links when socialLinks is empty', () => {
  render(<Footer />);
  const socialLinks = screen.queryAllByRole('link');
  expect(socialLinks.length).toBe(0);
});