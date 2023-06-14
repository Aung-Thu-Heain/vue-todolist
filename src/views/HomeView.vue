<template>
  <div class="home">
    <h1>Home</h1>
    <div v-for="project in projects" :key="project.id">
      <singleProject :project="project" />
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
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.projects = data;
      })
      .catch(() => {});
  },
};
</script>
