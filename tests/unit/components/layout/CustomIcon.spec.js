import { factory } from 'mocks/factory';
import component from '@/components/layouts/CustomIcon.vue';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter();
const props = {
  component
};
describe('CustomIcon.vue', () => {
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
});
