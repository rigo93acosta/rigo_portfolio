import { defineConfig } from '@rspack/cli';
import { rspack } from '@rspack/core';
import RefreshPlugin from '@rspack/plugin-react-refresh';
// 1. Importamos Zephyr
import { withZephyr } from 'zephyr-webpack-plugin';

const config = defineConfig({
  context: __dirname,
  entry: {
    main: './src/main.tsx',
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: './index.html',
    }),
    new RefreshPlugin(),
  ],
});

// 2. Envolvemos la configuración con withZephyr()
export default withZephyr()(config);
