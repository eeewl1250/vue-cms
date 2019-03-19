<template>
  <div class="error404">
    <dl class="content">
      <dt>404</dt>
      <dd>啊哦~ 你所访问的页面不存在</dd>
    </dl>
    <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
    <el-button type="primary" @click="$router.go(-1)">返回上一页</el-button>
  </div>
</template>

<script>
export default {
  name: 'error404'
}
</script>

<style lang="stylus" scoped>
.error404
  text-align: center
  .content
    margin: 20px 0
    dt
      font-size: 200px
      color: #409EFF
    dd
      font-size: 24px
      color: #409EFF
</style>