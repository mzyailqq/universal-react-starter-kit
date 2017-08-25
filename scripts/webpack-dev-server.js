/* eslint import/first: 0 */
import '../dotenv';
import Koa from 'koa';
import webpack from 'webpack';
import middleware from 'koa-webpack';
import { appConfig } from '../src/config';
import webpackConfig from '../webpack/dev.config.babel';

const { host, port } = appConfig;
const devPort = parseInt(port, 10) + 1;
const dev = {
  contentBase: `http://${host}:${devPort}`,
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: { colors: true }
};
const compiler = webpack(webpackConfig);
const app = new Koa();
app.use(middleware({
  compiler,
  dev
}));

app.listen(devPort, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`==> 🚧  Webpack development server listening on port ${devPort}`);
  }
});
