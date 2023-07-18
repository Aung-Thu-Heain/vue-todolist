<template>
  <h1>Edit Project</h1>
  <form @submit.prevent="createProjcet">
    <label>Project Title</label>
    <input type="text" v-model="title" />
    <label>Project Description</label>
    <input type="text" v-model="description" />
    <button @click="updateProject">Update Project</button>
  </form>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      description: "",
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects/" + this.id)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        this.title = response.title;
        this.description = response.description;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    updateProject() {
      fetch("http://localhost:3000/projects/" + this.id, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: this.title,
          description: this.description,
        }),
      })
        .then(() => {
          return this.$router.push({ name: "home" });
        })
        .catch((er) => {
          console.log(er);
        });
    },
  },
};
</script>

<style></style>
