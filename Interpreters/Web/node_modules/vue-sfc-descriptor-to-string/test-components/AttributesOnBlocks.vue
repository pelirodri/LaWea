<script lang="js">
export default {
  props: {
    name: {
      type: String
    }
  }
};
</script>

<template lang="html">
  <div class="widget">Hello {{name}}</div>
</template>

<style scoped lang="css">
.widget {
  color: red;
}
</style>
