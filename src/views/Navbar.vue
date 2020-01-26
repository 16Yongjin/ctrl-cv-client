<template lang="pug">
.container
  b-navbar#navbar
    template(slot='brand')
      b-navbar-item(tag='router-link', :to="{ path: '/' }")
        Logo
    template(slot='start')
      b-navbar-item(href='#')
        | Home
      b-navbar-item(href='#')
        | Documentation
      b-navbar-dropdown(label='Info')
        b-navbar-item(href='#')
          | About
        b-navbar-item(href='#')
          | Contact
    template(slot='end')
      b-navbar-item(tag='div')
        .buttons
          a.button.is-primary
            strong Sign up
          a.button.is-light
            | Log in
</template>

<script>
import Logo from "@/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style scoped>
#navbar {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
