<script setup>
import { ref } from "vue"
const props = defineProps({
    co: Number
})
// console.log(props)
let isLight = ref(props.co % 2 !== 0 ? true : false)
</script>
<template>
    <div class="song-item" :class="{ lightcolor: isLight }">
        <div class="left">
            <img src="../../assets/logo.png" alt="" srcset="">
            <div>
                <p> 晴天-周杰伦</p>
            </div>
        </div>
        <div class="right">
            <div>13:07</div>
            <div>...</div>
        </div>
    </div>

</template>
<script>

export default {
    name: "SongItem"
}
</script>
<style lang="scss" scoped>
.song-item {
    height: 54px;
    // width: 100%;
    border-radius: 5px;
    background-color: #f4f5f5;
    padding: 5px;
    display: flex;
    justify-content: space-between;

    div {
        display: inline-block;
    }

    .left {
        position: relative;
        width: 200px;
        height: 44px;
        text-align: left;

        img {
            height: 44px;
            height: 44px;
            border-radius: 5px;

        }

        div {
            position: absolute;
            top: 0;
            height: 44px;
            padding: 10px;

        }
    }

}

.lightcolor {
    background-color: #fefefe;
}

.song-item:hover {
    background-color: #ebebeb;
}
</style>