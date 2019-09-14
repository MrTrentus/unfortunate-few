<template>
    <v-container class="white--text">
        <p class="text-center display-3">{{character.name}}</p>
        
    </v-container>
</template>

<script>

export default {
    name: "Character",
    props: {
        character: Object
    }
}
</script>

<style scoped>

</style>