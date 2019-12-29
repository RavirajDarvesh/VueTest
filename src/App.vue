<template>
  <div id="app">
    <AddTodo />
    <Todos />
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import AddTodo from "./components/AddTodo.vue";

export default {
  name: "app",
  components: {
    Todos,
    AddTodo
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Raleway", sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  min-height: 90vh;
  color: black;
  background: white;
}

@media only screen and (max-width: 800px) {
  #app {
    flex-direction: column;
    min-height: unset;
    align-items: center;
  }
}
</style>
