<template>
  <div class="home">
    <h1>To Do List</h1>
    <div v-for="project in projects" :key="project.id">
      <singleProject :project="project" @delete="deleteUi" />
    </div>
  </div>
</template>

<script>
import SingleProject from "@/components/SingleProject.vue";
// @ is an alias to /src

export default {
  components: { SingleProject },
  name: "HomeView",
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    deleteUi(id) {
      this.projects = this.projects.filter((project) => {
        return project.id != id;
      });
    },
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.projects = data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
