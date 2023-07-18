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
        <span class="material-icons" @click="updateComplete"> task_alt </span>
        <router-link :to="{ name: 'editProject', params: { id: project.id } }">
          <span class="material-icons">edit</span>
        </router-link>
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
    updateComplete() {
      let updateUrl = this.api;
      fetch(updateUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: !this.project.status,
        }),
      })
        .then(() => {
          this.$emit("status", this.project.id);
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
.material-icons {
  color: rgb(70, 65, 65);
}
</style>
