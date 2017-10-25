<template>
  <div id="app">
    <MyHeader></MyHeader>

    <div class="container-fluid">
      <router-view/>
    </div>

  </div>
</template>

<script>
import MyHeader from './components/Header.vue'
export default {
  name: 'app',
  components: {
    MyHeader
  }
}
</script>

<style>
</style>
