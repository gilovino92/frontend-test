import currencyFormat from '@/filters/currencyFormat';

describe('currencyFormat filter', () => {
  it('It should format to Singaporean Currency', () => {
    const a = currencyFormat(200);
    expect(a).toEqual('S$ 200.00');
  });
});
