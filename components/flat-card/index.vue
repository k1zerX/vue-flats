<template lang="pug">
  div(
    block="flat-card"
  )
    div(
      elem="content"
    )
      h2(
        elem="title"
      ) {{ title }}
      h3(
        elem="address"
      ) {{ address }}
      div(
        elem="attr-list"
      )
        div(
          elem="attr-list-row"
        )
          div(
            elem="attr-list-column"
          )
            div(
              elem="attr-list-key"
              v-for="(attrRow, index) in attrList"
              :key="`key-${index}`"
            )
              h6 {{ attrRow.key }}
          div(
            elem="attr-list-column"
          )
            div(
              elem="attr-list-val"
              v-for="(attrRow, index) in attrList"
              :key="`val-${index}`"
            )
              h6 {{ attrRow.val }}
      person-card(
        elem="relative"
        mix="block:person-card mods:[rounded outlined]"
        v-bind="rel"
      )
    like-btn(
      elem="like-btn"
      v-model="val"
      v-on:click="setLike"
    )
</template>

<style lang="stylus" src="~/assets/flat-card/flat-card.styl" scoped>
</style>

<script>
  export default {
    props: {
      type: String,
      id: Number,
      attributes: Object,
      relationships: Object,
    },
    data() {
      return {
        val: this.$store.state.likes[this.id],
      };
    },
    computed: {
      title() { return this.attr.title; },
      rel() { return this.relationships; },
      attr() { return this.attributes; },
      rooms() { return this.attr.rooms; },
      address() {
        const { city, street, house, room } = this.attr.address;
        return `г. ${city}, ул. ${street}, д. ${house}, кв. ${room}`;
      },
      area() {
        const { area, unit } = this.attr;
        return `${area}${unit}`;
      },
      attrList() {
        return [
          {
            key: 'комнат:',
            val: this.rooms,
          },
          {
            key: 'площадь:',
            val: this.area,
          },
        ];
      },
    },
    methods: {
      setLike() {
        const { $store, id, val } = this;
        $store.commit('SET_LIKE', { id, val });
      }
    },
  }
</script>
