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
.widget {
  color: red;
}
</style>

<custom1>
hello 1
</custom1>
