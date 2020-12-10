<template>
  <div class="tabbar">
     <slot></slot>
  </div>
</template>

<script>

export default {
  name: "Tabbar",
  components: {}
}
</script>

<style scoped>
.tabbar {
  width: 100vw;
  height: 49px;
  border-bottom: 1px solid lightgrey;
  border-top: 1px solid lightgrey;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
}

</style>
