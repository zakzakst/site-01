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
          <div v-if="contentLoading">
            <v-skeleton-loader type="heading" class="mb-4"></v-skeleton-loader>
            <v-skeleton-loader type="paragraph, paragraph, paragraph"></v-skeleton-loader>
          </div>
          <v-alert v-if="contentError" type="warning">データの取得に失敗しました</v-alert>
          <div class="text-center">
            <v-btn class="ma-2" :to="prevItem.link" v-if="prevItem">
              <v-icon left>mdi-chevron-left</v-icon>
              {{ prevItem.title }}
            </v-btn>
            <v-btn class="ma-2" :to="nextItem.link" v-if="nextItem">
              {{ nextItem.title }}
              <v-icon right>mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
import axios from 'axios'
import eventMixin from '~/mixins/eventMixin2';

export default {
  data() {
    return {
      title: '',
      content: '',
      mainImg: '',
      contentLoading: true,
      contentError: false,
      currentIndex: '',
      nextItem: null,
      prevItem: null,
    }
  },
  mixins: [
    eventMixin
  ],
  mounted () {
    const id = this.$route.params.id;
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
        this.contentError = true;
      })
      .finally(() => {
        this.contentLoading = false;
      });
  },
  watch: {
    eventList(value) {
      if(value.length) {
        const id = this.$route.params.id;
        const currentItem = value.find(item => {
          return item.link === id;
        });
        const currentIndex = value.indexOf(currentItem);
        this.currentIndex = currentIndex;
        this.nextItem = value[currentIndex + 1] || '';
        this.prevItem = value[currentIndex - 1] || '';
      }
    }
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
