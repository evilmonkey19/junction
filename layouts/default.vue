<template>
  <div id="page-container">
    <header-component/>
    <div id="content-wrap">
      <main>
        <Nuxt />
      </main>
      </div>
    <footer-component/>
  </div>
</template>

<script>
</script>

<style>
#page-container {
  position: relative;
  min-height: 100vh;
}

#content-wrap {
  padding-bottom: 2.5rem;    /* Footer height */
}
</style>