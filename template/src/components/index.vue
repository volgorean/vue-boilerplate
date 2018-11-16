<template>
  <div>
    <h1>Hello there {{name}}!</h1>
  </div>
</template>

<style lang="scss" scoped>
  #h1 {
    font-family: 500 20px/20px sans-serif;
    color: #222222;
  }
</style>

<script>
  export default {
    data () {
      return {
        name: "partner"
      }
    },
  }
</script>
