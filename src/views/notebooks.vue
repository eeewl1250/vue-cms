<template>
  <div class="notebooks">
    <el-row>
      <el-button type="primary">新建笔记本</el-button>
      <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="input">
      </el-input>
    </el-row>
    <el-table
      :data="tableData"
      boder
      max-height="250">
      <el-table-column
          prop="title"
        label="笔记名称">
      </el-table-column>
      <el-table-column
          prop="date"
        label="创建日期">
      </el-table-column>
      <el-table-column
          prop="noteCounts"
        label="笔记数">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'notebooks',
  data () {
    return {
      input: undefined,
      tableData: [
        {
          id: 1,
          title: '1111',
          date: '2018-04-02',
          noteCounts: 22
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.el-input
  width: 200px
</style>