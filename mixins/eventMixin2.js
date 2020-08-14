import axios from 'axios'
export default {
  data() {
    return {
      eventList: [],
      loading: true,
      error: false,
    }
  },
  mounted () {
    axios
      .get('/event-list.json')
      .then(res => {
        this.eventList = res.data;
      })
      .catch(error => {
        console.log(error);
        this.error = true;
      })
      .finally(() => {
        this.loading = false;
      });
  },
}
