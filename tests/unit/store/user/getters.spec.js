import getters from '@/store/user/getters';
const state = {
  profile: {
    id: 1,
    lastname: 'Ho',
    firstname: 'Huy',
    mobile: {
      countryCode: '84',
      number: '968075162'
    },
    dateOfBirth: '1996-03-17',
    address: '123 ABC Street, D Ward, E District, City, VN'
  }
};
describe('Getters user store', () => {
  it('getUserMobileNumber', async () => {
    const result = getters.getUserMobileNumber(state);
    expect(result).toBe('+84 968075162');
  });
  it('getDateOfBirth', async () => {
    const result = getters.getDateOfBirth(state);
    expect(result).toBe('3/17/1996');
  });
});
