import { init100vh } from '@/modules/common/init/normalize.vh';
import { getThemeLockalStorage } from '@/modules/common/init/themeInTransition';

export const init = () =>
{
  getThemeLockalStorage();
  init100vh();
};
