<template>
  <div id="app">
    <Pages/>
    <router-view />
  </div>
</template>

<script>
import Pages from './Pages/pages'

export default {
  name: 'App',
  components: {
    Pages
  }
}
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

body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
