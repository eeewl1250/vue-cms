<template>
  <div class="container">
    <v-sidebar :is-collapse="isCollapse"></v-sidebar>
    <div class="main" :class="{'is-collapse': isCollapse}">
      <v-header>
        <el-button type="primary" @click="changeCollapse">collapse</el-button>
      </v-header>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from './Sidebar'
import header from './Header'
export default {
  name: 'Layout',
  components: {
    'v-sidebar': sidebar,
    'v-header': header
  },
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    changeCollapse () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  .main
    position: absolute
    left: 221px
    top: 0
    right: 0
    bottom: 0
    transition: left 0.4s
    background-color: #f0f2f5
    &.is-collapse
      left: 65px
      transition: left 0.4s
    .content
      margin: 16px
</style>