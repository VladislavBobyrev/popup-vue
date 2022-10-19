<script lang="ts" setup>
import { closePopup, popup } from '../hooks/app-popup.hook';
import '../index.scss';
</script>

<template>
  <div class="popup-bg" :class="{ close: !popup.isOpen }" @click="closePopup" @keypress="bar">
    <div class="popup" @click.stop>
      <component :is="popup.component" v-bind="popup.attrs" />
    </div>
  </div>
</template>
