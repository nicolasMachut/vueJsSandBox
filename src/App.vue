<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <router-link class="navbar-brand" to="/">VueSandBox</router-link>
        </div>
        <ul class="nav navbar-nav">
          <li class="active"><router-link to="page1">Page1</router-link></li>
          <li><router-link to="page2">Page2</router-link></li>
          <li><router-link to="page3">Page3</router-link></li>
          <li><router-link to="page4">Page4</router-link></li>
        </ul>
      </div>
    </nav>

    <div class="container-fluid">
      <router-view/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
