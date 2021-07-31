import actions from '@/store/transactions/actions';
import { api } from '@/httpClient/axios';
const store = {
  commit: jest.fn(),
  dispatch: jest.fn(),
  rootState: {
    user: {
      profile: {
        id: 1
      }
    }
  }
};
describe('Actions loan store', () => {
  it('createTransaction', async () => {
    const spy = jest.spyOn(api, 'post');
    spy.mockResolvedValue({ status: 201, data: true });
    await actions.createTransaction(store, { data: 'sample' });
    expect(spy).toBeCalledWith('transactions', { data: 'sample' });
  });

  it('getTransactions', async () => {
    const spy = jest.spyOn(api, 'get');
    spy.mockResolvedValue({
      status: 200,
      data: [{ createdAt: 1 }, { createdAt: 2 }]
    });
    await actions.getTransactions(store);
    expect(spy).toBeCalledWith('transactions', {
      params: {
        ownerID: 1
      }
    });
  });
});
