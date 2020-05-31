<script>
export default {
  props: {
    name: {
      type: String
    }
  }
};
</script>

<template>
  <div class="widget">Hello {{name}}</div>
</template>

<style>
.one {
  color: red;
}
</style>

<style>
.two {
  color: blue;
}
</style>
