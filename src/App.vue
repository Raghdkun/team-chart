<template>
  <div id="app">
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #121212;
  color: #e0e0e0;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

#app {
  width: 100%;
  max-width: 1200px;
  padding: 20px;
}
</style>
