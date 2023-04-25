// import { createApp } from 'vue';
import { createApp } from 'vue/dist/vue.cjs';
import SmartyUI from './entry';
// import { Button } from './components/Button';
// createApp(Button).mount('#app');

createApp({
  template: `
    <div>
        <QButton color="pink" round plain icon="search">普通按钮</QButton>
        <QButton color="yellow" round plain icon="edit">普通按钮</QButton>
        <QButton color="purple" round plain icon="delete">普通按钮</QButton>
    </div>
  `
})
  .use(SmartyUI)
  .mount('#app');

// import SFCButton from './components/SFCButton.vue';
// createApp(SFCButton).mount('#app');
