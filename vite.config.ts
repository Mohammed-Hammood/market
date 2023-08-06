import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	// server: {
	// 	hmr: {
	// 		overlay: true
	// 	}
	// },
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		}
	}
})
