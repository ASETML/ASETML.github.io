const app = Vue.createApp({
  data() {
    return {
      items: [],
      item: "",
    };
  },
  methods: {
    addToList() {
		if (this.item != "") {
			this.items.push(this.item);
			this.item = "";
		}
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
  },
});
