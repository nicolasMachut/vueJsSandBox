<template>
  <div>
    <h1>Page 2</h1>
    <ul>
      <li><router-link to="/page2/child1">child 1</router-link></li>
      <li><router-link to="/page2/child2">child 2</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Page2'
  }
</script>

<style scoped>

</style>
