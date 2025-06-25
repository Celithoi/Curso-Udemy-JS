import path from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
  mode: 'development',
  entry: './src/A18-Exercicio/A18-Exercicio.ts',
  module: {
    // --- MUDANÇA AQUI ---
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        // 'use' agora é um array de objetos
        use: [
          {
            // O loader e suas options ficam dentro de um objeto
            loader: 'ts-loader',
            options: {
              // A opção correta é 'configFile' para especificar o arquivo de configuração
              configFile: 'tsconfig.frontend.json',
            },
          },
        ],
      },
    ],
    // --- FIM DA MUDANÇA ---
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend', 'assets', 'js'),
  },
  devtool: 'source-map',
};

export default config;
