<template>
  <div class="widget">Hello {{name}}</div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    }
  }
};
</script>

<style>
.widget {
  color: red;
}
</style>
