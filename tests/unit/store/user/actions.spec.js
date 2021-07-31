import actions from '@/store/user/actions';
import { api } from '@/httpClient/axios';
const store = {
  commit: jest.fn()
};
describe('Actions user store', () => {
  it('getUserProfile', async () => {
    const spy = jest.spyOn(api, 'get');
    spy.mockResolvedValue({
      status: 200,
      data: {
        id: 1
      }
    });
    await actions.getUserProfile(store);
    expect(spy).toBeCalledWith('profile');
  });
});
