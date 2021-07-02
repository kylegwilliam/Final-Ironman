<template>
<div class="main">
  <div class="menu">
    <p><a @click="toggleUpload"><i class="fas fa-image"></i></a></p>
    <h2>{{user.firstName}} {{user.lastName}} <a @click="logout"><i class="fas fa-sign-out-alt"></i></a></h2>
    <Uploader :show="show" @close="close" @uploadFinished="uploadFinished" />
  </div>
  <PostWorkout :photos="photos" />
  <p v-if="error">{{error}}</p>
</div>
</template>


<script>
import axios from 'axios';
import Uploader from '@/components/Uploader.vue';
import PostWorkout from '@/components/PostWorkout.vue';

export default {
  name: 'MyPhotos',
  data() {
    return {}
  },
  computed: {
    user() {
      return this.$root.$data.user;
    },
  },
  components: {
    Uploader,
    PostWorkout,

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
