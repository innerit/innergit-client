<template>
  <el-container :span="4" class="central main-container">
    <el-header>
        <el-button style="float: right;" type="primary" round><i class="el-icon-circle-plus"></i> Nueva Tarea</el-button>
        <span>Proyecto - Mis Tareas</span>
    </el-header>
    <el-container>
      <el-aside :span="4">
        <files-changed></files-changed>
      </el-aside>
      <el-main :span="4" class="c-task">
        <pending-tasks></pending-tasks>
      </el-main>
      <el-main :span="4" class="c-commits">
        <push-changes></push-changes>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import FilesChanged from './FilesChanged'
  import PendingTasks from './PendingTasks'
  import PushChanges from './PushChanges'

  export default {
    name: 'central',
    components: { FilesChanged, PendingTasks, PushChanges },
    methods: {},
    data () {
      return {
        value: ''
      }
    },
    created () {
      this.$bus.$on('selected:company', (value) => {
        this.value = value
        console.log('My event has been triggered', value)
      })
    }
  }
</script>

<style scoped>
  .el-header{
    background: #ffffff;
    border-radius: .5rem;
    height: 80%;
    padding-top: .7rem;
    margin-top: 1.5rem;
  }
  .el-header  span{
    padding-top: .7rem;
  }
  .el-main{
    padding: 0px;
  }
  .el-container{
    height: 100%;
  }
  .el-container.main-container{
    margin-left: 0rem;
  }
  .el-container{
    background: #efefef;
  }
  .el-aside{
    border-top-left-radius: .7rem;
  }
</style>
