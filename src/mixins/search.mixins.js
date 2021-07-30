import { debounce } from '@/helpers/underscore';

export default {
  props: {
    searchURL: {
      type: String,
      default: ''
    },
    searchField: {
      type: String,
      default: ''
    },
    queryParams: {
      type: Object,
      default: () => ({})
    },
    placeholder: {
      type: String,
      default: 'Autocomplete Search Input'
    }
  },
  data() {
    return {
      loading: false,
      isFetched: false,
      searchString: '',
      items: [],
      searchAPI: null,
      model: null,
      isFocusing: false
    };
  },
  watch: {
    searchString(newVal) {
      this.isFetched = false;
      this.debounceSearch(newVal);
    }
  },
  methods: {
    debounceSearch: debounce(async function(val) {
      if (val) {
        this.loading = true;
        await this.remoteSearch(val);
        this.loading = false;
      } else {
      }
    }, 600),
    async remoteSearch(val) {}
  }
};
