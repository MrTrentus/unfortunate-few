import Vue from 'vue'
import Router from 'vue-router'
import App from "./App.vue"
import Lost from "./components/Lost"
import Characters from "./components/Characters"
import Items from "./components/Items"
import SessionNotes from "./components/SessionNotes"
import Character from "./components/Character"
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: App},
    { path: '/characters', component: Characters},
    { path: '/character/:name', component: Character, name: "character", props: true },
    { path: '/items', component: Items},
    { path: '/story', component: SessionNotes},
    { path: '*', component: Lost}
  ]
})
