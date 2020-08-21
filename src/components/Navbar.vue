<template>
    <div class="nav-container">
        <ul>
            <router-link :to="'/'"><li>Home</li></router-link>
            <router-link :to="'/JavaScript'"><li>JavaScript</li></router-link>
            <router-link :to="'/StateManagement'"><li>State Management</li></router-link>
        </ul>
        <hr>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default class Navbar extends Vue {

}
</script>

<style lang="scss" scoped>
.nav-container {
    width: 100%;
}

ul {
    width: 100%;

    li {
        display: inline;
        margin: 18px;
    }
}

a {
    text-decoration: none;
    transition: 300ms;
    font-weight: bold;
    color: #35495e;

    &:visited {
        color: #35495e;
    }

    &:hover {
        color: #42b883;
    }
}
</style>