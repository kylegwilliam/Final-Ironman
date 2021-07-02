<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Past Workouts</router-link> |
      <router-link to="/info">Who are we?</router-link> |
      <router-link to="/Dashboard">Dashboard</router-link> |
      <router-link v-if="this.$root.$data.user != null" to="/tracker">Tracker</router-link> |
      <button v-on:click="logout" v-if="this.$root.$data.user != null" type="button" name="button">Logout</button>
    </div>
    <router-view/>
    <div>
      <footer>
        <p>I spent 20 hours on this project</p>

      </footer>

    </div>
  </div>


</template>

<script>

import axios from "axios";

export default {


  methods: {
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
  }
}


</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
