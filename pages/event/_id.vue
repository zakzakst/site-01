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
            <v-btn class="ma-2" :to="`/event/${prevItem.link}/?item=prev`" v-if="prevItem">
              <v-icon left>mdi-chevron-left</v-icon>
              {{ prevItem.title }}
            </v-btn>
            <v-btn class="ma-2" :to="`/event/${nextItem.link}/?item=next`" v-if="nextItem">
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
import eventMixin from '~/mixins/eventMixin';

export default {
  data() {
    return {
      title: '',
      content: '',
      description: '',
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
  methods: {
    setItemLinks() {
      if(this.eventList) {
        const id = this.$route.params.id;
        const currentItem = this.eventList.find(item => {
          return item.link === id;
        });
        const currentIndex = this.eventList.indexOf(currentItem);
        this.currentIndex = currentIndex;
        this.nextItem = this.eventList[currentIndex + 1] || null;
        this.prevItem = this.eventList[currentIndex - 1] || null;
      }
    }
  },
  created() {
    this.setItemLinks();
  },
  mounted () {
    const id = this.$route.params.id;
    axios
      .get(`${process.env.SITE_ROOT_PATH}event-data/${id}.json`)
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
    eventList() {
      this.setItemLinks();
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description
        },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description },
        { property: 'og:url', content: process.env.SITE_DOMAIN + process.env.SITE_ROOT_PATH + 'event/' + this.$route.params.id + '/' },
      ],
      link: [
        { rel: 'canonical', href: process.env.SITE_DOMAIN + process.env.SITE_ROOT_PATH + 'event/' + this.$route.params.id + '/' },
      ]
    }
  },
  transition(to, from) {
    // 初期読み込みの場合は通常のトランジション
    if(!from) {
      return 'default';
    }

    const itemQuery = to.query.item;
    if(itemQuery === 'prev') {
      return 'slide-right';
    } else if(itemQuery === 'next') {
      return 'slide-left';
    } else {
      return 'default';
    }
  },
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
