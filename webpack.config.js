const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  // other webpack configuration...

  optimization: {
    minimize: true,
    minimizer: [
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: ['default', { discardComments: { removeAll: true } }],
          },
        }),
        // other minimizers if needed
      ],
  },
};
