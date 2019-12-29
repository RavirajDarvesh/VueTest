<template>
  <div class="AddTodo">
    <form @submit="onSubmit">
      <h2 class="heading">Add To List</h2>
      <input class="addInput" type="text" placeholder="Add Todo.." v-model="title" />
      <input class="add_button" type="submit" value="ADD" />
    </form>
    <FilterTodos />
  </div>
</template>

<script>
import FilterTodos from "./FilterTodos";
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  components: {
    FilterTodos
  },
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      if(this.title !== ''){
        e.preventDefault();
      this.addTodo(this.title);
      this.title = "";
      }
      else{
        alert("Text Required..!")
      }
    }
  }
};
</script>

<style scoped>
.AddTodo {
  width: 50vw;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2vw;
}
form {
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, #8767f5 0%, #40e5ce 100%);
  padding: 2vw;
  /* min-height: 50vh; */
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}

.addInput {
  margin: 10px 0;
  padding: 15px 10px;
  width: 30vw;
  font-size: 18px;
  color: #836FF3;
  border-radius: 3px;
  outline: none;
  border: 0;
}
.add_button {
  margin: 10px 0;
  padding: 15px 10px;
  width: 30vw;
  font-size: 18px;
  color: #836FF3;
  /* background: linear-gradient(to right, #8767f5 0%, #40e5ce 100%); */
  text-transform: uppercase;
  border-radius: 3px;
  outline: none;
  outline-color: transparent;
  border: 0;
  background: #fff;
  cursor: pointer;
}
.add_button:hover,.add_button:focus,.add_button:active {
  box-shadow: 0px 10px 20px 0px rgba(92, 203, 92, 0.35);
  outline: none;
  outline-color: transparent;
}

.heading{
   font-size: 3vmax;
   color: #fff;
}

@media only screen and (max-width: 800px) {
  .AddTodo {
  width: 100vw;
  min-height: unset;
  }
  .addInput, .add_button{
    width: 80vw;
  }
  form{
    padding: 5vw;
  }
}

</style>