import { factory } from 'mocks/factory';
import component from '@/components/loan/Loans.vue';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter();
const props = {
  component
};
describe('Loans.vue', () => {
  let wrapper;

  beforeEach(async () => {
    mock.onGet('').reply(200, {});
    mock.onPost('').reply(201, {});
    wrapper = await factory(props);
    wrapper.vm.$store.commit('user/setValue', {
      key: 'profile',
      value: {
        id: 1,
        lastname: 'a',
        firstname: 'b',
        mobile: {
          countryCode: '',
          number: ''
        },
        dateOfBirth: '',
        address: ''
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('loads component', async () => {
    expect(wrapper.vm).toBeDefined;
  });

  describe('Methods', () => {
    it('repay', async () => {
      const loan = {
        terms: 43,
        amount: 376230.5,
        rate: 0.31,
        ownerID: 1,
        lastname: 'Ho',
        firstname: 'Huy',
        approved: true,
        createdAt: 1627673515591,
        id: 1
      };
      wrapper.vm.dispatch = jest.fn().mockResolvedValue({});
      await wrapper.vm.repay(loan);
      expect(wrapper.vm.dispatch.mock.calls[1][0]).toBe(
        'transactions/createTransaction'
      );
      expect(wrapper.vm.dispatch.mock.calls[1][1]).toStrictEqual({
        category: 1,
        details: {
          amount: 9915.861061627907,
          date: 'Jul 31, 2021',
          name: 'Ho Huy'
        },
        ownerID: 1,
        type: 'deposit'
      });
    });
  });
});
