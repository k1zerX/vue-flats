<template lang="pug">
  div(
    block="page"
  )
    h1(
      elem="title"
    ) Квартиры
    v-progress-circular(
      elem="loader"
      mix="block:loader"
      v-if="$fetchState.pending"
      indeterminate
      size="150"
      width="10"
    )
    div(
      elem="content"
      v-else
    )
      flat-card(
        elem="flat-card"
        mix="block:flat-card mods:[type:raised rounded]"
        v-for="(flat, index) in flats"
        :key="index"
        v-bind="flat"
      )
      flat-card(
        elem="flat-card"
        mix="block:flat-card mods:[type:raised rounded]"
        v-for="(flat, index) in flats"
        :key="index"
        v-bind="flat"
      )
      flat-card(
        elem="flat-card"
        mix="block:flat-card mods:[type:raised rounded]"
        v-for="(flat, index) in flats"
        :key="index"
        v-bind="flat"
      )
      flat-card(
        elem="flat-card"
        mix="block:flat-card mods:[type:raised rounded]"
        v-for="(flat, index) in flats"
        :key="index"
        v-bind="flat"
      )
      flat-card(
        elem="flat-card"
        mix="block:flat-card mods:[type:raised rounded]"
        v-for="(flat, index) in flats"
        :key="index"
        v-bind="flat"
      )
      flat-card(
        elem="flat-card"
        mix="block:flat-card mods:[type:raised rounded]"
        v-for="(flat, index) in flats"
        :key="index"
        v-bind="flat"
      )
</template>

<style lang="stylus">
  .page
    display grid
    justify-items center
    align-items center
    grid-template-areas \
      "title" \
      "content"
    grid-template-rows auto 1fr
    width 100%
    height 100%
    gap 20px
    padding @gap

    &__title
      grid-area title
    
    &__loader
      grid-area content

    &__content
      grid-area content
      display flex
      flex-flow row wrap
      justify-content center
      align-content center
      gap 25px
</style>

<script>
  export default {
    data() {
      return {
        flats: [],
      };
    },
    async fetch() {
      await this.$store.dispatch('UPDATE_FLATS');
      this.flats = this.$store.state.flats;
    },
  }
</script>
