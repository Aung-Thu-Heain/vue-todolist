<template>
  <h1>Add New Project</h1>
  <form>
    <label>Project Name</label>
    <input type="text" />
    <label>Project Description</label>
    <input type="text" />
    <button>Create New Project</button>
  </form>
</template>

<script>
export default {};
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
