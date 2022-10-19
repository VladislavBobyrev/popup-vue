<script lang="ts" setup>
import { MainPage } from './modules/main-page';
import { AppPopup } from './modules/app-popup';
import AppLoader from './modules/common/components/loader/AppLoader.vue';
import { openLoader, closeLoader } from './modules/common/hooks/loader.hook';

openLoader();

setTimeout(() =>
{
  closeLoader();
}, 2000);
</script>

<template>
  <app-loader />
  <app-popup />
  <main-page />
</template>
