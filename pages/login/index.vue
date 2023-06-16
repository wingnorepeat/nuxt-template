<template>
  <div>Page: login</div>
  <div @click="onLogin">登录</div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "custom-layout"
});
function onLogin() {
  const auth = useAuth();
  auth.value = true;
  navigateTo("/");
}
</script>
<style scoped></style>
