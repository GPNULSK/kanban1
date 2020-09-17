<template class="top-div">
  <div  id="app">
    <div class="banner_top">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item  index="1">信息办管理平台</el-menu-item>
        <el-menu-item style="margin-left: 150px" index="2">项目信息面板</el-menu-item>
        <el-menu-item index="3">打擂台面板</el-menu-item>
        <el-menu-item index="4">升级项目面板</el-menu-item>
        <el-submenu  index="5">
          <template slot="title">年度/月度报表</template>
          <el-menu-item index="5-1">年度</el-menu-item>
          <el-menu-item index="5-2">月度</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>

    <br>
    <div >
      <div style="margin-left: 270px">
        <el-button @click="toUnfinished">未完成项目</el-button>
        <el-button>重大未完成项目</el-button>
        <el-button>重大项目</el-button>
        <el-button>当前开展项目</el-button>
        <el-button>年度未完成项目</el-button>
        <el-button>年度项目</el-button>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toUnfinished(){
      this.$router.push("/unfinished")
    }

  },



}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
.top-div {
  margin-top: -10px;
}
  body{
    background-color: rgb(95,158,160);
  }

  .banner_top{
    display: inline-block;
    width: 100%;
  }
</style>
