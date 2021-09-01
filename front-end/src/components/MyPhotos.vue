<template>
<div class="main">
    <div class="home">
      <section class="image-gallery">
        <div>
          <p> DAD THIS ISNT WORKING</p>
        </div>
        <div class="image" v-for="item in items" :key="item.id">
          <div v-if="item.name == user.username">

            <h2>{{user.username}} - {{item.title}}</h2>
            <img :src="item.path" />
            <h2>{{item.distance}}</h2>
            <button type="button" @click="deleteItem(item)" class="pure-button">Delete</button>
            <router-link :to="{name: 'Edit', params: {id: item._id}}">Edit</router-link>

          </div>
        </div>
      </section>
    </div>

  <image-gallery :photos="photos" />
  <p v-if="error">{{error}}</p>
</div>
</template>

<script>
import axios from 'axios';
//will need all of this in edit.vue
//just need an item to hold all of the informaion
export default {
  name: 'MyPhotos',
  data() {
  return {
    show: false,
    photos: [],
    error: '',
    items: [],
  }
},
created() {
  this.getItems();
},
  computed: {
    user() {
      return this.$root.$data.user;
    },
  },
  methods: {
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
    //fetch example
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteItem(item) {
      try {
        await axios.delete("/api/items/" + item._id);
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editItem(item) {
      try {
        await axios.put("/api/items/" + item._id, {
          title: this.findItem.title,
        });
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    created() {
    this.getPhotos();
  },
  async getPhotos() {
  try {
    this.response = await axios.get("/api/photos");
    this.photos = this.response.data;
  } catch (error) {
    this.error = error.response.data.message;
  }
},
close() {
  this.show = false;
},
toggleUpload() {
  this.show = true;
},
async uploadFinished() {
  this.show = false;
  this.getPhotos();
},
  }
}
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
}

.menu h2 {
  font-size: 14px;
}
</style>
