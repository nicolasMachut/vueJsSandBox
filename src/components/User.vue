<template>
  <div>
    <h1>User</h1>
    <pre>{{user}}</pre>
    <span v-if="!update">{{user.name}}</span>
    <input v-else type="text" v-model="user.name"/>

    <button v-if="update" @click="update = !update">Valider</button>
    <button v-else @click="update = !update">Modifier</button>
  </div>
</template>

<script>
  export default {
    name: 'User',
    data() {
      return {
        user: Object,
        update: false,
        show: true
      }
    },
    mounted: function () {
      this.$http.get('https://jsonplaceholder.typicode.com/users/' + this.$route.params.id).then(response => {
        this.user = response.data;
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
