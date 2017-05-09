export interface Generator {
  text(): string;
}

export interface GeneratorDictionary {
  title: Generator;
  titleChunk: string;
  titleTemplate: string;
  htmlAttrs: Generator;
  bodyAttrs: Generator;
  link: Generator;
  style: Generator;
  script: Generator;
  noscript: Generator;
  meta: Generator;
}
