<template>
  <div @click="onItemClick">
    <div :class="{'active_icon':isActive}" class="text">
      <slot name="icon"></slot>
    </div>
    <span :style="{color:isActive?activeColor:defaultColor}" class="text">
      <slot name="text"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },

  data() {
    return {
      defaultColor:'#000'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods: {
    onItemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.active_icon {
  color: #42b983;
}

.active_text {
  color: #42b983;
}

</style>
