import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from "@astrojs/react";
import path from 'path';
import { fileURLToPath } from 'url';
import tailwind from "@astrojs/tailwind";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: {
      'process.env': process.env,
    }
  },
	build: {
    inlineStylesheets: 'always'
  },
  integrations: [starlight({
    title: '开源地带',
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Example Guide',
        link: '/guides/example/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }],
    customCss: [
      // Relative path to your custom CSS file
      './src/styles/globals.css',
    ],
  }), react(), tailwind(),]
});