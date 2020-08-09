<template>
  <v-footer class="text-center">
    <v-col cols="12">
      <v-btn v-for="(link, index) in links" :href="link.url" target="blank" :key="index" class="mx-4" icon>
        <v-icon size="24px">{{ link.icon }}</v-icon>
      </v-btn>
    </v-col>
    <v-col cols="12">
      <p class="mb-0">Copyright ©XXXXX. All Rights Reserved.</p>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      {icon: 'fab fa-facebook', url: ''},
      {icon: 'fab fa-twitter', url: ''},
      {icon: 'fab fa-line', url: ''}
    ]
  })
}
</script>
