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
</style>
