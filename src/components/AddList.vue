<template>
  <div class="add-list">
    <input
      v-if="isAddList"
      type="text"
      class="form-control"
      v-model="inputTitle"
      ref="inputTitle"
    />
    <a v-else href="" @click.prevent="onAddList">&plus; Add a list</a>
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
  },
};
</script>

<style >
</style>