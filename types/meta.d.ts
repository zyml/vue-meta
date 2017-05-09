import { GeneratorDictionary } from './server';

type Dictionary<T> = { [key: string]: T };

export type MetaFunction = () => MetaInjector;
export type MetaInfoFunction = () => MetaInfo;
export type MetaAttributes = Dictionary<any>;

export interface MetaInfo {
  title?: string;
  titleTemplate?: string | null;
  htmlAttrs?: MetaAttributes;
  bodyAttrs?: MetaAttributes;
  base?: MetaAttributes;
  meta?: Array<MetaAttributes>;
  style?: Array<MetaAttributes>;
  script?: Array<MetaAttributes>;
  noscript?: Array<MetaAttributes>;
  __dangerouslyDisableSanitizers?: Array<string>,
  changed?: (
    newInfo: MetaInfo,
    addedTags: Array<HTMLElement>,
    removedTags: Array<HTMLElement>
  ) => any;
}

export interface MetaInjector {
  inject: () => GeneratorDictionary;
  refresh: () => MetaInfo;
}

export interface MetaOptions {
  keyName?: string;
  attribute?: string;
  ssrAttribute?: string;
  tagIDKeyName?: string;
}
