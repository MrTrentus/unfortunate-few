<template>
  <v-app>
    <NavBar/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import NavBar from "./components/NavBar"

export default {
  name: 'App',
  components: {
    NavBar,
  },
  data: () => ({
    //
  })
};
</script>

<style>
  /* background-color: rgb(38, 39, 44);*/
  

</style>
