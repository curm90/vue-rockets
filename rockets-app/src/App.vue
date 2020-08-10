<template>
  <section>
    <nav-bar></nav-bar>
    <rockets class="container mt-3"></rockets>
  </section>
</template>

<script>
import Rockets from "./views/Rockets";
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    Rockets,
    NavBar
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
