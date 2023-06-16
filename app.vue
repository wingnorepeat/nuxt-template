<template>
  <div class="welcome">welcome</div>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup lang="ts">
const config = useRuntimeConfig(); // 获取运行时配置
// console.log(config);
const appConfig = useAppConfig(); // 获取应用配置
// console.log(appConfig);
</script>

<style lang="scss" scoped>
.welcome {
  color: $primary;
}
.main-item {
  color: rgb(56, 113, 238);
  cursor: pointer;
  margin-bottom: 30px;
}
</style>
