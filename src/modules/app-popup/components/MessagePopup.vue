<script setup lang="ts">
import { closePopup } from '../hooks/app-popup.hook';

defineProps<{header: string; text: string }>();
</script>

<template>
  <div class="message-popup">
    <h1>{{ header }}</h1>
    <p>{{ text }}</p>

    <button class="ok-button" @click="closePopup" type="button">success</button>
  </div>
</template>
