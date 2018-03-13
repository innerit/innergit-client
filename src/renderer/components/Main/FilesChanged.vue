<template>
  <el-card class="box-card">
    <header-card title="Directorio del Proyecto" icon="fas fa-folder-open"></header-card>
    <div class="container">
      <div v-for="o in 6" :key="o" class="text item">
        <el-checkbox>{{'Archivo ' + o }}</el-checkbox>
      </div>
    </div>
  </el-card>
</template>
<script type="text/javascript">
  import HeaderCard from './Card/HeaderCard'
  export default {
    name: 'FilesChanged',
    components: { HeaderCard }
  }
</script>
<style scoped>
  .header-card{
    background: #3c85cf !important;
    color: #f2f2f2;
    padding: 1rem;
    z-index: 3;
    border-top-left-radius:.4rem;
  }
</style>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
    height: 93%;
    margin-top: .5rem;
  }

  .top-title{

  }
  .el-aside{
    overflow: hidden;
  }
  .el-button--text{
    color: #f2f2f2;
    font-size: 14px;
  }
  .container{
    padding: 20px;
    height: 90%;
    overflow: auto;
  }
  .el-card__body {
    padding: 0px;
  }

</style>
