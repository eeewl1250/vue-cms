<template>
  <div class="home">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-document"></i>首页</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="container">
      <h1>home</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="stylus" scoped>
.home
  width: 100%
  height: 100%
  .container
    padding: 20px
    margin-top: 10px
    border: 1px solid #d8dce5
    border-radius: 5px
    background-color: #fff
</style>