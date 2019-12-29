<template>
  <div class="mytodos">
    <h2 class="heading">Let's DO IT</h2>
    <p>Double click once done.</p>
    <div class="todos">
      <div
        @dblclick="onDblClick(todo)"
        v-for="todo in allTodos"
        :key="todo.id"
        class="todo"
        v-bind:class="{'completed':todo.completed}"
      >
        <h3 class="title">{{todo.title}}</h3>
        <i
          @click="deleteTodo(todo.id)"
          v-bind:class="{'delete_icon_active':todo.completed}"
          class="fas fa-trash-alt delete_icon"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };
      this.updateTodo(updTodo);
    }
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  }
};
</script>

<style>
.mytodos {
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  min-height: 90vh;
  padding: 2vw;
  margin:2vw;
}

.todo {
  background: linear-gradient(to right, #40e5ce 0%, #8767f5 100%);
  padding: 20px;
  display: inline-flex;
  margin: 10px;
  cursor: pointer;
  border-radius: 3px;
  border: none;
  justify-content: space-between;
  align-items: center;
}

i {
  cursor: pointer;
  margin: 0 10px;
}

.completed {
  border: 1px solid #836ff3;
  color: #836ff3;
  background: #fff;
}
.heading {
  font-size: 3vmax;
  margin: 2rem 0.5rem 1rem 0.5rem;
}
p {
  margin: 0 0.5rem;
}
.delete_icon {
  display: none;
}
.delete_icon_active {
  display: inline-block;
}

@media only screen and (max-width: 800px) {
  .mytodos {
    width: unset;
    min-height: unset;
   
  }
}
</style>