import { formatCurrency } from './formatCurrency';

describe('formatCurrency', () => {
  it('formats a simple number string correctly', () => {
    expect(formatCurrency('1000')).toBe('₦1,000');
  });

  it('formats a number with decimals correctly', () => {
    expect(formatCurrency('1000.50')).toBe('₦1,000.5');
  });

  it('removes non-numeric characters except decimal point', () => {
    expect(formatCurrency('$1,000.50')).toBe('₦1,000.5');
  });

  it('handles string with multiple non-numeric characters', () => {
    expect(formatCurrency('abc1def2ghi3')).toBe('₦123');
  });

  it('handles empty string', () => {
    expect(formatCurrency('')).toBe('₦0');
  });

  it('handles string with only non-numeric characters', () => {
    expect(formatCurrency('abc')).toBe('₦0');
  });

  it('formats large numbers with proper comma separation', () => {
    expect(formatCurrency('1000000')).toBe('₦1,000,000');
  });

  it('handles decimal numbers correctly', () => {
    expect(formatCurrency('1000000.99')).toBe('₦1,000,000.99');
  });

  it('handles numbers with existing commas', () => {
    expect(formatCurrency('1,000,000')).toBe('₦1,000,000');
  });

  it('handles zero value', () => {
    expect(formatCurrency('0')).toBe('₦0');
  });
});