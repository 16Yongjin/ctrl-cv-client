<template lang="pug">
#app
  navbar
  router-view
</template>

<script>
import Navbar from "@/views/Navbar.vue";

export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss"></style>
