<template>
  <div class="default-layouts">
    <ul>
      <div class="main-item" @click="gotoMain">go to main page</div>
      <li>
        <NuxtLink to="/home">home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">about</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/role/list">role/list</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/login">login</NuxtLink>
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
function gotoMain() {
  // 编程式导航不利于seo, 有两种方式
  navigateTo("/"); // 方式一，支持性比router好
  // const router = useRouter();
  // router.push("/"); 方式二
}
</script>
