<script setup>
import { computed, onMounted, ref } from "vue"
import { useStore } from "vuex"
const store = useStore()
let bf = ref(null);
let bb = ref(0)
onMounted(() => {

    console.log(bf.value)
    console.log(bb.value)
    bb.value = bf.value
}
)
let cmurl = computed(() => {
    return store.state.murl
})
</script>
<template>
    <div class="header-item header-item-player">
        <div class="pic">
            <img src="../../assets/R-C.jpeg" alt="" srcset="">
        </div>
        <div class="music-msg">
            <div class="music-name">
                <audio ref="bf" :src="cmurl" controls autoplay></audio>
            </div>
            <div class="music-slider">
                <input type="range" min="0" max="100" v-model="volumeValue">
            </div>
        </div>
    </div>


</template>
<script>

export default {
    name: "Maudio"
}
</script>
<style lang="scss" scoped>
audio {
    display: none;
    // border-radius: 5px;
}

.header-item {
    display: inline-block;
    padding-top: 11px;
    padding-bottom: 11px;
    padding-left: 5px;
    padding-right: 5px;
}

.header-item-player {
    width: 260px;
    height: 42px;
    padding: 0;
    margin: 4px;
    position: relative;
    // background-color: #dedede;
    border-radius: 3px;
    border: 0.1px solid #dedede;

    div {
        display: inline-block;
        position: absolute;
        top: 0;
        height: 100%;
        margin: 0;
    }

    .pic {
        position: absolute;
        left: 0;
        width: 42px;
        // background-clip:
        // border-bottom-left-radius: 3px;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        background-color: #dedede;

        img {
            width: 100%;
            height: 100%;
            border-bottom-left-radius: 3px;
            border-top-left-radius: 3px;
            // background-size: cover
            object-fit: contain;
        }
    }

    .music-msg {
        position: absolute;
        left: 42px;
        width: 218px;

        .music-name {
            position: absolute;
            left: 0;
            height: 70%;
            width: 100%;
        }

        .music-slider {
            position: absolute;
            left: 0;
            bottom: 0;
            height: 30%;
            width: 100%;

            input[type="range"] {
                -webkit-appearance: none;
                width: 97%;
                position: absolute;
                right: -2px;
                bottom: -31.5px;
                // top: -10px;
                background: #ebebeb;
                height: 1px;
                border: 1px solid #dedede;
                outline: none;
                color: #dedede;
                border-bottom-right-radius: 2px;

            }

            input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
                position: relative;
                width: 4px;
                height: 8px;
                background: #6e6e6e;
                top: -2.4px;
                border-top-right-radius: 2px;
                border-top-left-radius: 2px;
            }

            input[type="range"]::-webkit-slider-thumb::before {
                content: "";
                width: 4px;
                height: 8px;
                background: #a02c2c;

            }

            input[type="range"]:active::-webkit-slider-thumb {
                background: #dedede;
            }
        }
    }
}
</style>