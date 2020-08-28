<template>
    <div>
        <input v-model="message" placeholder="edit me">
        <p>Message is: {{ message }}</p>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class DefaultInputValues extends Vue {
    private message = '';
}
</script>

<style lang="scss" scoped>

</style>