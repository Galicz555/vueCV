<template>
  <div>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </div>
  <!--<img alt="Vue logo" src="./assets/logo.png" />-->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>
