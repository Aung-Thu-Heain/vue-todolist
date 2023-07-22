<template>
  <div class="home">
    <h1>Home</h1>
    <FilterNav @fileterName="filtered = $event" :filterValue="filtered" />
    <div v-for="project in projectsFilter" :key="project.id">
      <singleProject
        :project="project"
        @delete="deleteUi"
        @status="changeStatus"
      />
    </div>
  </div>
</template>

<script>
import FilterNav from "../components/FilterNav";
import SingleProject from "@/components/SingleProject.vue";
// @ is an alias to /src

export default {
  components: {
    FilterNav,
    SingleProject,
  },
  name: "HomeView",
  data() {
    return {
      projects: [],
      filtered: "all",
    };
  },

  methods: {
    deleteUi(id) {
      this.projects = this.projects.filter((project) => {
        return project.id != id;
      });
    },
    changeStatus(id) {
      let updateProject = this.projects.find((project) => {
        return project.id === id;
      });
      updateProject.status = !updateProject.status;
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
  computed: {
    projectsFilter() {
      if (this.filtered === "pending") {
        return this.projects.filter((p) => {
          return p.status === false;
        });
      }
      if (this.filtered === "complete") {
        return this.projects.filter((p) => {
          return p.status === true;
        });
      }
      return this.projects;
    },
  },
};
</script>
