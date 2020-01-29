<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App',
    created () {
        document.body.removeChild(document.getElementById('Loading'));
    }
};
</script>

<style>
*{
    padding: 0;
    margin: 0;
  }
  body,html{
    width: 100%;
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
  }
  /* 取消默认边距 */
  .el-main{
    padding: 0 !important;
    height: 100% !important;
  }
  /* 滚动槽 */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: #eeeeee;
  }
  ::-webkit-scrollbar-track {
    border-radius: 3px;
    background: rgba(0,0,0,0.06);
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.08);
  }
  /* 滚动条滑块 */
  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: rgba(0,0,0,0.12);
    -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
  }
</style>
