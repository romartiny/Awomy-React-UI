const path = require('path');

function buildLoaders () {
  const babelLoader = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react']
      }
    }
  };

  const styleLoader = {
    test: /\.(scss|css)$/,
    use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
  };

  const imageLoader = {
    test: /\.(png|jpg|jpeg|gif|svg)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'images/[contenthash:32].[ext]'
        }
      }
    ],
    include: path.resolve(__dirname, 'src/assets/img')
  };

  const svgLoader = {
    test: /\.(png|jpg|jpeg|gif|svg)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[contenthash:32].[ext]'
        }
      }
    ]
  };

  const stabLoader = {
    test: /\.(json|ico)$/,
    use: {
      loader: 'file-loader',
      options: {
        name: '[contenthash:32].[ext]'
      }
    }
  };

  return [
    stabLoader,
    svgLoader,
    styleLoader,
    imageLoader,
    babelLoader
  ];
}

module.exports = { buildLoaders };
