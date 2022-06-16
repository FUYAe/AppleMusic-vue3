<script setup>
import { ref } from "vue";
import { getSongUrl, getSongs } from "../../axios/getsong";
import { useStore } from "vuex"
const props = defineProps({
    imgUrl: String,
    name: String,
    mid: Number
})
const store = useStore()
let music = ref()
const murl = ref(0)
const playMusic = (id) => {
    getSongUrl(+id).then((res) => {
        console.log(res.data.data[0])
        store.commit("setMurl", res.data.data[0].url)


    })
}
// console.log(murl)
</script>
<template>
    <div class="m-card">
        <div class="img" ref="btm">
            <div class="when-hover">
                <div @click="playMusic(mid)" class="card-play-btn"><img src="./assets/cardIcon/play.png" alt=""
                        srcset=""> </div>
                <div class="card-more-btn"><img src="./assets/cardIcon/more.png" alt="" srcset=""></div>
            </div>
            <img :src="imgUrl" alt="" srcset="">
            <!-- <audio :src="murl" autoplay></audio> -->
        </div>


        <div class="info">

            <p class="info1">{{ name }}</p>

        </div>

    </div>

</template>
<script>

export default {
    name: "PlayCard"
}
</script>
<style lang="scss" scoped>
$W:125px;
$M:10px;
// $W:180px;


.m-card {
    display: inline-block;
    width: $W;
    height: calc($W + 40px);
    // background-color: aqua;
    margin: $M;
    box-sizing: border-box;

    .img:hover .when-hover {
        display: block;
    }

    .img {


        position: relative;

        width: $W;
        height: $W;
        border-radius: 5px;
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.4);
        background-color: #dedede;

        // padding-bottom: 100%;
        // box-sizing: content-box;
        .when-hover {
            display: none;
            top: 0;
            left: 0;
            position: absolute;
            border-radius: 5px;
            z-index: 10;
            width: $W;
            height: $W;
            background-color: rgba(0, 0, 0, 0.199);
            // padding: 10px;

            img {
                width: 15px;
                height: 15px;
            }

            div {
                padding: 4.5px;
                width: 25px;
                height: 25px;
                background-color: #dedede5d;
                position: absolute;
                bottom: 5px;
                border-radius: 50%;
            }

            div:hover {
                background-color: #fa233b;
            }

            .card-play-btn {

                left: 5px;


            }

            .card-more-btn {
                right: 5px;

            }
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 5px;
        }
    }


    .info {
        width: 100%;
        height: 20px;

        .info1 {
            text-align: left;
            font-size: 12px;
            margin: 0;
            padding-left: 2px;
            font-weight: 500;
        }

        .info2 {
            text-align: left;
            font-size: 12px;
            margin: 0;
            color: rgba(0, 0, 0, 0.405);
            padding-left: 2px;
            font-weight: 500;
        }

    }
}

.m-card:hover .when-hover {

    display: block;
}
</style>