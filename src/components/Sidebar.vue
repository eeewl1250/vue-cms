<template>
  <div class="sidebar">
    <el-menu mode="vertical" :collapse="isCollapse" default-active="1" router>
      <el-menu-item class="logo-item" index="0" unique-opened>
        <i class="logo"></i>
        <span>控制台</span>
      </el-menu-item>
      <nav-menu :items="items" :is-collapse="isCollapse"></nav-menu>
    </el-menu>
  </div>
</template>

<script>
import navMenu from './NavMenu'
export default {
  name: 'Sidebar',
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  components: {
    'nav-menu': navMenu
  },
  data () {
    return {
      items: [
        {
          icon: 'el-icon-document',
          index: 'home',
          title: '系统首页'
        },
        {
          icon: 'el-icon-document',
          index: 'home',
          title: '运营管理'
        },
        {
          icon: 'el-icon-tickets',
          index: '3',
          title: '表单相关',
          subs: [
            {
              index: 'form',
              title: '基本表单'
            },
            {
              index: '3-2',
              title: '三级菜单',
              subs: [
                {
                  index: 'editor',
                  title: '富文本编辑器',
                  subs: [
                    {
                      index: '1111',
                      title: '111111',
                      subs: [
                        {
                          index: '222',
                          title: '33333'
                        }
                      ]
                    }
                  ]
                },
                {
                  index: 'markdown',
                  title: 'markdown编辑器'
                },
              ]
            },
            {
              index: 'upload',
              title: '文件上传'
            }
          ]
        },
      ]
    }
  }
}
</script>

<style lang="stylus">
.sidebar
  position: absolute
  left: 0
  top: 0
  right: 0
  bottom: 0
  .el-menu
    height: 100%
    &:not(.el-menu--collapse)
      width: 220px
    .logo-item
      height: 80px
      line-height: 80px
      &:hover
        cursor: default
        background-color: transparent
      .logo
        display: inline-block
        margin-left: -12px
        width: 50px
        height: 50px
        background-image: url(../assets/logo.png)
        background-size: 50px
        &+span
          font-size: 150%
          font-weight: bold
</style>
