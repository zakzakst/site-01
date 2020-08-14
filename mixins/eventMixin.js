export default {
  mounted() {
    if(!this.eventList) {
      this.$store.dispatch('loadEventList');
    }
  },
  computed: {
    eventList() {
      return this.$store.getters['eventList'];
    },
    loading() {
      return this.$store.getters['loading'];
    },
    error() {
      return this.$store.getters['error'];
    }
  }
}
