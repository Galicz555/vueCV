<template>
  <div>
    <NavBar/>
    <CV/>
  </div>
  <!--<img alt="Vue logo" src="./assets/logo.png" />-->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/navBar.vue'
import CV from './components/CV.vue'

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    CV,
  }
})
</script>
