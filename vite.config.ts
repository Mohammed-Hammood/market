import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		crx({ manifest }),
	],

	build: {
		outDir: path.resolve(__dirname, 'build'),
		manifest:true,
		rollupOptions: {
			output: {
				
				assetFileNames: (assetInfo) => {

					//split the filename and get the last element (the file extension)
					let extensionType = assetInfo.name.split('.').at(-1);


					//test if the extension is an image type
					if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extensionType)) {
						extensionType = 'img';
					}
					// tes if the file is a font, then put within css files
					else if (/ttf|woff|woff2|otf/i.test(extensionType)){
						extensionType = 'css';
					}

					return `static/${extensionType}/[name]-[hash][extname]`;
				},

				//Set output.chunkFileNames to configure the vendor chunk filenames.
				chunkFileNames: 'static/js/[name]-[hash].js',

				//Set output.entryFileNames to configure the index.js filename.
				entryFileNames: 'static/js/[name]-[hash].js',
			},
		}
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		}
	}
})
