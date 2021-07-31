import actions from '@/store/app/actions';
const store = {
  commit: jest.fn()
};
describe('Actions app store', () => {
  it('toggleLoading', () => {
    const spy = jest.spyOn(store, 'commit');
    actions.toggleLoading(store, true);
    expect(spy).toBeCalledTimes(2);
  });
  it('toggleOverlay', () => {
    const spy = jest.spyOn(store, 'commit');
    actions.toggleOverlay(store, true);
    expect(spy).toBeCalledWith('setValue', { key: 'showOverlay', value: true });
  });

  it('toggleMessage', () => {
    const spy = jest.spyOn(store, 'commit');
    actions.toggleMessage(store, true);
    expect(spy).toBeCalledWith('setValue', { key: 'message', value: true });
  });
});
