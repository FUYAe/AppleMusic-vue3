import { createStore } from 'vuex'
import request from "../axios"
const store = createStore({
    state() {
        return {
            count: [],
            murl: 0,
            data: null
        }
    },
    mutations: {
        increment(state) {
            console.log("[[[[")
            request.get("/toplist").then((res) => {
                state.count = res.data.list
                console.log(state.count)
            })
        },
        setMurl(state, url) {
            console.log(url)
            state.murl = url
        },
        setData(state, data) {
            console.log(data)

            state.data = data.slice(5, 10)
        }
    }
})
export default store