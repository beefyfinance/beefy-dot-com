import { AdapterInit } from 'gatsby';
import { writeFile } from 'fs/promises';

/**
 * Gatsby adapter to create a _redirects file for cloud platforms like Netlify or CloudFlare Pages.
 */
export const createCloudRedirectsAdapter: AdapterInit<void> = () => {
  return {
    name: 'gatsby-plugin-cloud-redirects',
    async adapt({ routesManifest }) {
      const redirectLines: string[] = [];

      for (const route of routesManifest) {
        if (route.type !== 'redirect') {
          continue;
        }

        const fromPath = route.path;
        const { status, toPath } = route;
        redirectLines.push(`${fromPath} ${toPath} ${status}`);
      }

      await writeFile('public/_redirects', redirectLines.join('\n'), 'utf8');
    },
  };
};
