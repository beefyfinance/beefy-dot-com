import { escapeHtml } from '@hapi/hoek';
const booleanAttributes = [
    'autoplay',
    'disablepictureinpicture',
    'muted',
    'playsinline',
    'loop',
    'controls',
];
function getStyle() {
    return {
        video: `display: block; width: 100%; height: auto;`,
        wrapper: `display: block; max-width: 100%; margin: 0 auto;`,
    };
}
export function getVideoHtml({ sources, options, title, alt }) {
    const sourceTags = sources.map(({ src, mimeType }) => {
        return `<source src="${src}" type="${mimeType}">`;
    });
    const fallback = escapeHtml(alt || 'Your browser does not support the video tag.');
    const style = getStyle();
    const attrs = [];
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
