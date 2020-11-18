<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      /*ここから新規追加*/
      <router-link to="/signup">Sing up</router-link> |
      <router-link to="/signin">Sing in</router-link> |
      <router-link to="/signout">Sing out</router-link> |
      <router-link to="/mypage">Mypage</router-link> |
      /*ここまで*/
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TopScreen',
});
</script>
