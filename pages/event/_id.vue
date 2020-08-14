<template>
  <v-layout class="flex-column">
    <v-img
      height="240"
      :src="mainImg"
      class="grey lighten-1"
    >
    </v-img>
    <v-container class="event__title">
      <h1 class="text-center">{{ title }}</h1>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="8" offset="2">
          <div v-if="content" v-html="content"></div>
          <div v-if="loading">
            <v-skeleton-loader type="heading" class="mb-4"></v-skeleton-loader>
            <v-skeleton-loader type="paragraph, paragraph, paragraph"></v-skeleton-loader>
          </div>
          <v-alert v-if="error" type="warning">データの取得に失敗しました</v-alert>
        </v-col>
      </v-row>
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
      mainImg: '',
      error: false,
    }
  },
  mounted () {
    const id = this.$route.params.id;
    console.log(id);
    axios
      .get(`/${id}.json`)
      .then(res => {
        const data = res.data;
        this.title = data.title;
        this.content = data.content;
        this.description = data.description;
        this.mainImg = data.mainImg;
      })
      .catch(error => {
        console.log(error);
        this.error = true;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        }
      ]
    }
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
