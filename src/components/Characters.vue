<template>
    <v-container class="white--text">
        <p class="text-center display-3"><span class="font-weight-thin">Characters Of</span> The Few</p>
        <v-row>
            <v-col v-for="(character, index) in characters"
                    :key="index">
                    <v-card color="#414247" dark
                        :to="{ name: 'character', params: {character: character, name: character.short_name}}">
                        <v-card-title>{{character.name}}</v-card-title>
                        <v-card-text>
                            <p class="font-italic caption mt-n3 mb-n1">{{character.race}}</p>
                            <p class="subtitle-2 mb-n1">{{character.class}} - {{character.subclass}}</p>
                            <p class="overline">Height:{{character.height}} - Weight:{{character.weight}} - Age: {{character.age}}</p>
                            <p class="mb-n1 title">Description:</p>
                            <p class="subtitle-1">{{character.description}}</p>                            
                        </v-card-text>
                    </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import characters from "@/data/characters.json"

export default {
    name: "Characters",
    mounted() {
        //console.log(this.characters)
    },
    data: () => ({
        characters: characters,
    })
    
}
</script>

<style scoped>
</style>