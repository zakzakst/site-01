export default {
  created() {
    if(!this.eventList) {
      this.$store.dispatch('loadEventList');
    }
  },
  computed: {
    eventList() {
      return this.$store.getters['eventList'];
    }
  }
}
