const path = require('path');

module.exports = env => {
	const config = {
		entry: {
			app: [path.resolve(__dirname, './src/index.tsx')]
		},
		devtool: 'inline-source-map',
		mode: env.NODE_ENV === 'development' ? 'development' : 'production',
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				}
			]
		},
		resolve: {
			extensions: [ '*', '.ts', '.js', '.tsx' ]
		},
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, 'dist'),
			publicPath: '/dist/',
		}
	}

	return config;
};