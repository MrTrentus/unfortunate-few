<template>
    <div>
        <h1 class="text-center display-4 white--text">404</h1>
        <v-row align="center" justify="center">
            <v-img
              src="@/assets/nope.jpg"
              max-width="500"
              max-height="500">
            </v-img>
        </v-row>
        <p class="text-center font-italic display-1 white--text">Dang, you failed so hard at clicking you wound up here... </p>
    </div>
</template>

<script>
export default {
    name: "Lost",
    data: () => ({
        //
    }),
}
</script>

<style scoped>

</style>