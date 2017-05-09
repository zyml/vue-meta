/**
 * Augment the typings of Vue.js
 */

import Vue = require('vue');
import { MetaFunction, MetaInfo, MetaInfoFunction } from './index';

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    metaInfo?: MetaInfo | MetaInfoFunction;
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $meta: MetaFunction;
  }
}
