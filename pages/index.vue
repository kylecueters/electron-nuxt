<template>
  <section class="container">
    <div>
      <img width="256" src="~/assets/img/logo.png" />
      <h1>electron-nuxt</h1>
      <h2>Nuxt + Electron</h2>
      <a href="https://nuxtjs.org/" target="_blank" class="btn btn-primary"
        >Documentation</a
      >
      <a
        href="https://github.com/nuxt/nuxt.js"
        target="_blank"
        class="btn btn-primary"
        >GitHub</a
      >
      <a
        href="https://electronjs.org/"
        target="_blank"
        class="btn btn-secondary"
        >Electron</a
      >
      <a
        href="https://github.com/electron-userland/electron-builder"
        target="_blank"
        class="btn btn-secondary"
        >Electron Builder</a
      >
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.btn {
  margin: 0 8px;
}
</style>
