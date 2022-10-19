import { showMessagePopup } from './show-message-popup';

export const showLuggageMessage = () =>
{
  showMessagePopup('FORMA VK ORD', 'lorem text text text');
};

export const showSelectionMessage = () =>
{
  showMessagePopup('SELECTION_HEADER', 'SELECTION_TEXT');
};

export const showDetailsMessage = () =>
{
  showMessagePopup('FLIGHT_DETAILS', 'CALL_US');
};

export const showTermsMessage = () =>
{
  showMessagePopup('TARIFF_TERMS', 'CALL_US');
};
