<template>
  <div>
    <CV/>
  </div>
  <!--<img alt="Vue logo" src="./assets/logo.png" />-->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CV from './components/CV.vue'

export default defineComponent({
  name: 'App',
  components: {
    CV
  }
})
</script>
