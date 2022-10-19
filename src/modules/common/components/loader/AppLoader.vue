<script lang="ts" setup>
import './index.scss';
import { loader } from '@/modules/common/hooks/loader.hook';
</script>

<template>
  <div class="loader" :class="{ close: !loader }">
    <span>
      <i />
    </span>
  </div>
</template>
