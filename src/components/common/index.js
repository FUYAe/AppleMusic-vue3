import Card from "./Card.vue"
import PlayCard from "./PlayCard.vue"
import BigCard from "./BigCard.vue"
import SongItem from "./SongItem.vue"
import Maudio from "./Maudio.vue"
const components = [Card, BigCard, PlayCard, SongItem, Maudio]
export default {
    install: (app, options) => {
        components.forEach((item) => {
            app.component(item.name, item)

        })
    }
}