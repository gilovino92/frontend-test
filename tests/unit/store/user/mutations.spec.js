import mutations from '@/store/user/mutations';
const state = {};
describe('Mutations user store', () => {
  it('setValue', () => {
    mutations.setValue(state, {
      key: 'a',
      value: 1
    });
    expect(state.a).toBe(1);
  });
  it('setValues', () => {
    mutations.setValues(state, [
      {
        key: 'a',
        value: 1
      },
      {
        key: 'b',
        value: 2
      }
    ]);
    expect(state.a).toBe(1);
    expect(state.b).toBe(2);
  });
});
