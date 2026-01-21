import { escapeHtml } from '@hapi/hoek';

type Source = {
  src: string;
  mimeType: string;
};

const booleanAttributes = [
  'autoplay',
  'disablepictureinpicture',
  'muted',
  'playsinline',
  'loop',
  'controls',
] as const;

type BooleanAttribute = (typeof booleanAttributes)[number];

export type Options = {
  preload?: 'auto' | 'metadata' | 'none';
} & {
  [K in BooleanAttribute]?: boolean;
};

type Video = {
  sources: [Source, ...Source[]];
  options: Options;
  title?: string;
  alt?: string;
};

function getStyle() {
  return {
    video: `display: block; width: 100%; height: auto;`,
    wrapper: `display: block; max-width: 100%; margin: 0 auto;`,
  };
}

export function getVideoHtml({ sources, options, title, alt }: Video) {
  const sourceTags = sources.map(({ src, mimeType }) => {
    return `<source src="${src}" type="${mimeType}">`;
  });
  const fallback = escapeHtml(alt || 'Your browser does not support the video tag.');
  const style = getStyle();
  const attrs: string[] = [];

  booleanAttributes.forEach(attr => {
    if (options[attr]) {
      attrs.push(attr);
    }
  });

  if (options.preload && !options.autoplay) {
    attrs.push(`preload="${escapeHtml(options.preload)}"`);
  }

  if (title) {
    attrs.push(`title="${escapeHtml(title)}"`);
  }

  attrs.push(`style="${style.video}"`);

  return `
    <span class="gatsby-video-aspect-ratio" style="${style.wrapper}">
      <video ${attrs.join(' ')}>
        ${sourceTags.join('')}
        ${fallback}
      </video>
    </span>
  `;
}
