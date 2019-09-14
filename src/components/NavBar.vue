<template>
    <v-app-bar app dark color="#414247">
      <v-toolbar-title class="headline text-uppercase" to="/">
        <v-icon>mdi-sword-cross</v-icon>
        <span class="font-weight-thin"> The</span>
        <span>Unfortunate</span>
        <span class="font-weight-thin">Few</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/characters">Characters</v-btn>
      <v-btn text to="/items">Items</v-btn>
      <v-btn text to="/story">Their Story</v-btn>
    </v-app-bar>
</template>

<script>


export default {
    name: 'NavBar',
    data: () => ({
    //
    })
};
</script>

<style scoped>

</style>