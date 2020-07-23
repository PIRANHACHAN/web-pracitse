<template>
  <div class="home">
    <div class="header">
      <div class="logo">{{ msg }}</div>
      <div class="nav">
        <router-link to="/user">go to user</router-link>
        <router-link to="/student">go to student</router-link>
        <br />
        <br />
        <input type="button" value="显示用户" @click="handleClickShowUser" />
        <input type="button" value="显示学生" @click="handleClickShowStudent" />
      </div>
    </div>
    <div class="main">
      <User class="user" v-if="showUser" />
      <Student class="student" v-if="showStudent" />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import User from "../components/User";
import Student from "../components/Student";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    User,
    Student,
    Footer
  },
  data() {
    return {
      msg: "主页",
      showUser: false,
      showStudent: true
    };
  },
  methods: {
    handleClickShowUser() {
      if (!this.showStudent) {
        this.showUser = true;
      } else {
        this.showStudent = false;
        this.showUser = true;
      }
    },
    handleClickShowStudent() {
      if (!this.showUser) {
        this.showStudent = true;
      } else {
        this.showUser = false;
        this.showStudent = true;
      }
    }
  }
};
</script>

<style scoped>
.home {
  background-color: pink;
  width: 500px;
  margin: 0 auto;
}
.student {
  background-color: #fff;
}
.user {
  background-color: #fff;
}
</style>
