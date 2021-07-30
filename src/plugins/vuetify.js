import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import CustomIcon from '@/components/layouts/CustomIcon';
Vue.use(Vuetify);

const MY_ICONS = [
  'home',
  'card',
  'credit',
  'payments',
  'account',
  'DeactivateCard',
  'FreezeCard',
  'GPay',
  'ReplaceCard',
  'SetSpendLimit',
  'BusinessAndFinance',
  'Megaphone',
  'Flights',
  'FileStorage',
  'CardDetails',
  'Transaction',
  'MobileLogo'
].reduce((list, iconName) => {
  list[iconName] = {
    component: CustomIcon,
    props: {
      name: iconName
    }
  };
  return list;
}, {});
export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#01D167',
        secondary: '#0C365A'
      }
    }
  },
  icons: {
    iconfont: 'fa', // default
    values: MY_ICONS
  }
});
