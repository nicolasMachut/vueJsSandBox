<template>
  <div>
    <b-alert variant="success" dismissible @dismissed="showDismissibleAlert=false" :show="showDismissibleAlert">Photo supprimée</b-alert>
    <h1>Toutes les photos</h1>
    <ul>
      <li v-for="(photo, index) in photos">
        <p>
          {{photo.title}}
          <button class="btn btn-danger" @click="deletePhoto(photo.id, index)">Supprimer</button><br/>
          <img :src="photo.url"/>
        </p>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      photos: [],
      showDismissibleAlert: false
    }
  },
  mounted: function () {
    this.getPhotos();
  },
  methods: {
    getPhotos: function () {
      this.$http.get('https://jsonplaceholder.typicode.com/photos').then(response => {
        this.photos = response.data;
      })
    },
    deletePhoto: function (id, index) {
      this.$http.delete('https://jsonplaceholder.typicode.com/photos/' + id).then(response => {
        if (response.status == 200) {
          this.photos.splice(index, 1);
          this.showDismissibleAlert = true;
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
