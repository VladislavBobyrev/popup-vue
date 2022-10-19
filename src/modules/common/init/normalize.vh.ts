/** Функция устанавливает 100vh для доступного к просмотру вюпорта
 * тем самым приводя для всех браузеров высоту к одному виду
 * и адапптирует так что в браузерах с полосами которые сверху и снизу сайт не заходит под них
 * @function init100vh
 */
export function init100vh()
{
  const setHeight = () =>
  {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setHeight();
  window.addEventListener('resize', setHeight);
}
