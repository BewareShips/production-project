import type { Configuration as DevServerConfiguraation } from 'webpack-dev-server';
import { BuildOptions } from './types/config';
export function buildDevServer(options: BuildOptions): DevServerConfiguraation {
  return {
    port: options.port,
    open:true,
    historyApiFallback:true,
    hot:true
  }
}