<template lang="pug">
  v-app
    v-app-bar(
      block="app-bar"
      app
    )
      v-spacer
      v-btn(
        elem="link"
        v-for="(page, index) in pages"
        :key="`page_${index}`"
        text
        nuxt
        :to="page.link"
      ) {{ page.title }}

    v-main
      nuxt

    v-footer(app)
</template>

<style lang="stylus" scoped>
  .app-bar
    &__link
      margin 5px
</style>

<script>
  export default {
    data() {
      return {
        pages: [
          { title: 'На главную', link: '/' },
          { title: 'Квартиры', link: '/flats' },
        ],
      };
    },
  }
</script>
