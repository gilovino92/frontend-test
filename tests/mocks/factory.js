import { shallowMount, createLocalVue } from '@vue/test-utils';
import { cloneDeep } from 'lodash';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import storeObject from './store';
import i18n from './i18Mock';
import globalStubs from 'mocks/stubs';
import currencyFormat from '@/filters/currencyFormat';

const localVue = createLocalVue();
localVue.filter('currency', currencyFormat);

const vuetify = new Vuetify();

export const factory = async ({
  component,
  data = {},
  propsData = {},
  mixins = [],
  attrs = {},
  mocks = {},
  storeData,
  flush = true,
  attachTo = null,
  stubs = {}
}) => {
  const storeClone = cloneDeep(storeObject);
  const store = new Vuex.Store(storeData || storeClone);

  const comp = {
    template: '<div />',
    data() {
      return data;
    },
    mixins
  };

  const props = {
    localVue,
    store,
    i18n,
    vuetify,
    propsData,
    stubs,
    attrs,
    attachTo,
    stubs: {
      ...globalStubs,
      ...stubs
    },
    mocks: {
      $route: {
        path: ''
      },
      $router: {
        push: jest.fn(),
        replace: jest.fn()
      },
      ...mocks
    }
  };
  const wrapper = shallowMount(component || comp, props);
  return wrapper;
};
