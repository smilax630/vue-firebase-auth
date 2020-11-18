<template>
  <div>
    <h1>My Page!!</h1>
    <v-btn color="error" elevation="2" large @click="signOut">Sing out Now!!</v-btn>
  </div>
</template>

<script lan="ts">
import Vue from 'vue';
import firebase from 'firebase';

export default Vue.extend({
  name: 'MyPageScreen',
  components: {
  },
  methods: {
    async signOut() {
      try {
        await firebase.auth().signOut();
        this.$router.push({ name: 'TopScreen' });
        alert('Logout!');
      } catch (e) {
        alert(`error:${e}`);
      }
    },
  },
});
</script>
