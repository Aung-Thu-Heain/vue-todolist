<template>
  <div class="link">
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'addNew' }">Add New</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.link {
  margin-top: 50px;
  text-align: center;
}
a {
  padding: 10px;
  text-decoration: none;
  font-weight: bold;
  color: #c0c0c0;
}
a.router-link-active {
  color: #551a8b;
}
</style>
