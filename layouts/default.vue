<template>
  <v-app>
    <site-header />

    <v-main>
      <nuxt />
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
.default-enter-active, .default-leave-active {
  transition: opacity .3s;
}
.default-enter, .default-leave-to {
  opacity: 0;
}

.slide-left-enter-active, .slide-left-leave-active,
.slide-right-enter-active, .slide-right-leave-active {
  transition: opacity .3s, transform .3s;
}
.slide-left-enter, .slide-left-leave-to,
.slide-right-enter, .slide-right-leave-to {
  opacity: 0;
}
.slide-left-enter,
.slide-right-leave-to {
  transform: translateX(30px);
}
.slide-left-leave-to,
.slide-right-enter {
  transform: translateX(-30px);
}
</style>
