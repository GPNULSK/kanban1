<template>

  <div class="table_class">
    <el-table
      :data="tableData"
      height="800px"
      border
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      :row-style="{background:'rgb(95,158,160)'}"
      :cell-style="{border:'0.5px solid gray',fontFamily:'Times New Roman'}"
      style="width: 100%;border:1px solid green"
      ref="table">
      <el-table-column
        align="center"
        prop="createData"
        label="创建时间">
      </el-table-column>
      <el-table-column
        align="center"
        prop="projectId"
        label="系统接单编号">
      </el-table-column>
      <el-table-column
        align="center"
        prop="projectLevel"
        label="优先级">
      </el-table-column>

      <el-table-column
        align="center"
        prop="isImportant"
        label="重大项目">
      </el-table-column>
      <el-table-column
        align="center"
        prop="projectName"
        label="项目名称">
      </el-table-column>
      <el-table-column
        align="center"
        prop="projectType"
        label="项目类型">
      </el-table-column>

      <el-table-column
        align="center"
        prop="projectCharger"
        label="负责人">
      </el-table-column>
      <el-table-column
        align="center"
        prop="progressDetail"
        label="当前进度描述">
      </el-table-column>
      <el-table-column
        align="center"
        prop="finishPercent"
        label="进度完成率">
      </el-table-column>

      <el-table-column
        align="center"
        prop="updateDate"
        label="进度更新时间">
      </el-table-column>
      <el-table-column
        align="center"
        prop="isAssistant"
        label="是否协助">
      </el-table-column>
      <el-table-column
        align="center"
        prop="finishStaff"
        label="归档人">
      </el-table-column>

      <el-table-column
        align="center"
        prop="projectAdministrators"
        label="管理员">
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
    export default {
      name: "unfinished",
      data() {
        return {
          tableData: []
        }
      },

      created() {
        this.axios('http://localhost:8081/unfinished').then(res=>{
          console.log(res.data)
          this.tableData=res.data;
        })
      },
      mounted() {
        // 拿到表格挂载后的真实DOM
        const table = this.$refs.table
        // 拿到表格中承载数据的div元素
        const divData = table.bodyWrapper
        // 拿到元素后，对元素进行定时增加距离顶部距离，实现滚动效果(此配置为每100毫秒移动1像素)
        setInterval(() => {
          // 元素自增距离顶部1像素
          divData.scrollTop += 1
          // 判断元素是否滚动到底部(可视高度+距离顶部=整个高度)
          if (divData.clientHeight + divData.scrollTop == divData.scrollHeight) {
            // 重置table距离顶部距离
            divData.scrollTop = 0
          }
        }, 100)
      }
    }
</script>

<style >



  .table_class {
    width: 100%;
    background-color: rgb(95,158,160);
  }




</style>
