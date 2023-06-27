<template>
  <h1>Add New Project</h1>
  <form @submit.prevent="createProjcet">
    <label>Project Title</label>
    <input type="text" v-model="title" />
    <label>Project Description</label>
    <input type="text" v-model="description" />
    <button>Create New Project</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: this.title,
      description: this.description,
    };
  },
  methods: {
    createProjcet() {
      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          title: this.title,
          description: this.description,
          status: false,
        }),
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
form {
  max-width: 600px;
  margin: 50px auto;
  background: white;
}
label {
  margin-top: 10px;
  display: block;
  font-size: 20px;
  font-weight: bold;
}
input {
  width: 100%;
  margin: 10px 0px;
  height: 30px;
  border: none;
  border-bottom: 1px solid silver;
}
button {
  display: block;
  margin: 10px auto;
  background: #551a8b;
  border: 1px solid #ffcc00;
  padding: 10px;
  font-weight: bold;
  color: white;
  cursor: pointer;
}
</style>
