<template lang="html">
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1"><img src="~@/assets/logo.jpeg" alt="logo" width="129" height="41"></el-menu-item>
    <el-submenu index="3" style="float:right;">
      <template slot="title">Config.</template>
      <el-menu-item index="2-1"> <i class="fas fa-sign-out-alt"></i> Salir</el-menu-item>
    </el-submenu>
    <el-menu-item index="4" style="float:right;">
      <el-select v-model="value" placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        value: 'Solidus',
        label: 'Solidus'
      }, {
        value: 'Supernova',
        label: 'Supernova'
      }, {
        value: 'Curiosity',
        label: 'Curiosity'
      }],
      value: 'Compañia',
      activeIndex: 1
    }
  },
  methods: {
    triggerMyEvent () {
      /*
      * this.$bus.$emit('selected:company', this.data().value)
      */
    }
  }
}
</script>

<style lang="css">
</style>
