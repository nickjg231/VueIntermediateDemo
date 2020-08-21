<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p class="title">VueJS Part II: Intermediate Concepts</p>
    <p>Events, Binding, State Management, and More.</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
  .home {
    text-align: center;
    margin: 180px auto 0;
    font-size: 20px;
    
    .title {
      font-size: 36px;
    }
  }
</style>