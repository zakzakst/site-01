<template>
  <div class="header__wrapper">
    <v-app-bar :elevation="4" class="header rounded-pill">
      <v-toolbar-title>LOGO</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-for="(link, index) in navLinks" :key="index" text :to="link.to">{{ link.label }}</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        {
          to: '/',
          label: 'トップ',
        },
        {
          to: '/event',
          label: 'イベント',
        },
      ]
    }
  }
}
</script>

<style>
.header__wrapper {
  position: fixed;
  max-width: 1185px;
  margin: 12px auto 0;
  padding: 0 12px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
.header {
  padding-left: 24px;
  padding-right: 24px;
}
</style>
