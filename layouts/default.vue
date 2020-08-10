<template>
  <v-app>
    <site-header />

    <v-main>
      <transition name="content" mode="out-in">
        <nuxt />
      </transition>
    </v-main>

    <site-footer />
  </v-app>
</template>

<script>
import SiteHeader from '@/components/common/Header.vue'
import SiteFooter from '@/components/common/Footer.vue'

export default {
  data () {
    return {
      drawer: false,
    }
  },
  components: {
    SiteHeader,
    SiteFooter,
  }
}
</script>

<style>
.content-enter-active, .content-leave-active {
  transition: opacity .5s;
}
.content-enter, .content-leave-to {
  opacity: 0;
}
</style>
