/// <reference types="vite/client" />

declare module "*.vue" {
   import type { DefineComponent } from "vue";
   const component: DefineComponent<{}, {}, any>;
   export default component;
}

interface ObjectConstructor {
   /**
    * Groups members of an iterable according to the return value of the passed callback.
    * @param items An iterable.
    * @param keySelector A callback which will be invoked for each item in items.
    */
   groupBy<K extends PropertyKey, T>(
      items: Iterable<T>,
      keySelector: (item: T, index: number) => K,
   ): Partial<Record<K, T[]>>;
}

interface ImportMetaEnv {
   readonly VITE_APP_ID_DEV: string;
   readonly VITE_APP_ID_PROD: string;
}
