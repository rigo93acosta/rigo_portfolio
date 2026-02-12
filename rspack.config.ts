import { defineConfig } from '@rspack/cli';
import { rspack } from '@rspack/core';
import RefreshPlugin from '@rspack/plugin-react-refresh';
import { withZephyr } from 'zephyr-webpack-plugin';

const config = defineConfig({
  context: __dirname,
  entry: {
    main: './src/main.tsx',
  },
  resolve: {
    extensions: ['...', '.ts', '.tsx', '.jsx'], // Importante para resolver extensiones
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Aplica a archivos .ts y .tsx
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: true, // Habilita soporte para JSX/TSX
              },
              transform: {
                react: {
                  runtime: 'automatic', // Permite usar JSX sin importar React
                },
              },
            },
          },
        },
        type: 'javascript/auto',
      },
      {
        test: /\.css$/, // Regla simple para archivos CSS
        use: [
            rspack.CssExtractRspackPlugin.loader, 
            'css-loader'
        ], 
        type: 'javascript/auto',
      }
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: './index.html',
    }),
    new rspack.CssExtractRspackPlugin({}), // Extrae el CSS
    new RefreshPlugin(),
  ],
});

// Envolvemos la configuración con Zephyr
export default withZephyr()(config);
