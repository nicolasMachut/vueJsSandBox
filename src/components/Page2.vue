<template>
  <div>
    <h1>Page 2</h1>
    <button class="btn btn-default" @click="$store.commit('INCREMENT_TEST')"> INCREMENT STORE VALUE</button>
    <ul>
      <li><router-link to="/page2/child1">child 1</router-link></li>
      <li><router-link to="/page2/child2">child 2</router-link></li>
    </ul>
    <transition name="bounce">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Page2'
  }
</script>

<style scoped>
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
