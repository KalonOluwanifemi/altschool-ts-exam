<template>
  <div class="counter-container">
    <h2 class="counter-h">The counter</h2>
    <button @click="decrement" class="btn">Decrement</button>
    <p id="render">{{ count }}</p>
    <button class="btn" @click="increment">Increment</button>
    <div>
      <button class="btn" @click="reset">Reset</button>
    </div>
    <div class="double">
      <button class="btn-1" @click="doubleIncrement">++</button>
      <button class="btn-1" @click="doubleDecerment">--</button>
    </div>
  </div>
</template>

<script>
import useCounter from "../composables/counter";
export default {
  setup() {
    const {
      count,
      reset,
      increment,
      decrement,
      doubleDecerment,
      doubleIncrement,
    } = useCounter();
    return {
      count,
      reset,
      increment,
      decrement,
      doubleDecerment,
      doubleIncrement,
    };
  },
};
</script>
<style scoped>
.counter-container {
  margin-top: 50px;
}
.counter-h{
  width: fit-content;
  margin: 30px auto;
  
}

#render {
  width: 200px;
  height: 100px;
  border-radius: 20%;
  margin: 10px auto;
  background-color: grey;
  box-shadow: 2px 5px 10px 2px rgb(51, 50, 50);
  padding: 30px 40px;
  margin-top: 100px;
  font-size: 20px;
  color: white;
  text-align: center;
  display: inline;
}

.reset {
  margin-top: 40px;
  color: white;
  padding: 10px;
}

.btn {
  margin: 30px 10px;
  width: fit-content;
  padding: 10px 20px;
  border: 2px solid skyblue;
  border-radius: 5px;
  letter-spacing: 1px;
}

.btn:hover {
  background-color: skyblue;
  color: white;
}

.btn-1 {
  width: fit-content;
  padding: 10px 30px;
  border: 2px solid skyblue;
  border-radius: 2px;
  margin: 5px;
  font-weight: bold;
  letter-spacing: 4px;
  color: rgb(53, 42, 42);
}

.btn-1:hover {
  background-color: skyblue;
  color: white;
}
@media(max-width: 500px){
  .counter-container{
    overflow: hidden;
  }
}
</style>
