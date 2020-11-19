<template lang="pug">
  div(
    block="person-card"
  )
    h4(
      elem="name"
      mods="grid-area"
    ) {{ name }}
    h5(
      elem="type"
      mods="grid-area"
    ) {{ typeName }}
</template>

<style lang="stylus" src="~/assets/person-card/person-card.styl" scoped>
</style>

<script>
  export default {
    data() {
      return {
        relTypes: {
          'agent': 'Агент',
          'owner': 'Собственник',
        },
      };
    },
    props: {
      type: String,
      id: Number,
      attributes: Object,
    },
    computed: {
      typeName() { return this.relTypes[this.type]; },
      name() {
        const { first_name, middle_name, last_name } = this.attributes;
        return `${last_name} ${first_name} ${middle_name}`;
      },
    },
  }
</script>
