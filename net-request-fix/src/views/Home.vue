<template>
  <div class="home">
    <button @click="handleGet">发送get请求</button>
    <button @click="handlePost">发送post请求</button>
    <button @click="useMineAxiosGet">调用封装的get请求</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
import { get } from '../utils/request'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  methods: {
    handleGet() {
      /**
       * 发起get请求
       * 参数一 表示请求地址
       * 参数二 表示配置信息
       *   params 表示传递到服务器端的数据，以url参数的形式拼接在请求地址后面
       *     { page: 1, per: 3 }
       *     比如:https://api.cat-shop.penkuoer.com/api/v1/products
       *     最终生成的URL为
       *     https://api.cat-shop.penkuoer.com/api/v1/products?page=1&per=3
       *   headers 表示请求头
       */
      axios
        .get('https://api.cat-shop.penkuoer.com/api/v1/products', {
          params: {
            page: 3,
            per: 2,
          },
          headers: {},
        })
        .then((res) => console.log(res))
    },
    handlePost() {
      /**
       * post请求传递三个参数
       *  请求地址
       *  传递的数据 在请求体中传递
       *   axios默认发送的数据是json格式的
       * 配置信息
       *  headers
       *    content-type:'application/json' 默认
       */
      axios
        .post(
          'https://api.cat-shop.penkuoer.com/api/v1/auth/login',
          {
            userName: 'xiaoming',
            passWord: '111111',
          },
          {
            params: {
              a: 123,
              b: 'haha',
            },
          }
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    },
    useMineAxiosGet() {
      get('/api/v1/products', {
        page: 3,
        per: 2,
      }).then((res) => console.log(res))
    },
  },
}
</script>
