import Vue = require('vue');
import { ComponentOptions } from 'vue';
import Meta = require('../index');
import { MetaInfo } from '../index';

Vue.use(Meta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid',
});

const app = new Vue();
const meta = app.$meta();

const toInject = meta.inject();
const title: string = toInject.title.text();
const htmlAttrs: string = toInject.htmlAttrs.text();
const bodyAttrs: string = toInject.bodyAttrs.text();
const link: string = toInject.link.text();
const style: string = toInject.style.text();
const script: string = toInject.script.text();
const noscript: string = toInject.noscript.text();
const metaText: string = toInject.meta.text();

const newInfo: MetaInfo = meta.refresh();

interface MetaComponent extends Vue { }

const metaInfo = {
  title: 'Default Title',
  titleTemplate: '%s | My Awesome Webapp',
  htmlAttrs: {
    foo: 'bar',
    amp: undefined
  },
  bodyAttrs: {
    bar: 'baz' 
  },
  base: { 
    target: '_blank',
    href: '/',
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'stylesheet', href: '/css/index.css' },
    { rel: 'favicon', href: 'favicon.ico' }
  ],
  style: [
    { cssText: '.foo { color: red }', type: 'text/css' }
  ],
  script: [
    { innerHTML: '{ "@context": "http://schema.org" }', type: 'application/ld+json' }
  ],
  noscript: [
    { innerHTML: 'This website requires JavaScript.' }
  ],
  __dangerouslyDisableSanitizers: ['meta'],
  changed (newInfo: MetaInfo, addedTags: Array<HTMLElement>, removedTags: Array<HTMLElement>) {
  },
};

const a: ComponentOptions<MetaComponent> = {
  name: 'Foo',
  metaInfo,
};

const b: ComponentOptions<MetaComponent> = {
  name: 'Foo',
  metaInfo: () => {
    return metaInfo;
  },
};
