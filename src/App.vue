<template>
  <div id="app">
    <el-menu :default-active="activeIndex" theme="dark" :router="true" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <router-link to="/"><el-menu-item index="0">主页</el-menu-item></router-link>
      <router-link to="/user"><el-menu-item index="1">用户管理</el-menu-item></router-link>
      <router-link to="/about"><el-menu-item index="2">关于</el-menu-item></router-link>
      <router-link to="/setting"><el-menu-item index="3" class="setting"><i class="el-icon-setting"></i>设置</el-menu-item></router-link>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',

  data() {
    return {
      activeIndex: '0',
    };
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath); // eslint-disable-line no-console
    },
  },
};
</script>

<style scoped>
  .setting {
    float: right;
  }
</style>
