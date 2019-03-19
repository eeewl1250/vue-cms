<template>
  <div :class="{'is-collapse': isCollapse}">
    <template v-for="(item, idx) in items">
      <el-submenu :index="item.index" :key="idx" v-if="item.subs">
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </template>
        <!--递归调用-->
        <nav-menu :items="item.subs"></nav-menu>
      </el-submenu>
      <el-menu-item :index="item.index" :key="idx" v-else>
        <i :class="item.icon"></i>
        <span slot="title" class="">{{ item.title }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
    items: {
      type: Array
    },
    isCollapse: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus">
.el-submenu__title
  span
    visibility: visible
    display: inline-block
  .el-submenu__icon-arrow
    display: inline-block
.is-collapse
  .el-submenu__title
    span
      visibility: hidden
      display: none
    .el-submenu__icon-arrow
      display: none

</style>