const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',  // Указываем режим разработки
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',  // Вставляет CSS в DOM
          'css-loader',    // Обрабатывает CSS
          'postcss-loader' // Обрабатывает PostCSS, если используется
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,  // Шрифты и другие ресурсы
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,  // Если файл меньше 10KB, он будет встроен в код
              name: 'fonts/[name].[hash:8].[ext]'  // Путь к шрифтам
            }
          }
        ]
      },
      {
        test: /\.js$/,  // Применяем к любым файлам с расширением .js
        exclude: /node_modules/,  // Исключаем папку node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],  // Используем пресеты для ES6 и React
          },
        },
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/i,  // Для изображений форматов jpg, jpeg, png, gif, svg
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',  // Формат имени файла (с хешом для кеширования)
              outputPath: 'images/',  // Папка, куда будут сохраняться изображения
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Используем шаблон HTML
      filename: 'index.html',         // Имя итогового HTML-файла
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
};
