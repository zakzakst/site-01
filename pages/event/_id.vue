<template>
  <v-layout class="flex-column">
    <v-img
      height="240"
      src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
      class="grey lighten-1"
    >
    </v-img>
    <v-container class="event__title">
      <h1>{{ title }}</h1>
    </v-container>
    <v-container>
      <div v-if="content" v-html="content"></div>
      <div v-else>
        <v-skeleton-loader type="heading" class="mb-2"></v-skeleton-loader>
        <v-skeleton-loader type="paragraph, paragraph, paragraph"></v-skeleton-loader>
      </div>
      <v-alert v-if="error" type="warning">データの取得に失敗しました</v-alert>
    </v-container>
  </v-layout>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      loading: true,
      title: '',
      content: '',
      error: false,
    }
  },
  mounted () {
    const id = this.$route.params.id;
    console.log(id);
    axios
      .get(`/${id}.json`)
      .then(res => {
        console.log(res);
        this.title = res.data.title;
        this.content = res.data.content;
      })
      .catch(error => {
        console.log(error);
        this.error = true;
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
</script>

<style>
.event__title {
  position: absolute;
  top: 120px;
  left: 0;
  right: 0;
}
</style>
