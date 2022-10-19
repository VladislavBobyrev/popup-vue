<script lang="ts" setup>
import '../index.scss';
import { showLuggageMessage } from '@/modules/app-popup/';
</script>

<template>
  <header>ВТакте.KZ</header>
  <main>Форма
    <button @click="showLuggageMessage" type="button">ОТКРЫТЬ</button>
  </main>
  <footer>Концовка</footer>
</template>
