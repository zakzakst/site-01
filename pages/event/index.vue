<template>
  <v-layout class="flex-column">
    <v-img
      height="240"
      src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
      class="grey lighten-1"
    >
    </v-img>
    <v-container class="event__title">
      <h1 class="text-center">イベント一覧</h1>
    </v-container>
    <v-container>
      <v-row v-if="displayList.length">
        <v-col v-for="(event, index) in displayList" :key="index" cols="3">
          <v-card :to="`event/${event.link}`" hover>
            <v-img class="white--text align-end" height="150px" :src="event.img"></v-img>
            <v-card-subtitle>{{ event.title }}</v-card-subtitle>
            <v-card-text>{{ event.text }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-if="loading">
        <v-col v-for="n in 8" :key="n" cols="3">
          <v-skeleton-loader type="image, card-heading, list-item-three-line"></v-skeleton-loader>
        </v-col>
      </v-row>
      <v-alert v-if="error" type="warning">データの取得に失敗しました</v-alert>
    </v-container>
    <v-container>
      <div class="text-center">
        <v-pagination
          v-model="listIndex"
          :length="listLength"
          :total-visible="5"
          @input="changeDisplayEvent"
        ></v-pagination>
      </div>
    </v-container>
  </v-layout>
</template>

<script>
import eventMixin from '~/mixins/eventMixin2';

export default {
  data() {
    return {
      listIndex: 1,
      listLength: 0,
      displayList: [],
      displayNum: 8,
    }
  },
  mixins: [
    eventMixin
  ],
  methods: {
    changeDisplayEvent() {
      const startIndex = this.displayNum * (this.listIndex - 1);
      const endIndex = startIndex + this.displayNum;
      this.displayList = this.eventList.slice(startIndex, endIndex);
    },
    setListLength() {
      this.listLength = Math.ceil(this.eventList.length / this.displayNum);
    }
  },
  watch: {
    eventList(value) {
      if(value.length) {
        this.setListLength();
        this.changeDisplayEvent();
      }
    }
  },
  head() {
    return {
      title: 'イベント一覧',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'イベント一覧のページ概要が入ります。イベント一覧のページ概要が入ります。イベント一覧のページ概要が入ります。'
        }
      ]
    }
  },
  transition: 'default'
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
