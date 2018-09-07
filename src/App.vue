<template>
  <div>
    <div class="app-header">
      <div class="container app-nav">
        <img src="./assets/logo.png" class="app-logo" alt="logo" />
        <router-link to="/">Top</router-link>
        <router-link to="/ask">Ask</router-link>
      </div>
    </div>
    <div class="container">
      <div class="app-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background: #f6f6f6;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.container {
  margin: 0 auto;
  max-width: 768px;
}

.app-header {
  background: #333;
}

.app-nav {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.app-nav > * {
  padding: 16px;
  color: white;
  text-decoration: none;
}

.app-logo {
  height: 32px;
}

.app-content {
  padding: 16px;
}
</style>
