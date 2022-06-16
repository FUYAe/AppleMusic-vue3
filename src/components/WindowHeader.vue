<script setup>
import { computed, onMounted, ref, watch, reactive, getCurrentInstance } from 'vue';
import { useStore } from "vuex"
let volumeValue = ref(50)
const onE = () => {
    let a = document.querySelector(".lili")
    a.style.width = `${len.value}px`
}
onMounted(() => {
    // let a = document.querySelector(".input-range2")
    // a.addEventListener("mousedown", () => {
    //     document.addEventListener("mousemove", onE)
    //     document.addEventListener("mouseup", () => {
    //         document.removeEventListener("mousemove", onE)
    //     })

    // })
})
let isplay = ref(true)
const playm = () => {

    if (isplay.value) {
        console.log(isplay.value)
        bb.value.pause()
    } else {
        console.log(bb.value.duration)
        bb.value.play()

    }
    isplay.value = !isplay.value
}
const pauseM = () => {
    bb.value.pause()

}
const playM = () => {
    bb.value.play()
}
// const space = computed(() => {
//     return 
// })
const store = useStore()
let bf = ref(null);
let bb = ref(0)
let len = ref(100)
let space = ref(0)
onMounted(() => {

    console.log(bf.value)
    console.log(bb.value)
    bb.value = bf.value
    len.value = bb.value.duration
    setInterval(() => {
        space.value = bb.value.currentTime
    }, 10)

}
)
let cmurl = computed(() => {
    return store.state.murl
})
</script>
<template>
    <div class="header">
        <div class="header-item header-item-control">
            <img class="icon-header" src="../assets/icon/random.png" alt="" srcset="">
            <img class="icon-header" src="../assets/icon/premusic.png" alt="" srcset="">
            <img class="icon-header" @click="playm" src="../assets/icon/play_fill.png" alt="" srcset="">
            <img class="icon-header" src="../assets/icon/nextmusic.png" alt="" srcset="">
            <img class="icon-header" src="../assets/icon/loop.png" alt="" srcset="">
        </div>

        <div class="header-item header-item-player">
            <div class="pic">
                <img src="../assets/R-C.jpeg" alt="" srcset="">
            </div>
            <div class="music-msg">
                <div class="music-name">
                    <audio ref="bf" :src="cmurl" controls autoplay></audio>
                </div>
                <div class="music-slider">
                    <input type="range" min="0" :max="len" v-model="space">
                </div>
            </div>
        </div>

        <div class="header-item header-item-volume">
            <img class="icon-header volume-down" src="../assets/icon/volume-down.png" alt="" srcset="">
            <div class="slider">
                <!-- <div class="lili" :width="len"></div> -->
                <input class="input-range2" type="range" min="0" max="100" v-model="volumeValue">
            </div>
            <img class="icon-header volume-up" src="../assets/icon/volume-up.png" alt="" srcset="">
        </div>
        <div class="header-item header-item-more">
            <img class="icon-header" src="../assets/icon/radar.png" alt="" srcset="">
            <img class="icon-header" src="../assets/icon/lyric.png" alt="" srcset="">
            <img class="icon-header" src="../assets/icon/menu.png" alt="" srcset="">
        </div>
    </div>
</template>
<style lang="scss" scoped>
.slider {
    position: relative;
}


.header {
    width: 100%;
    height: 50px;
    // background-color: #8e7373;
    border-top-right-radius: 10px;
    border-bottom: 0.2px solid #dedede;
    display: flex;
    justify-content: space-between;

    .header-item {
        display: inline-block;
        padding-top: 11px;
        padding-bottom: 11px;
        padding-left: 5px;
        padding-right: 5px;


        .icon-header {
            position: relative;
            z-index: 3;
            width: 16px;
            height: 16px;
            opacity: 0.5;
            margin: 5px;
        }

        .icon-header:hover {
            opacity: 0.7;
        }

        .volume-up .volume-down {
            width: 10px;
            height: 10px;
        }
    }

    .header-item-volume {
        width: 200px;

        div {
            display: inline-block;
            width: 70px;
            height: 5px;
            margin: 10px;

            // padding-top: 10px;
            input[type="range"] {
                -webkit-appearance: none;
                width: 100%;
                position: relative;
                top: -10px;
                background: #ebebeb;
                height: 1px;
                border: 1px solid #dedede;
                outline: none;
                color: #dedede;
                border-radius: 2px;

            }

            input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
                position: relative;
                width: 12px;
                height: 12px;
                background: #ffffff;
                border-radius: 50%;
                transition: .2s;
                border: 1px solid #bababa;
            }

            input[type="range"]:active::-webkit-slider-thumb {
                background: #dedede;
            }


        }
    }


}

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

.main-content {
    width: 100%;
    height: 550px;
    // background-color: #9a6161;
    border-bottom-right-radius: 10px;
}
</style>