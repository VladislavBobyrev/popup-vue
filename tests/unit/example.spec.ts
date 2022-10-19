import { shallowMount } from '@vue/test-utils';
import AppPopup from '@/modules/app-popup/components/AppPopup.vue';
import { popup } from '@/modules/app-popup/hooks/app-popup.hook';
import { increment } from '@/modules/main-page/helpers/helpers';

describe('increment', () =>
{
  test('increments the current number 1', () =>
  {
    expect(increment(0, 10)).toBe(1);
  });

  test('does not inctement the current number over the max', () =>
  {
    expect(increment(10, 10)).toBe(10);
  });

  test('has a default max of 10', () =>
  {
    expect(increment(10)).toBe(10);
  });
});

describe('Vue component', () =>
{
  test(' AppPopup', () =>
  {
    // отрисовываем компонент в изоляции
    const wrapper = shallowMount(AppPopup);

    // устанавливаем пропсы
    wrapper.setProps({ popup });

    // проверяем, что  popup отобразился
    expect(wrapper);
  });
});
