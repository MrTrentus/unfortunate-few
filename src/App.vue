<template>
  <v-app>
    <v-app-bar app dark>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-thin">The</span>
        <span>Unfortunate</span>
        <span class="font-weight-thin">Few</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>
