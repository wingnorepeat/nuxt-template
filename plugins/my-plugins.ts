export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      injected: () => "my injected function"
    }
  };
});
