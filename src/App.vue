<template>
  <div id="app">
    <router-view/>
    <Tabbar>
      <TabbarItem path="/home" active-color="green">
<!--        <div slot="icon">home</div>-->
        <span slot="text" class="text">主页</span>
      </TabbarItem>
      <TabbarItem path="/category" active-color="green">
<!--        <div slot="icon">category</div>-->
        <span slot="text" class="text">分类</span>
      </TabbarItem>
      <TabbarItem path="/about" active-color="green">
<!--        <div slot="icon">cart</div>-->
        <span slot="text" class="text">购物车</span>
      </TabbarItem>
      <TabbarItem path="/profile" active-color="green">
<!--        <div slot="icon">my</div>-->
        <span slot="text" class="text">我的</span>
      </TabbarItem>
    </Tabbar>

  </div>

</template>
<script>
import Tabbar from "@/components/tabbar/Tabbar";
import TabbarItem from "./components/tabbar/TabbarItem";

export default {

  name: 'App',
  components: {Tabbar, TabbarItem}
}
</script>
<style>
body {
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
