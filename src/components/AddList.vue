<template>
  <div class="add-list">
    <input
      v-if="isAddList"
      type="text"
      class="form-control"
      v-model="inputTitle"
      ref="inputTitle"
      @blur="restore"
      @keyup.enter="onSubmitTitle"
    />
    <a v-else href="" @click.prevent="onAddList">&plus; Add a list...</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAddList: false,
      inputTitle: "",
    };
  },
  methods: {
    onAddList() {
      this.isAddList = true;
      this.$nextTick(() => this.$refs.inputTitle.focus());
    },
    onSubmitTitle() {
      console.log("enter!!!");
    },
    restore() {
      this.isAddList = false;
      this.inputTitle = "";
    },
  },
};
</script>

<style>
.add-list {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 10px;
  color: #ddd;
  transition: all 0.3s;
}
.add-list a {
  color: #ddd;
  text-decoration: none;
}

.add-list:hover,
.add-list:focus {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>