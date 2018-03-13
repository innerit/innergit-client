<template lang="html">
  <div slot="header" class="clearfix top-title header-card">
    <el-button style="float: left; padding: 3px 0; margin-right: .3rem;" type="text"><i :class="icon"></i></el-button>
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  name: 'header-card',
  props: {
    title: '',
    icon: ''
  }
}
</script>

<style lang="css" scoped>
 .el-button:hover{
   color: #f2f2f2;
 }
</style>
