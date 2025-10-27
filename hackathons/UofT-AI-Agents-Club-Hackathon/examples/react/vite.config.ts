import { PluginOption, ResolveOptions, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const resolve: ResolveOptions = {};
  const plugins: PluginOption[] = [react(), nodePolyfills()];

  /**
   * Build SDK from source code in development mode
   */
  if (command === 'serve') {
    resolve.extensions = ['.web.js', '.js', '.web.ts', '.ts', '.jsx', '.tsx', '.json'];
    plugins.push(tsconfigPaths());
  }

  return {
    base: './',
    plugins,
    resolve,
  };
});
