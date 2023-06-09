import { presetUno, presetAttributify, presetIcons } from 'unocss';
import Unocss from 'unocss/vite';

const colors = [
  'pink',
  'grey',
  'yellow',
  'green',
  'purple'
];
const icons = ['search','edit','check','message','star-off','delete','add','share'];

const safelist = [
  ...colors.map(v => `bg-${v}-500`),
  ...colors.map(v => `hover:bg-${v}-700`),
  ...icons.map(v => `i-ic-baseline-${v}`),
];

export default () => 
  Unocss({
    safelist,
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons()
    ],
  });
