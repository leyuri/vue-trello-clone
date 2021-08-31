<template>
  <div class="add-card">
    <form @submit.prevent="onSubmit">
      <input
        class="form-control"
        type="text"
        v-model="inputTitle"
        ref="inputText"
      />
      <button class="btn btn-success" type="submit" :disabled="invalidInput">
        Add Card
      </button>
      <a class="cancel-add-btn" href="" @click.prevent="$emit('close')"
        >&times;</a
      >
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["listId"],
  data() {
    return {
      inputTitle: "",
    };
  },
  computed: {
    invalidInput() {
      //   console.log("Test", !this.inputT itle.trim());
      return !this.inputTitle.trim();
    },
  },
  mounted() {
    this.$refs.inputText.focus();
    this.setupClickOutside(this.$el);
  },
  methods: {
    ...mapActions(["ADD_CARD"]),
    onSubmit() {
      if (this.invalidInput) return;
      const { inputTitle, listId } = this;
      const pos = this.newCardPos();
      this.ADD_CARD({ title: inputTitle, listId, pos }).finally(
        () => (this.inputTitle = "")
      );
    },
    newCardPos() {
      console.log("tetsttttt", this.$store.state.board.lists[0]);
      const cardList = this.$store.state.board.lists.filter(
        (l) => l.id === this.listId
      )[0];
      if (!cardList) return 65535;
      const { cards } = cardList;
      console.log("cards.length", cards.length);
      if (!cards.length) return 65535;
      return cards[cards.length - 1].pos * 2;
    },
    setupClickOutside(el) {
      document.querySelector("body").addEventListener("click", (e) => {
        console.log("test!!!!!!");
        if (el.contains(e.target)) return;
        this.$emit("close");
      });
    },
  },
};
</script>

<style>
.add-card {
  padding: 10px;
  display: block;
  position: relative;
}
.add-card .cancel-add-btn {
  display: inline-block;
  margin-left: 10px;
  vertical-align: middle;
  text-decoration: none;
  color: #888;
  font-size: 24px;
}
.add-card .cancel-add-btn:hover,
.add-card .cancel-add-btn:focus {
  color: #666;
}
</style>