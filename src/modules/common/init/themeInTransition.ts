// Функции для установки и пловной смены цветовой темы
const setTheme = (theme:string) =>
{
  const themeLink = document.querySelector<HTMLElement>('html[data-theme]');
  if (!themeLink)
  {
    return;
  }
  themeLink.classList.add('color-theme-in-transition');
  themeLink.dataset.theme = theme;

  window.setTimeout(() =>
  {
    themeLink.classList.remove('color-theme-in-transition');
  }, 300);
};

export const getThemeLockalStorage = () =>
{
  if (!localStorage.getItem('theme')) return;
  if (localStorage.getItem('theme') === 'dark') return;

  const theme = localStorage.getItem('theme') as string;
  setTheme(theme);
};

getThemeLockalStorage();

const setThemeLockalStorage = (theme:string) =>
{
  localStorage.setItem('theme', theme);
};

export const changeTheme = (e:any) =>
{
  const { theme } = e.target.dataset;
  setTheme(theme);
  setThemeLockalStorage(theme);
};
