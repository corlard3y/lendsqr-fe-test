import { formatCurrency } from './formatCurrency';

describe('formatCurrency', () => {
  it('formats numbers with commas and naira symbol', () => {
    expect(formatCurrency('1000')).toBe('₦1,000');
    expect(formatCurrency('1000000')).toBe('₦1,000,000');
  });

  it('handles decimals', () => {
    expect(formatCurrency('1000.50')).toBe('₦1,000.5');
  });

  it('removes non-numeric characters', () => {
    expect(formatCurrency('$1,000.50')).toBe('₦1,000.5');
  });

  it('handles invalid input', () => {
    expect(formatCurrency('')).toBe('₦0');
    expect(formatCurrency('abc')).toBe('₦0');
  });
});