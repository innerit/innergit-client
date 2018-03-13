<template>
  <el-card class="box-card">
    <header-card title="Publicar avances" icon="fas fa-arrow-alt-circle-up"></header-card>
    <div class="container">
      <el-select v-model="value" clearable placeholder="Selecciona una acción">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-upload
        class="upload-evidence"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">Suelta tu archivo aquí o <em>haz clic para cargar</em></div>
        <div slot="tip" class="el-upload__tip">Solo archivos jpg/png con un tamaño menor de 500kb</div>
      </el-upload>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 6}"
        placeholder="Detalle de avance"
        v-model="value">
      </el-input>
      <el-button type="primary" class="btn-publish right">Publicar <i class="fas fa-location-arrow"></i></el-button>
    </div>
  </el-card>
</template>
<script type="text/javascript">
  import HeaderCard from './Card/HeaderCard'
  console.log(this.data)
  export default {
    name: 'PushChanges',
    components: { HeaderCard },
    data () {
      return {
        options: [{
          value: '[FIX]',
          label: 'FIX'
        }, {
          value: '[UPDATE]',
          label: 'UPDATE'
        }, {
          value: '[ADD]',
          label: 'ADD'
        }, {
          value: '[DELETE]',
          label: 'DELETE'
        }],
        value: ''
      }
    }
  }
</script>
<style scoped>
  .header-card{
    background: #3c85cf !important;
    color: #f2f2f2;
    padding: 1rem;
    z-index: 3;
    border-top-right-radius:.4rem;
  }
  .el-button{
    width: 100%;
    margin-top: .5rem;
  }
  .right{
    float: right;
  }
  .left{
    float: left;
  }
  .el-select {
    width: 100%;
  }
  .upload-evidence{
    margin-top: .5rem;
    padding-bottom: 1.5rem;
    width: 100%;
    overflow: hidden;
  }
  .btn-publish{
    margin-bottom: 3rem;
  }
</style>
