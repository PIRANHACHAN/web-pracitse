<template>
  <div class="user">
    <h1>我是用户界面</h1>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
export default {
  name: "User",
  components: {
    Footer
  }
};
</script>

<style>
.user {
  background-color: yellow;
}
</style>