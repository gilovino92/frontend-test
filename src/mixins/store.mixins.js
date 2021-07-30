import { get } from '@/helpers/underscore';
export default {
  methods: {
    state(variable) {
      return get(this.$store.state, variable);
    },
    dispatch(action, data) {
      this.$store.dispatch(action, data);
    }
  }
};
