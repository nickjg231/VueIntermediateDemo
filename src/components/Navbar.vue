<template>
    <div class="nav-container">
        <ul>
            <router-link :to="'/JavaScript'"><li>JavaScript</li></router-link>
            <router-link :to="'/StateManagement'"><li>State Management</li></router-link>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

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
</style>