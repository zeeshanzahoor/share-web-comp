const customWebpackRules = {
	rules: [
		{
			test: /\.m?js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-react', '@babel/preset-env'],
					plugins: ['@babel/plugin-transform-runtime'],
				},
			},
		},
	],
};

module.exports = {
	stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
	webpackFinal: (config) => {
		return {
			...config,
			module: {
				...config.module,
				rules: customWebpackRules.rules,
			},
		};
	},
	core: {
		builder: 'webpack5',
	},
};
