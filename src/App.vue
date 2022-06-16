<script setup>
import MainWindow from './view/MainWindow.vue'
</script>

<template>
  <MainWindow />
  <!-- <MainWindow /> -->
</template>

<style lang="scss">
body{
  background:url("./assets/bgc.jpg");
width: 1240px;
// height: 1500px;
object-fit: cover;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.el-slider {
  display: inline-block;
  width: 100px;
}

* {
  user-select: none;
  box-sizing: border-box;
}
</style>

