<template>
  <div class="student">
    <h1>我是学生界面</h1>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
export default {
  name: "Student",
  components: {
    Footer
  }
};
</script>

<style>
.student {
  background-color: green;
}
</style>