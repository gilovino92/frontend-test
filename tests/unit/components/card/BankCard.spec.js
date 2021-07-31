import { factory } from 'mocks/factory';
import component from '@/components/card/BankCard.vue';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter();
const props = {
  component,
  propsData: {
    card: {
      name: 'Mark Henry',
      number: '1234 5678 9100 2020',
      date: 'Thru: 12/20',
      cvv: '***'
    }
  }
};
describe('BankCard.vue', () => {
  let wrapper;

  beforeEach(async () => {
    mock.onGet('').reply(200, {});
    wrapper = await factory(props);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('loads component', async () => {
    expect(wrapper.vm).toBeDefined;
  });

  describe('Computed', () => {
    it('formatCardNumber', async () => {
      expect(wrapper.vm.formatCardNumber).toStrictEqual([
        '1234',
        '5678',
        '9100',
        '2020'
      ]);
    });
  });
});
