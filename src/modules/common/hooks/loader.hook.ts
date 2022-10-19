import { ref, computed } from 'vue';

const isOpen = ref(false);
export const loader = computed(() => isOpen.value);

export const openLoader = () => { isOpen.value = true; };
export const closeLoader = () => { isOpen.value = false; };
