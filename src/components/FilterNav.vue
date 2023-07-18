<template>
  <span @click="filterName('all')" :class="{ active: filterValue == 'all' }"
    >All</span
  >
  <span
    @click="filterName('pending')"
    :class="{ active: filterValue == 'pending' }"
    >Pending</span
  >
  <span
    @click="filterName('complete')"
    :class="{ active: filterValue == 'complete' }"
    >Complete</span
  >
</template>

<script>
export default {
  props: ["filterValue"],
  methods: {
    filterName(value) {
      this.$emit("fileterName", value);
    },
  },
};
</script>

<style>
span {
  padding: 20px;
}
.active {
  font-weight: bold;
}
</style>
