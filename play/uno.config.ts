import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetWind,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss';
import { presetIkun, getCSSPreflights, getSafeList } from '@ikun-ui/preset';
export default defineConfig({
	presets: [
		presetWind(),
		presetAttributify(),
		presetIcons({
			scale: 1.2,
			warn: true,
			extraProperties: {
				display: 'inline-block',
				'vertical-align': 'middle'
			}
		}),
		presetTypography(),
		presetIkun(undefined, '#409EFF')
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	safelist: [
		// kun
		...getSafeList()
	],
	preflights: [
		// kun
		{
			layer: 'base',
			getCSS: () => `
    :root {
      ${getCSSPreflights()}
    }
    :root.dark {
      ${getCSSPreflights()}
    }
    button,select,input,option {
      outline: none;
      -webkit-appearance: none
    }
    `
		}
	]
});
