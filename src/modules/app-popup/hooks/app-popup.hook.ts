import {
  ref, shallowRef, computed, Component,
} from 'vue';

const open = ref(false);
const attrs = ref<Record<string, unknown>>({}); // Record  =  обьект. не обязательное значение {}
const innerComponent = shallowRef(null);

export const popup = computed(() => ({
  isOpen: open.value,
  component: innerComponent.value,
  attrs: attrs.value,
}));

export const openPopup = (component: Component, attributes: Record<string, unknown> = {}) =>
{
  open.value = true;
  attrs.value = attributes;
  innerComponent.value = component as unknown as null;
};

export const closePopup = () => { open.value = false; };
