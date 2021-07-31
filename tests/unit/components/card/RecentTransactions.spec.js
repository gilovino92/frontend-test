import { factory } from 'mocks/factory';
import component from '@/components/card/RecentTransactions.vue';
import MockAdapter from 'axios-mock-adapter';
import { transactions } from '../../../mocks/data';

const mock = new MockAdapter();
const props = {
  component
};
describe('RecentTransactions.vue', () => {
  let wrapper;

  beforeEach(async () => {
    mock.onGet(/transactions/g).reply(200, { data: transactions });
    wrapper = await factory(props);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('loads component', async () => {
    expect(wrapper.vm).toBeDefined;
  });
});
