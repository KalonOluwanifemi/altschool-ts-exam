<template class="app">
  <div class="main-container">
    <div class="nav-bar">
      <router-link id="link" active-class="active" to="/">Home</router-link>    
      <router-link id="link" active-class="active" to="/about">About</router-link>
      <router-link id="link" active-class="active" to="/Colourspage">Colours</router-link>
    </div>
  <div><router-view/></div>
  </div>
</template>

<script>
  // import counterApp from './components/CounterApp.vue'
  // export default {
  //   components: {counterApp}
  // }
</script>

<style>

.main-container { 
  text-align: center;
  color: #2c3e50;
  margin: 10px auto ;
  border: 1px solid rgb(241, 233, 233);
  width: 600px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  height: 100vh;
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 200px;
  background-color: beige;

}
.nav-bar{
  padding: 20px;
}
/* #nav a.router-link-exact-active */
.active{ 
  text-decoration: none;
  background-color: rgb(247, 168, 105);
  margin-left: 4px;
  /* rgb(250, 112, 0); */
}
#link{
  text-decoration: none;
  border-radius: 4px;
  padding: 5px 10px;
  margin-bottom: 100px;
  margin-top: 50px;
  color:#2c3e50;
  font-size: small;
}
@media (max-width: 480px) {
  .main-container{
    width: 400px;
    overflow: hidden;
    margin: 0 auto;
    padding: 0 auto;
  }
@media(min-width: 768px){
  .main-container{
    height: 1000px;
  }  
}
}
</style>
