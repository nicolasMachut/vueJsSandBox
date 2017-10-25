<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/"><span @click="toggle()">VueSandBox</span></router-link>
      </div>
      <ul class="nav navbar-nav">
        <li @click="toggle()" :class="{active : actualPage === 'Album'}"><router-link to="/album">Album</router-link></li>
        <li @click="toggle()" :class="{active : actualPage === 'Page2'}"><router-link to="/page2">Page2</router-link></li>
        <li @click="toggle()" :class="{active : actualPage === 'Page3'}"><router-link to="/page3">Page3</router-link></li>
        <li @click="toggle()" :class="{active : actualPage === 'Page4'}"><router-link to="/page4">Page4</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
    export default {
      name: 'MyHeader',
      data () {
        return {
          actualPage: ''
        }
      },
      mounted: function () {
        this.toggle();
      },
      methods: {
        toggle: function () {
          this.actualPage = this.$router.history.current.name;
        }
      },
    }
</script>

<style scoped>

</style>
