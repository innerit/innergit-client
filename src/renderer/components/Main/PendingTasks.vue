<template>
  <el-card class="box-card">
    <header-card title="Tareas asignadas" icon="fas fa-tasks"></header-card>
    <div class="container">
      <div v-for="o in 5" :key="o" class="text item">
        <el-button icon="fas fa-angle-right">{{ ' Tarea ' + o + ' | Evolución 1'}}</el-button>
      </div>
    </div>
  </el-card>
</template>
<script type="text/javascript">
  import HeaderCard from './Card/HeaderCard'
  export default {
    name: 'PendingTasks',
    components: { HeaderCard }
  }
</script>
<style scoped>
  .header-card{
    background: #3c85cf !important;
    color: #f2f2f2;
    padding: 1rem;
    z-index: 3;
  }
  .el-button{
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .right{
    float: right;
  }
  .left{
    float: left;
  }
</style>
