app.component("grocery-item", {
  props: ["item", "index"],
  template: /*html*/ `<div class="item"><p>{{item}}</p><p>&nbsp;- </p><p class="del" @click="removeItem">❌</p></div> `,
  methods: {
    removeItem() {
      this.$emit("remove-item", this.index);
    },
  },
});
