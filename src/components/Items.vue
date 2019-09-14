<template>
    <v-container class="white--text">
        <p class="text-center display-3"><span class="font-weight-thin">Loot Of</span> The Few </p>
        <v-card>
            <v-card-title>
            Collected Items
            <div class="flex-grow-1"></div>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="items"
                :items-per-page="10"
                class="elevation-1"
                :search="search"
                loading-text="Please wait, table is loading...."
            >
                <template v-slot:item.property="{ item }">
                    <span v-for="(prop, index) in item.property"
                        :key="index"> {{prop}} </span>
                </template>

                <template v-slot:item.dmg1="{ item }">
                    <span>{{item.dmg1}}<span v-if="item.dmg2">/{{item.dmg2}}</span> </span>
                </template>

                <template v-slot:item.name="{ item }">
                    <v-btn text small tile :href="item.url">{{item.name}}</v-btn>
                </template>
                
            
            </v-data-table>
        </v-card>
        
    </v-container>
</template>

<script>
import items from "@/data/items.json"

export default {
    name: "Items",
    data ()  {
        return {
            search: '',
            items: items,
            headers: [
                { text: 'Item Name', align: 'left', sortable: false, value: 'name'},
                { text: 'Category', value: 'weaponCategory'},
                { text: 'Magic Bonus', value: 'bonus'},
                { text: 'Rarity', value: 'rarity'},
                { text: 'Damage', value: 'dmg1'},
                { text: 'Damage Type', value: 'dmgType'},
                { text: 'Properties', value: 'property'},
                { text: "Range", value: "range"},
                { text: 'Attunement', value: 'reqAttune'},
                { text: 'Owned By', value: 'owner'},
                
            ]
        }
    }
}
</script>

<style scoped>

</style>