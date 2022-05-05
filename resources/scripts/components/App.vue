<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++" class="p-3 border-2 border-solid border-slate-900 rounded-full bg-slate-300">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>