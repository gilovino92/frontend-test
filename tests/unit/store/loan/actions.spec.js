import actions from '@/store/loan/actions';
import { api } from '@/httpClient/axios';
const store = {
  commit: jest.fn(),
  dispatch: jest.fn().mockResolvedValue(),
  rootState: {
    user: {
      profile: {
        id: 1
      }
    }
  }
};
describe('Actions loan store', () => {
  it('createLoan', async () => {
    const spy = jest.spyOn(api, 'post');
    spy.mockResolvedValue({ status: 201, data: true });
    await actions.createLoan(store, { data: 'sample' });
    expect(spy).toBeCalledWith('loans', { data: 'sample' });
  });

  it('getLoans', async () => {
    const spy = jest.spyOn(api, 'get');
    spy.mockResolvedValue({
      status: 200,
      data: [{ createdAt: 1 }, { createdAt: 2 }]
    });
    await actions.getLoans(store);
    expect(spy).toBeCalledWith('loans', {
      params: {
        ownerID: 1
      }
    });
  });
});
