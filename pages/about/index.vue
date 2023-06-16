<template>
  <div>Page: about</div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["about"]
});

// 调用plugin的方式
const { $injected } = useNuxtApp();
console.log($injected());
</script>
<style scoped></style>
