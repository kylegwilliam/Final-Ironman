<template>
<div class="dashboard">
  <MyPhotos v-if="this.$root.$data.user != null" />
  <Login v-else />
    <p>DASHBOARD.VUE</p>
</div>
</template>

<script>
import MyPhotos from '@/components/MyPhotos.vue';
import Login from '@/components/Login.vue';

//!import ImageGallery from '@/compnents/ImageGallery.vue';

import axios from 'axios';
export default {
  name: 'dashboard',
  components: {
    MyPhotos,
    Login,
  },
  async created() {
    try {
      let response = await axios.get('/api/users');
      this.$root.$data.user = response.data.user;
    } catch (error) {
      this.$root.$data.user = null;
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  }
}
</script>

<style scoped>
.dashboard {
  padding-top: 10px;
}
</style>
