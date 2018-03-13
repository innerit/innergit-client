<template>
  <el-container>
    <el-header>
      <navigate></navigate>
    </el-header>
    <el-container>
      <el-aside style="width:5%;"></el-aside>
      <central></central>
      <el-aside style="width:5%;"></el-aside>
    </el-container>
  </el-container>
</template>
<script>
import Central from './Central'
import Navigate from './Nav'
import Vue from 'Vue'

const EventBus = new Vue()

Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return EventBus
    }
  }
})

export default {
  name: 'home',
  components: { Central, Navigate },
  methods: {}
}
</script>
<style media="screen" scoped>
  .el-container{
    background: #efefef;
    height: 100%;
  }
  .central{
    height: 70%;
  }
  .el-header{
    padding: 0 0;
  }
</style>
