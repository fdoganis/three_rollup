import resolve from '@rollup/plugin-node-resolve'; // locate and bundle dependencies in node_modules (mandatory)
import { terser } from "rollup-plugin-terser"; // code minification (optional)
import copy from 'rollup-plugin-copy'; // to copy files (css, assets etc)
import livereload from 'rollup-plugin-livereload'; // to reload automatically after source code changes
import serve from 'rollup-plugin-serve';

export default {
	input: 'src/main.js',
	output: [
		{
			format: 'umd',
			name: 'MYAPP',
			file: 'dist/main.js'
		}
	],
	plugins: [ copy({
		targets: [
			{ src: 'src/index.html', dest: 'dist/' },
			{ src: 'src/*.css', dest: 'dist/' },
			{ src: 'assets/*', dest: 'dist/assets/' },
		]
	}),
	resolve(), terser(), serve('dist'), livereload('dist') ]
};
