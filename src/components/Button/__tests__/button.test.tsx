import Button from '../button';
import { shallowMount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

describe('color', () => {
  test('default', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button'
      }
    })
    expect(wrapper.classes().map(v => v.replace('\n', '')).includes('bg-pink-500')).toBe(true);
  });
  test('yellow', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Button'
      },
      props: {
        color: 'yellow'
      }
    });
    expect(wrapper.classes().map(v => v.replace('\n', '')).includes('bg-yellow-500')).toBe(true);
  })
})