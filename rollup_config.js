import resolve from '@rollup/plugin-node-resolve'; // locate and bundle dependencies in node_modules (mandatory)
import { terser } from "rollup-plugin-terser"; // code minification (optional)
import copy from 'rollup-plugin-copy'; // to copy files (css, assets etc)


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
			{ src: 'node_modules/three/examples/jsm/libs/ammo.wasm.js', dest: 'dist/jsm/libs/' },
			{ src: 'node_modules/three/examples/jsm/libs/ammo.wasm.wasm', dest: 'dist/jsm/libs/' }
		]
	}),
	resolve(), terser() ]
};
