import { get } from '@/helpers/underscore';
export default {
  methods: {
    state(variable) {
      return get(this.$store.state, variable);
    },
    async dispatch(action, data) {
      await this.$store.dispatch(action, data);
    }
  }
};
