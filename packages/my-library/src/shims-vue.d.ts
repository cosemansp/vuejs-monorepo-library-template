declare module '*.vue' {
  import Vue from 'vue';

  export default Vue;
}

declare module '*.svg?component' {
  import { DefineComponent } from 'vue';

  const src: DefineComponent;
  export default src;
}
