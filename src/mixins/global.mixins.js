import { unFreeze, freeze } from '@/helpers/common';
import storeMixins from '@/mixins/store.mixins';
import CustomIcon from '@/components/layouts/CustomIcon';
export default {
  mixins: [storeMixins],
  components: {
    CustomIcon
  },
  data() {
    return {
      isPortableDevice: false
    };
  },
  computed: {},
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
    onResize() {
      this.isPortableDevice = window.innerWidth < 1264;
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize, { passive: true });
  },
  beforeDestroy() {
    if (typeof window === 'undefined') return;

    window.removeEventListener('resize', this.onResize, { passive: true });
  }
};
