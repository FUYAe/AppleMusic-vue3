<script setup>
import { onMounted, ref } from 'vue'
import WindowHeader from "../components/WindowHeader.vue"
import WindowSider from "../components/WindowSider.vue"
import Slider from "../components/Slider.vue"
import NowListening from "./siderview/NowListening.vue"

defineProps({
  msg: String
})
let volumeValue = ref(50)
const makeitMove = () => {

  function onDrag(e) {
    const container = document.querySelector(".container")
    let oddStyle = window.getComputedStyle(container)
    let left = parseFloat(oddStyle.left)
    let right = parseFloat(oddStyle.right)
    let top = parseFloat(oddStyle.top)
    let bottom = parseFloat(oddStyle.bottom)
    let sX = e.movementX
    let sY = e.movementY
    // if (top <= 300 && sY < 0) {
    //   sY = 0
    // }
    // if (bottom <= -200 && sY < 0) {
    //   container.style.top = `10px`
    // }
    if (left <= -300 && sX < 0) {
      sX = 0
    }
    if (right <= -1200 && sX > 0) {
      sX = 0
    }
    // if (top <= 300 && sY < -30) {
    //   document.removeEventListener("mousemove", onDrag)
    // }
    container.style.left = `${Math.max(-400, left + sX)}px`

    container.style.top = `${Math.max(300, top + sY)}px`

  }
  const dragElement = document.querySelector(".drag-bar")

  dragElement.addEventListener("mousedown", () => {
    document.addEventListener("mousemove", onDrag)
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", onDrag)
    })
  })


}
onMounted(() => {
  makeitMove()
})
const process = ref(80);
const count = ref(0)
</script>

<template>
  <div class="container">
    <div class="drag-bar"></div>
    <WindowSider />
    <div class="content-box">
      <WindowHeader />

      <div class="main-content">
        <!-- <Slider v-model="process" min=0 max=100 modelValue=50 />
         -->
        <!-- <NowListening />
         -->
        <router-view></router-view>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 1000px;
  height: 600px;
  border-radius: 10px;
  border: 0.2px solid #dedede;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .drag-bar {
    position: absolute;
    height: 20px;
    width: 100%;
    top: 0;
    z-index: 2;
    // background-color: bisque;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

  }


  .content-box {
    position: absolute;
    top: 0;
    left: 200px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    display: inline-block;
    width: 800px;
    height: 100%;
    background-color: rgb(255, 255, 255);


    .main-content {
      width: 800px;
      height: 550px;
      padding: 20px 40px 20px 40px;
      position: relative;
      overflow-y: auto;
      // border-bottom: 0.2px solid #dedede;
      // border-bottom-right-radius: 10px;
    }

    .main-content::-webkit-scrollbar {
      // border-bottom-right-radius: 10px;
      // height: 90%;
      width: 0px;
    }

  }
}

@media (max-height: 600px) {
  .container {
    top: 300px;
    transform: translateY(0%, 0);
  }
}

@media (max-width: 1000px) {
  .container {
    left: 500px;
    transform: translateX(0%, 0);
  }
}
</style>
