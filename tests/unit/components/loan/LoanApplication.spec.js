import { factory } from 'mocks/factory';
import component from '@/components/loan/LoanApplication.vue';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter();
const props = {
  component
};
const application = {
  terms: 12,
  amount: 120,
  rate: 1
};
describe('LoanApplication.vue', () => {
  let wrapper;

  beforeEach(async () => {
    mock.onGet('').reply(200, {});
    mock.onPost('').reply(201, {});
    wrapper = await factory(props);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('loads component', async () => {
    expect(wrapper.vm).toBeDefined;
  });
  describe('Computed', () => {
    it('interest', async () => {
      wrapper.vm.application = application;
      expect(wrapper.vm.interest).toEqual(14.4);
    });
    it('weeklyPayment', async () => {
      wrapper.vm.application = application;
      expect(wrapper.vm.weeklyPayment).toEqual(11.200000000000001);
    });
    it('totalLoan', async () => {
      wrapper.vm.application = application;
      expect(wrapper.vm.totalLoan).toEqual(134.4);
    });
  });

  describe('Methods', () => {
    it('amountSliderHandler', async () => {
      wrapper.vm.application = application;
      wrapper.vm.amountSliderHandler();
      expect(wrapper.vm.inputAmount).toEqual('S$ 120.00');
    });
    it('amountInputHandler', async () => {
      wrapper.vm.inputAmount = 'S$ 120.00';
      wrapper.vm.amountInputHandler();
      expect(wrapper.vm.application.amount).toEqual(120.0);
    });
    it('amountInputHandler with adadada', async () => {
      wrapper.vm.inputAmount = 'adadada';
      wrapper.vm.amountInputHandler();
      expect(wrapper.vm.application.amount).toEqual(0);
    });
    it('enterHandler', async () => {
      let inputEl = document.createElement('input');
      document.body.appendChild(inputEl);
      inputEl.focus();
      const spy = jest.spyOn(document.activeElement, 'blur');
      wrapper.vm.enterHandler();
      expect(spy).toBeCalled();
    });
    it('submit', async () => {
      wrapper.vm.application = application;
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
      const spy = jest.spyOn(wrapper.vm, 'dispatch');
      spy.mockResolvedValue({});
      await wrapper.vm.submit();
      expect(spy).toBeCalledWith('loan/createLoan', {
        terms: 12,
        amount: 120,
        rate: 1,
        ownerID: 1,
        lastname: 'a',
        firstname: 'b',
        approved: false
      });
    });
    it('reset', async () => {
      wrapper.vm.application = application;
      wrapper.vm.reset();
      expect(wrapper.vm.application).toStrictEqual({
        terms: 0,
        amount: 0,
        rate: 0
      });
    });
  });
});
