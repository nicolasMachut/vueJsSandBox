<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/"><span @click="toggle()">VueSandBox</span></router-link>
      </div>
      <ul class="nav navbar-nav">
        <li><router-link to="/album">Album</router-link></li>
        <li><router-link to="/page2">Page2</router-link></li>
        <li><router-link to="/page3">Page3</router-link></li>
        <li><router-link to="/page4">Page4</router-link></li>
        <li>Store {{$store.state.test}}</li>
      </ul>
    </div>
  </nav>
</template>

<script>
    export default {
      name: 'MyHeader'
    }
</script>

<style scoped>
  .router-link-exact-active {
    color: red !important;
  }
</style>
