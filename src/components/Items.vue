<template>
    <v-container class="white--text">
        <p class="text-center display-3"><span class="font-weight-thin">Loot Of</span> The Few </p>
        <v-card class="custom-color">
            <v-card-title>
            Collected Items
            <div class="flex-grow-1"></div>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                dark
            ></v-text-field>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items-per-page="10"
                :items="items"
                :search="search"
                loading-text="Please wait, table is loading...."
                :sort-by="name"
                :sort-desc=false
                class="elevation-1"
                                
            >
                <template v-slot:body="{ items }">
                    <tbody>
                        <tr v-for="item in items" :key="item.name" @click="setItem(item)">
                            <td>{{item.name}}</td>
                            <td>{{item.weaponCategory}}</td>
                            <td>{{item.bonus}}</td>
                            <td><span v-if="item.rarity!='Unknown'">{{item.rarity}}</span></td>
                            <td><span>{{item.dmg1}}<span v-if="item.dmg2">/{{item.dmg2}}</span> </span></td>
                            <td>{{item.dmgType}}</td>
                            <td><span v-for="(prop, i) in item.property" :key="i"> {{prop}} </span></td>
                            <td>{{item.range}}</td>
                            <td>{{item.reqAttune}}</td>
                            <td>{{item.owner}}</td>
                        </tr>
                    </tbody>
                </template>
            </v-data-table>
        </v-card>

        <v-row justify="center">
            <v-dialog v-model="itemView" max-width="600">
            <v-card>
                <v-card-title class="headline">{{currentItem.name}}</v-card-title>
                <v-card-text>
                    <p class="font-italic caption mt-n3 mb-n1">Owned By: <span v-if="currentItem.owner">{{currentItem.owner}}</span><span v-else>--</span> </p>
                    <p class="subtitle-2 mb-n1">{{currentItem.weaponCategory}} - {{currentItem.rarity}}</p>
                    <p class="overline">Properties: <span class="font-italic" v-for="(prop,i) in currentItem.property" :key="i">{{prop}} </span></p>
                    <p class="mb-n1 title">Description</p>
                    <p class="caption" v-for="(desc,i) in currentItem.description" :key="i">{{desc}}</p>   

                </v-card-text>
                <v-card-actions>
                    <v-btn v-if="currentItem.url" color="green darken-1" text :href="currentItem.url">5eTools Entry</v-btn>
                    <div class="flex-grow-1"></div>
                    <v-btn color="blue darken-1" text @click="itemView = false">Close</v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </v-row>
        
    </v-container>
</template>

<script>
import items from "@/data/items.json"

export default {
    name: "Items",
    methods: {
        setItem: function(item) {
            console.log('Clicked on item: ' + item.name)
            this.resetItem
            this.currentItem = item
            this.itemView = true
        },
        resetItem: function() {
            this.currentItem = []
        }
    },
    data ()  {
        return {
            search: '',
            currentItem: [],
            items: items,
            itemView: false,
            headers: [
                { text: 'Item Name', align: 'left', sortable: true, value: 'name'},
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
    .custom-color{
        background-color: #414247;
        color: white;
    }

</style>