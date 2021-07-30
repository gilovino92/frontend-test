import { unFreeze, freeze } from '@/helpers/freezeBackground';
import storeMixins from '@/mixins/store.mixins';
import CustomIcon from '@/components/layouts/CustomIcon';
export default {
  mixins: [storeMixins],
  components: {
    CustomIcon
  },
  data() {
    return {};
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mdAndDown;
    }
  },
  methods: {
    freeze,
    unFreeze,
    toggleOverlay(value) {
      this.dispatch('app/toggleOverlay', value);
    },
    toggleLoading(value) {
      if (value) {
        this.freeze();
      } else {
        this.unFreeze();
      }
      this.dispatch('app/toggleLoading', value);
    },
    navigate(location) {
      // Do something before routing
      this.$router.push(
        location,
        function() {
          // Do something with the store after finish routing
        }.bind(this)
      );
    },
    back() {
      // Do something before goback
      this.$router.go(-1);
    }
  }
};
