<template>
  <div id='app'>
    <Navbar></Navbar>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import CodeSnippet from '@/components/CodeSnippet.vue';
import SectionComponent from '@/components/SectionComponent.vue';
import Navbar from '@/components/Navbar.vue';

@Component({
  components: {
    SectionComponent,
    CodeSnippet,
    Navbar
  }
})
export default class App extends Vue {
  private created() {
    this.$router.afterEach(() => {
      this.$nextTick(() => {
        (window as any).PR.prettyPrint();
      });
    });
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700');

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 800px;
  margin: 32px auto 128px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.two-columns {
  display: flex;

  .item {
    flex: 1;
  }
}

code {
  background-color: #eff0f1;
  padding: 0 8px;
}
.spaced-list {
  li {
    padding-top: 12px;
    padding-bottom: 24px;
    border-bottom: 1px solid #2c3e50;

    &:last-child {
      border-bottom: none;
    }
  }
}

.tight-list {
  & > li {
    margin-bottom: 16px;

    p {
      margin: 8px 0;
    }
  }
}
</style>
