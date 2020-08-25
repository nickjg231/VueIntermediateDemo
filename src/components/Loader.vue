<template>
    <div class="loader-holder">
      <svg xmlns="http://www.w3.org/2000/svg" class="loader-svg" version="1" viewBox="0 0 198 199">
        <g fill="none" fill-rule="evenodd">
          <path fill="#184782" d="M152 42a79 79 0 0 0-49-21V0c25 1 47 11 64 27l-15 15z"/>
          <path fill="#456C9B" d="M152 157a79 79 0 0 1-49 21v21c25-2 47-12 64-27l-15-15z"/>
          <path fill="#184782" d="M177 102c-1 18-8 36-20 50l14 14c17-18 26-41 26-64h-20zm0-6c-1-18-8-35-20-49l14-15c17 18 26 41 26 64h-20z"/>
          <path fill="#E7ECF2" d="M46 42c13-12 30-20 49-21V0C70 1 48 11 31 27l15 15z"/>
          <path fill="#7491B4" d="M46 157c13 12 30 20 49 21v21c-25-2-47-12-64-27l15-15z"/>
          <path fill="#A2B5CD" d="M21 102c0 18 7 36 20 50l-15 14a99 99 0 0 1-26-64h21z"/>
          <path fill="#D1DAE6" d="M21 96c0-18 7-35 20-49L26 32A99 99 0 0 0 0 96h21z"/>
        </g>
      </svg>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({ name: 'loader' })
  export default class LoaderComponent extends Vue {}
</script>

<style lang="scss">
    .loader-holder {
        width: 100%;
        text-align: center;
    }
    svg.loader-svg {
        animation: spin 0.75s steps(8) infinite;
        max-width: 50px;
        max-height: 50px;
    }
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
</style>