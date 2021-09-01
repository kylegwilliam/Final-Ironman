
<template>
<div>
<h1>Record your workout</h1>
<div class="heading">
  <h2>Add workout information:</h2>
  
</div>


<div class="add">
  <div class="form">
    <input v-model="name" placeholder="Username">
    <p>----</p>
    <input v-model="date" placeholder="Date:(MM/DD/YYYY)">
    <p>----</p>
    <input v-model="title" placeholder="Run, Bike, or Swim">
    <p>----</p>
    <input v-model="distance" placeholder="Distance:">
    <p>Please upload a picture of your workouts</p>
    <input type="file" name="photo" @change="fileChanged">
    <button @click="upload">Track your workout</button>
    <div class="upload" v-if="addItem">
      <h2>Workout Submitted!</h2>
      <p>Go look at "Past workouts" to see your workout</p>
    </div>
  </div>

</div>

</div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'Admin',

  data() {
  return {
    title: "",
    name: "",
    date: "",
    distance: "",
    file: null,
    addItem: null,
    items: [],
    findTitle: "",
    findItem: null,
  }
},

created() {
  this.getItems();
},

computed: {
  suggestions() {
    let items = this.items.filter(item => item.title.toLowerCase().startsWith(this.findTitle.toLowerCase()));
    return items.sort((a, b) => a.title > b.title);
  }
},


methods: {

  selectItem(item) {
  this.findTitle = "";
  this.findItem = item;
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

  fileChanged(event) {
    this.file = event.target.files[0]
  },

  async upload() {
  try {
    const formData = new FormData();
    formData.append('photo', this.file, this.file.name)
    let r1 = await axios.post('/api/photos', formData);
    let r2 = await axios.post('/api/items', {
      title: this.title,
      name: this.name,
      date: this.date,
      distance: this.distance,
      path: r1.data.path
    });
    this.addItem = r2.data;
  } catch (error) {
    console.log(error);
  }
},
async getItems() {
  try {
    let response = await axios.get("/api/items");
    this.items = response.data;
    return true;
  } catch (error) {
    console.log(error);
  }
},
}
}
</script>


<style scoped>

/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}


.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center
}

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}
</style>
