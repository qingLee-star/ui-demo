import { defineComponent, PropType, toRefs, h } from 'vue';
import "uno.css";

export type IColor = 'pink' | 'grey' | 'yellow' | 'green' | 'purple';
export const props = {
  color: {
    type: String as PropType<IColor>, //将一个字符串声明为某个类型的属性类型
    default: 'pink'
  },
  icon: {
    type: String,
    default: "",
  },
}
export default defineComponent({
  name: 'QButton',
  props,
  setup(props, {slots}) {
    return () => <button
      class={`
      py-2 
      px-4 
      font-semibold 
      rounded-lg 
      shadow-md 
      text-white 
      bg-${props.color}-500 
      hover:bg-${props.color}-700 
      border-none 
      cursor-pointer
      m-1
      `}
        >
        { props.icon !== "" ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : "" }
        {slots.default ? slots.default() : ''}
     </button>
  }
  /* render() {
    return h('button', null, 'QButton');
  } */
});