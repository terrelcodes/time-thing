// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://time-thing.t11y.dev/',
	trailingSlash: 'always',
	base: '/',
	integrations: [
		starlight({
			title: 'TimeThing Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/terrelcodes/time-thing' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Jujutsu GitHub Guide', slug: 'guides/jujutsu' },
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],

});
