<script setup>
import { useStore } from "vuex"
import { getTopList } from "../../axios/getlist";
import rq from "../../axios";
import { getSongUrl, getSongs } from "../../axios/getsong";
import { onMounted, reactive, ref } from "vue";
// import BigCard from "../../components/common/BigCard.vue";
let toplist = ref(0)
let bigindex = ref(0)
let index = ref(0)
const store = useStore()
let muslist = reactive({
    list: ""
})
let music = ref(0)
function getD() {
    getSongs().then((res) => {

        // muslist.list = res.data.songs
        store.commit("setData", res.data.songs)
        // console.log(muslist.value)
    })
}


onMounted(() => {
    getD()
    console.log(muslist.list)
})

// console.log(muslist)

// getTopList().then((res) => {
//     toplist.value = res.data.list
// })
// console.log(toplist)
// onMounted(()=>)
// const store = useStore()
// store.commit('increment')
// console.log(store.state)
</script>
<template>
    <div class="container-l">
        <!-- <Card v-for="(item, index) in toplist" :key="index" :name="item.name" :imgUrl="item.coverImgUrl">
        </Card> -->
        <div class="title">现在就听</div>
        <div class="content-box now-listening">
            <BigCard v-for="item in bigindex + 3"></BigCard>
        </div>
        <div class="title">最近播放</div>
        <div class="content-box recent-play">
            <PlayCard v-for="item in store.state.data" :imgUrl="item.al.picUrl" :name="item.name" :mid="item.id">
            </PlayCard>
        </div>
        <div class="title">电台专属推荐</div>
        <div class="content-box radio-recommend">
            <BigCard v-for="item in bigindex + 3"></BigCard>
        </div>
        <div class="title">最新发布</div>
        <div class="content-box recent-publish">
            <PlayCard v-for="item in index + 4"></PlayCard>
        </div>
    </div>

</template>
<style lang="scss" scoped>
.container-l {
    width: 100%;
    min-height: calc(100% - 50px);
    box-sizing: border-box;
    position: relative;

    .title {
        text-align: left;
        padding-left: 10px;
        font-size: 18px;
        font-weight: bolder;
    }

    .content-box {
        display: flex;
        justify-content: space-between;
    }

    .now-listening {
        width: 100%;
        // height: 220px;
        overflow: hidden;
        text-align: left;
    }

}
</style>