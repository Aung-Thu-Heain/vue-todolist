<template>
  <div class="card" :class="{ complete: project.status }">
    <div class="flex">
      <div>
        <h4 class="title" @click="detail = !detail">{{ project.title }}</h4>
      </div>
      <div>
        <span class="material-icons" @click="deleteProject"
          >delete_forever</span
        >
        <span class="material-icons"> task_alt </span>
        <span class="material-icons">edit</span>
      </div>
    </div>

    <p v-if="detail">{{ project.description }}</p>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      detail: false,
      api: "http://localhost:3000/projects" + "/" + this.project.id,
    };
  },
  methods: {
    deleteProject() {
      fetch(this.api, { method: "delete" })
        .then(() => {
          this.$emit("delete", this.project.id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.card {
  padding: 10px;
  background: silver;
  margin: 5px;
  border-radius: 10px;
  border-left: 5px solid crimson;
}
.title {
  color: indigo;
  cursor: pointer;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
span {
  margin-left: 5px;
  cursor: pointer;
}
span:hover {
  color: blueviolet;
}
.complete {
  border-left: 5px solid green;
}
</style>
