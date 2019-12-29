<template>
  <div class="filter">
    <span>Filter TODOS</span>
    <select @change="filterTodo($event)">
        <option value="5">5</option>
      <option selected value="10">10</option>
      <option value="50">20</option>
      <option value="200">200</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterTodos",
  methods: mapActions(["filterTodo"])
};
</script>

<style>
.filter {
  background: linear-gradient(to right, #8767f5 0%, #40e5ce 100%);
  padding: 0.5vw 2vw;
  margin: 2vw;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
}
select {
  color: #000;
  margin: 10px;
  padding: 10px;
}
</style>