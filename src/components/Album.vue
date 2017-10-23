<template>
  <div>
    <h1>Les albums</h1>

    <table class="table table-hover table-condensed table-striped">
      <th>Id</th>
      <th>Titre</th>
      <th>User id</th>
      <tr v-for="album in albums">
        <td>{{album.id}}</td>
        <td>{{album.title}}</td>
        <td><router-link :to="{path: '/user/' + album.userId}">{{album.userId}}</router-link></td>
      </tr>
    </table>

  </div>
</template>

<script>
  export default {
    name: 'Album',
    data () {
      return {
        albums: []
      }
    },
    mounted: function () {
      this.getAlbums();
    },
    methods: {
      getAlbums: function () {
        this.$http.get('https://jsonplaceholder.typicode.com/albums').then(response => {
          this.albums = response.data;
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
