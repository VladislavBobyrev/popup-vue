import { openPopup } from './app-popup.hook';
import MessagePopup from '../components/MessagePopup.vue';

export const showMessagePopup = (header: string, text: string) =>
{
  openPopup(MessagePopup, { header, text });
};
