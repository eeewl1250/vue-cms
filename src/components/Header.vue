<template>
  <header>
    <slot></slot>
    <span>后台管理系统</span>
    <div class="header-right">
      <el-tooltip content="全屏">
        <i class="el-icon-rank" @click="handleFullScreen"></i>
      </el-tooltip>
      <el-tooltip content="2条未读消息">
        <el-badge is-dot class="item">
          <i class="el-icon-bell"></i>
        </el-badge>
      </el-tooltip>
      <el-dropdown trigger="click" class="user-info">
        <span class="el-dropdown-link">
          {{ username }}<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
          <el-dropdown-menu slot="dropdown">
            <a href="https://www.baidu.com" target="_blank">
              <el-dropdown-item>关于作者</el-dropdown-item>
            </a>
            <a href="https://www.baidu.com" target="_blank">
              <el-dropdown-item>项目仓库</el-dropdown-item>
            </a>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      username: 'haha',
      isFullScreen: false
    }
  },
  methods: {
    handleFullScreen () {
      if (this.isFullScreen) {
        this.exitFullScreen()
      } else {
        this.fullScreen()
      }
      this.isFullScreen = !this.isFullScreen
    },
    fullScreen () {
      let el = document.documentElement
      let rfs = el.requestFullscreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
            || el.msRequestFullScreen
      if (rfs) {
        rfs.call(el)
      } else if (typeof window.ActiveXObject !== 'undefined') {
        // IE
        // 模拟按下键盘的F11，使浏览器全屏
        let wScript = new window.ActiveXObject("WScript.Shell")
        if (wScript !== null) {
          wScript.SendKeys("{F11}")
        }
      }
    },
    exitFullScreen () {
      let el = document
      let cfs = el.cancelFullscreen
          || el.webkitCancelFullScreen
          || el.mozCancelFullScreen
          || el.msCancelFullScreen
      if (cfs) {
        cfs.call(el)
      } else if (typeof window.ActiveXObject !== 'undefined') {
        // IE
        // 模拟按下键盘的F11，退出全屏
        let wScript = new window.ActiveXObject("WScript.Shell")
        if (wScript !== null) {
          wScript.SendKeys("{F11}")
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
header
  width: 100%
  height: 70px
  font-size: 22px
  line-height: 70px
  border-bottom: 1px solid #d8dce5
  background-color: #fff
  button
    margin: 0 21px
  .header-right
    float: right
    & > *
      margin: 0 6px
    .el-icon-rank
      transform: rotate(45deg)
    .el-icon-bell, .el-badge
      line-height: 20px
    .user-info
      line-height: 20px
      cursor: pointer
</style>