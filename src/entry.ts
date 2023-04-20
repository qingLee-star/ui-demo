import { App } from "vue";
import { Button } from "./components/Button";

const componentList = { Button };
// 单独导出
export { Button };
// install
export default {
  install(app:App):void {
    for (const key in componentList) {
      const com = componentList[key];
      app.component(com.name, com)
    }
  },
};
