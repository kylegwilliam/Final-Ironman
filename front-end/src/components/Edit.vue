<template>
  <div class="main">



  <div>


        <p>Name</p>
        <input v-model="item.name" label="Name" />
        <p>Activity</p>
        <input v-model="item.title" label="Activity">
        <p>Distance</p>
        <input v-model="item.distance" label="Distance">
        <p>Date</p>
        <input v-model="item.date" label="date">



    </div>

    <button type="button" @click="editItem()" class="pure-button">Save</button>


  </div>
</template>

<script>

import axios from 'axios';


export default {
  name: 'Workouts',
  data() {
  return {
    thing:"",
    item: {},
    title: "",
    targetID: "",
  }

},
created() {
  this.getItem();
  console.log(this.$route.params.id)
},

  methods: {
    saveWorkout() {

    },

    async getItem() {
      try {
        let response = await axios.get("/api/items/" + this.$route.params.id);
        this.item = response.data;
        console.log(response.data)
        return true;
      } catch (error) {
        console.log(error);
      }
    },



    async editItem() {
      try {
        console.log("hello how is it going?")
        await axios.put("/api/items/" + this.item._id, this.item);
      } catch (error) {
        console.log("Mississippi");
      }
    },

  }
}

</script>

<style lang="css" scoped>
</style>
