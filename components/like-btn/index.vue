<template lang="pug">
  span.mdi.mdi-heart(
    block="like-btn"
    :class="classes"
    v-ripple="true"
    @click="handleInput"
  )
</template>

<style lang="stylus">
  .like-btn
    font-size 25px
    width @font-size * 2
    height @width
    display flex
    justify-content center
    align-items center
    background #eee
    color #ccc

    &:hover
      cursor pointer

    &_liked
      background red
      color white
</style>

<script>
  export default {
    props: {
      liked: Boolean,
    },
    model: {
      prop: 'liked',
      event: 'click',
    },
    computed: {
      classes() {
        return this.liked ? 'like-btn_liked' : ''
      },
    },
    methods: {
      handleInput(val) {
        this.$emit('click', !this.liked);
      },
    },
  }
</script>
