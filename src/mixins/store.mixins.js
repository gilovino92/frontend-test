import { get } from '@/helpers/underscore';
export default {
  methods: {
    async dispatch(action, data) {
      await this.$store.dispatch(action, data);
    }
  }
};
