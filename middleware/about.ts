export default defineNuxtRouteMiddleware((to, from) => {
  console.log("about");
  console.log(to);
  console.log(from);
});
