<template>
  <div>Page: detail</div>
</template>

<script lang="ts" setup>
const route = useRoute();
onMounted(() => {
  console.log(route.params);
});
</script>
<style scoped></style>
