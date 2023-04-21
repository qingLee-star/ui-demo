import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
// import { presetUno, presetAttributify, presetIcons } from 'unocss';
// import Unocss from "unocss/vite";
import Unocss from "./config/unocss";

const rollupOptions = {
  external: ['vue'],
  output: {
    globals: {
      vue: 'Vue'
    },
    assetFileNames: `style.[ext]`
  }
};
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Unocss()
  ],
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true,
    lib: {
      entry: './src/entry.ts',
      name: 'MyUI',
      fileName: 'my-ui',
      formats: ['esm', 'umd', 'iife'],
    }
  }
});
