import _Vue = require('vue');

import * as M from './meta';
import * as S from './server';

import './vue';

declare namespace VueMeta {
  export type MetaAttributes = M.MetaAttributes;
  export type MetaFunction = M.MetaFunction;
  export type MetaInfo = M.MetaInfo;
  export type MetaInfoFunction = M.MetaInfoFunction;
  export type MetaInjector = M.MetaInjector;
  export type MetaOptions = M.MetaOptions;

  export type GeneratorDictionary = S.GeneratorDictionary;
  export type Generator = S.Generator;
}

declare function VueMeta(Vue: typeof _Vue, options?: M.MetaOptions): void;

export = VueMeta;
